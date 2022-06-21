
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
  
    const result = await LayerMapper.add(res.body);
    const code = !res ? 1 : 0;

    res.json(ApiResult(code, result));
    
});

module.exports = router;