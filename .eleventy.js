module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/favicons");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/webfonts");
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addWatchTarget("src/css/style.css");
	eleventyConfig.setQuietMode(true);

	return {
		dir: {
			input: "src",
			output: "public",
		}
	};
};
