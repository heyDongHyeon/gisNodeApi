const pg = require('pg');

const config = {
    
    user:'postgres',
    host:'',
    database:'',
    password: '',
    port : 5432,
    max: 10,
}

let pool = null;

module.exports.poolConnect = async (param) => {
    //param.dburl
    //param.dbid
    //param.dbpw
    const {dburl, dbid, dbpw} = param;
    if ( dburl.indexOf('/') == -1 && dburl.indexOf(':') == -1 ) {

        return false;
    }

    const dburlSplit = dburl.split('/');
    const ipport = dburlSplit[0].split(':');
    
    config.user = dbid;
    config.password = dbpw;
    config.port = ipport[1];
    config.database = dburlSplit[1];
    config.host = ipport[0];

    pool = new pg.Pool(config);
    
    try {
        const isConnect = await pool.connect();
        return isConnect;
    } catch ( e ) {
        pool.end();
        return false;
    }
}

module.exports.query = (sql, param) => {
    return pool.query(sql, param);
}