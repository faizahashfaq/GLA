/** @format */

// /** @format */

// const { getDefaultConfig } = require("@expo/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.assetExts.push("cjs");

// module.exports = defaultConfig;

module.exports = {
	transformer: {
		assetPlugins: ["expo-asset/tools/hashAssetFiles"],
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
	},
};
