const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
    webpack: {
        plugins: {
            add: [
                new webpack.DefinePlugin({
                    // eslint-disable-next-line
                    process: { env: JSON.stringify(dotenv.config().parsed) },
                }),
            ],
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
