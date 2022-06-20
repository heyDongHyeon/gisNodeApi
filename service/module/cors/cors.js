const cors = require('cors');

const safesitelist = [''];

const corsOptions = {
    origin: (origin, callback) => {
        const issafesitelisted = safesitelist.indexOf(origin) !== -1;
        callback(null, issafesitelisted);
    },
    
    credentials: true
}

module.exports = CorsInit = async (app) => { 
    //cors설정
    app.use(cors());
}

