
const ApiResult = require('../../const/ApiResult.js');
const LayerMapper = require('../mapper/layerMapper.js');
const express = require('express');
const router = express.Router();

const {poolConnect} = require('../module/db/pool.js');

router.post(`/init`, async (req, res) => {
    res.json(ApiResult(0, poolConnect(req.body)));
});

module.exports = router;