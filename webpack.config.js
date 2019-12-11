// config for web
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    const svgRule = {
        test: /.svg$/,
        exclude: /node_module/,
        use: ["@svgr/webpack"]
    };

    config.module.rules[1].oneOf.splice(0, 0, svgRule);
    return config;
};
