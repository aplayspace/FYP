const projects = require('./projects.json');

const palette = ["#C5B0FF", "#FFB8DA", "#A8E5FF", "#D4FFB0", "#FFD27A"];

const uniqueYears = [...new Set(projects.map(p => p.year))].sort().reverse();

module.exports = uniqueYears.map(year => {
  const yearProjects = projects.filter(p => p.year === year);
  const awarded = yearProjects.filter(p => p.award);
  return {
    year: year,
    count: yearProjects.length,
    awarded: awarded.length,
    supervisors: null,
    projects: yearProjects.map((p, i) => ({
      title: p.project_title,
      color: palette[i % palette.length]
    }))
  };
});
