
const {query} = require('../module/db/pool.js');

module.exports = LayerMapper = { 
    
    getList : async () => {

        const sql = 'select * from api.api_badanuri_bu_ps;'
        
        const res = await query(sql, []);

        return res;
    }
    
}

