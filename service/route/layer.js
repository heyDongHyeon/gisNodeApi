
const ApiResult = require('../../const/ApiResult.js');
const LayerMapper = require('../mapper/layerMapper.js');
const express = require('express');
const router = express.Router();

router.get(`/list`, async (req, res) => {
 
    const result = await LayerMapper.getList();
    res.json(ApiResult(0, result.rows));
    
});

module.exports = router;