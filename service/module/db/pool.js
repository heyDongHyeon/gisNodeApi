const pg = require('pg');

const config = {
    
    user:'postgres',
    host:'10.1.73.14',
    database:'xeus-gangwon-hwandonghae-v2',
    password: 'geomex12#',
    port : 5432,
    max: 10,
}

const pool = new pg.Pool(config);

module.exports.poolConnect = () => {

    return pool.connect((err) => {
        if (err) return done(err)
    });
}

module.exports.query = (sql, param) => {

    return pool.query(sql, param);
}