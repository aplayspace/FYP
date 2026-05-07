const projects = require('./projects.json');

const palette = ["#C5B0FF", "#FFB8DA", "#A8E5FF", "#D4FFB0", "#FFD27A"];

const uniqueYears = [...new Set(projects.map(p => p.year))].sort().reverse();
const latestYear = uniqueYears[0];

const latestAwarded = projects.filter(p => p.year === latestYear && p.award);
const latestAll = projects.filter(p => p.year === latestYear);

module.exports = {
  year: latestYear,
  projects: latestAwarded.map((p, i) => ({
    title: p.project_title,
    student: p.student_name,
    supervisor: null,
    tags: [p.theme],
    color: palette[i % palette.length],
    href: p.github_url || '#'
  })),
  remaining: latestAll.length - latestAwarded.length,
  all_href: '/' + latestYear + '/'
};
