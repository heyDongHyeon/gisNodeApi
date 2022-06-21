
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
        sql += "    , CASE WHEN t2.lyr_nm IS NOT NULL THEN true ";
        sql += "      ELSE false ";
        sql += "      END AS isChk ";
        sql += " FROM public.geometry_columns AS t1 ";
        sql += " LEFT JOIN xeus.gis_lyr_list AS t2 ON t1.f_table_name = t2.tbl_id AND t1.f_table_schema = t2.schem_nm ";
        sql += " WHERE t1.f_table_schema IN ('public', 'xeus', 'draw', 'excel', 'shp', 'api') ";
        sql += " ORDER BY lyrNm desc";

        const res = await query(sql, []);
        
        return res;
    },

    
    add : async (obj) => {

        let sql = "";
        sql += " SELECT ";
        sql += "    t1.f_table_name as tblNm ";
        sql += "    , t1.f_table_schema  as tblSchema ";
        sql += "    , t1.srid ";
        sql += "    , t1.type ";
        sql += "    , t2.lyr_nm as lyrNm ";
        sql += "    , CASE WHEN t2.lyr_nm IS NOT NULL THEN true ";
        sql += "      ELSE false ";
        sql += "      END AS isChk ";
        sql += " FROM public.geometry_columns AS t1 ";
        sql += " LEFT JOIN xeus.gis_lyr_list AS t2 ON t1.f_table_name = t2.tbl_id AND t1.f_table_schema = t2.schem_nm ";
        sql += " WHERE t1.f_table_schema IN ('public', 'xeus', 'draw', 'excel', 'shp', 'api') ";
        sql += " ORDER BY lyrNm desc";
        
        const res = await query(sql, []);
        
        return res;
    }
}

