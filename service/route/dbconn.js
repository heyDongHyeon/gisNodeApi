
const ApiResult = require('../../const/ApiResult.js');
const LayerMapper = require('../mapper/layerMapper.js');
const express = require('express');
const router = express.Router();

const {poolConnect} = require('../module/db/pool.js');

router.post(`/init`, async (req, res) => {
    const code = !res ? 1 : 0;
    res.json(ApiResult(code, await poolConnect(req.body)));
});

module.exports = router;