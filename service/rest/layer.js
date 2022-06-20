
const ApiResult = require('../../const/ApiResult.js');
const LayerMapper = require('../mapper/layerMapper.js');

const RequestPath = '/layer';

module.exports = LayerRestAPI = (app) => { 

    app.get(`${RequestPath}/list`, async (req, res) => {
 
        const result = await LayerMapper.getList();

        res.json(ApiResult(0, result.rows));
        
    });
       
}

