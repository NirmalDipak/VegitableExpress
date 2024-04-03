
const { config } = require('../../enviroment');
const sql = require('mssql')



exports.getUser = (phone_no, Password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let pool = await sql.connect(config);
            const result = await pool.request()
                .input('phone_no', sql.NVarChar, phone_no)
                .input('Password', sql.NVarChar, Password)
                .query('SELECT Name,ID,phone_no FROM Users WHERE phone_no = @phone_no AND Password = @Password');

            resolve(result.recordset);
        } catch (err) {
            console.error('SQL error', err);
            reject(err);
        }
    })
};

exports.validatePhoneNo = (phone_no) => {
    return new Promise(async (resolve, reject) => {
        debugger
        try {
            let pool = await sql.connect(config);
            const result = await pool.request()
                .input('phone_no', sql.NVarChar, phone_no)
                .query('SELECT Name,ID,phone_no FROM Users WHERE phone_no = @phone_no');

            resolve(result.recordset);
        } catch (err) {
            console.error('SQL error', err);
            reject(err);
        }
    })
};

exports.getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let pool = await sql.connect(config);
            const result = await pool.request()
                .query('SELECT Name,ID,phone_no FROM Users');
            resolve(result.recordset);
        } catch (err) {
            console.error('SQL error', err);
            reject(err);
        }
    });

}
