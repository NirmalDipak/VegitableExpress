exports.genrateBase64 = (base64String) => {
    return Buffer.from(base64String).toString('base64')
}

exports.decodeBase64 = (base64String) => {
    return Buffer.from(base64String, 'base64').toString('ascii')
}