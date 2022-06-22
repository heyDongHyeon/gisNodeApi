
const {query} = require('../module/db/pool.js');

module.exports = LayerMapper = { 
    
    getList : async () => {

        let sql = "";
        sql += " SELECT ";
        sql += "    t1.f_table_name as tblNm ";
        sql += "    , t1.f_table_schema  as tblSchema ";
        sql += "    , t1.srid ";
        sql += "    , t1.type ";
        sql += "    , t2.lyr_nm as lyrNm ";
        sql += "    , t2.mgr_seq as mgrSeq ";
        sql += "    , CASE WHEN t2.lyr_nm IS NOT NULL THEN true ";
        sql += "      ELSE false ";
        sql += "      END AS isChk ";
        sql += " FROM public.geometry_columns AS t1 ";
        sql += " LEFT JOIN xeus.gis_lyr_list AS t2 ON t1.f_table_name = t2.tbl_id AND t1.f_table_schema = t2.schem_nm ";
        sql += " WHERE t1.f_table_schema IN ('public', 'xeus', 'draw', 'excel', 'shp', 'api') ";
        sql += " ORDER BY t2.mgr_seq";

        const res = await query(sql, []);
        
        return res;
    },

    
    add : async (values) => {

        if ( !values ) return null;
        
        await query('BEGIN');
    
        let sql = "";
        sql += "  INSERT INTO xeus.gis_lyr_list( schem_nm, tbl_id, lyr_nm, lyr_typ, grp_mgr_seq, mk_user)";
        sql += "  VALUES ($1,$2,$3,$4,$5,$6) RETURNING mgr_seq";
        
        let res = await query(sql, values);
        const mgrSeq = res.rows[0].mgr_seq;

        sql = "";
        sql += "  INSERT INTO xeus.gis_lyr_style( lyr_mgr_seq)";
        sql += "  VALUES ($1);";
        
        res = await query(sql, [mgrSeq]);
        await query('COMMIT');
        return res;
    },

    mod : async (values) => {

        if ( !values ) return null;

        let sql = "";
        sql += "  UPDATE xeus.gis_lyr_list SET lyr_nm=$1 ";
        sql += "  WHERE mgr_seq = $2";
        
        let res = await query(sql, values);

        return res;
    }

}

