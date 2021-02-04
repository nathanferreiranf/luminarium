const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    env: {
        APP_NAME: process.env.APP_NAME,
        APP_ID_EVENTO: process.env.APP_ID_EVENTO,
        APP_ENV: process.env.APP_ENV,
        APP_RECAPTCHA_GOOGLE: process.env.APP_RECAPTCHA_GOOGLE,
        APP_URL_API_DEV: process.env.APP_URL_API_DEV,
        APP_URL_API_PROD: process.env.APP_URL_API_PROD
    }
}