module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");

  // Custom filter: Filter projects by year
  eleventyConfig.addFilter("byYear", function(projects, year) {
    return projects.filter(p => p.year === year.toString());
  });

  // Custom filter: Filter awarded projects
  eleventyConfig.addFilter("awarded", function(projects) {
    return projects.filter(p => p.award === true);
  });

  // Custom filter: Get unique themes
  eleventyConfig.addFilter("uniqueThemes", function(projects) {
    const themes = [...new Set(projects.map(p => p.theme))];
    return themes.sort();
  });

  // Custom filter: Get unique years
  eleventyConfig.addFilter("uniqueYears", function(projects) {
    const years = [...new Set(projects.map(p => p.year))];
    return years.sort().reverse();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
