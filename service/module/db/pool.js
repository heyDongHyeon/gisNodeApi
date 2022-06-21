const pg = require('pg');

const config = {
    
    user:'postgres',
    host:'10.1.73.14',
    database:'xeus-gangwon-hwandonghae-v2',
    password: 'geomex12#',
    port : 5432,
    max: 10,
}

let pool = null;

module.exports.poolConnect = (param) => {
    //param.dburl
    //param.dbid
    //param.dbpw
    const {dburl, dbid, dbpw} = param;
    if ( dburl.indexOf('/') == -1 && dburl.indexOf(':') == -1 ) {

        return false;
    }

    const dburlSplit = dburl.split('/');
    console.log(dburlSplit);
    const ipport = dburlSplit[0].split(':');
    
    config.user = dbid;
    config.password = dbpw;
    config.port = ipport[1];
    config.database = dburlSplit[1];
    config.host = ipport[0];

    pool = new pg.Pool(config);

    return pool.connect((err) => {
        if (err) return done(err)
    });
}

module.exports.query = (sql, param) => {

    return pool.query(sql, param);
}