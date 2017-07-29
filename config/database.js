const crypto = require('crypto').randomBytes(256).toString('hex');

module .exports = {
    uri: 'mongodb://localhost/2017'+ this.db,
    secret: crypto,
    db: 'mean_with_angular'
}