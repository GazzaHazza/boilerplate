const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

const addons = addonsArg => {
  const addonsArray = [].concat.apply([], [addonsArg]).filter(Boolean);
  return addonsArray.map(
    addonName => require(`./build-utils/addons/webpack.${addonName}.js`) // eslint-disable-line global-require, import/no-dynamic-require
  );
};

module.exports = env => {
  const envConfig = require(`./build-utils/webpack.${env.env}.js`); // eslint-disable-line global-require, import/no-dynamic-require
  const mergeConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addon)
  );

  return mergeConfig;
};
