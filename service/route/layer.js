
const ApiResult = require('../../const/ApiResult.js');
const LayerMapper = require('../mapper/layerMapper.js');
const express = require('express');
const router = express.Router();

/**
 * 등록안된 레이어 리스트를 구분하여 전체 공간 레이어를 조회한다.
 */
router.get(`/list`, async (req, res) => {
  
    const result = await LayerMapper.getList();
    const code = !res || result.rows.length == 0 ? 1 : 0;

    res.json(ApiResult(code, result.rows));
    
});


/**
 * 레이어 추가.. 이것만 하면 끝!
 */
router.post(`/add`, async (req, res) => {
  
    const obj = req.body;
    const values = [
        obj.tblschema,
        obj.tblnm,
        obj.lyrnm,
        getType(obj.type),
        6,
        'system'
    ]

    const result = await LayerMapper.add(values);
    const code = !res ? 1 : 0;

    res.json(ApiResult(code, result));
    
});

/**
 * 레이어 추가.. 이것만 하면 끝!
 */
 router.post(`/mod`, async (req, res) => {
  
    const obj = req.body;
    const values = [
        obj.lyrnm,
        obj.mgrseq,
    ]

    const result = await LayerMapper.mod(values);
    const code = !res ? 1 : 0;

    res.json(ApiResult(code, result));
    
});

/**
 * 레이어 추가.. 이것만 하면 끝!
 */
 router.post(`/remove`, async (req, res) => {
  
    const obj = req.body;
    const values = [
        obj.mgrseq
    ]

    const result = await LayerMapper.mod(values);
    const code = !res ? 1 : 0;

    res.json(ApiResult(code, result));
    
});

const getType = (type) => {
    switch(type) {
        case 'POLYGON' : 
        case 'MULTIPOLYGON' : 
            return 'G';
        case 'LINESTRING' :
            return 'L';
        default :
            return 'P'
    }
}

module.exports = router;