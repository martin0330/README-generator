// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') return '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
  if (license === 'GPLv3') return '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
  if (license === 'GPL')  return '[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
  if (license === 'none') return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') return 'https://opensource.org/licenses/MIT';
  if (license === 'GPLv3') return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  if (license === 'GPL') return 'https://www.gnu.org/licenses/old-licenses/gpl-1.0.html';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Name
  ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.projectDescription}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Languages
  ${data.languages}

  ## Website link
  ${data.website}

  ## Contributions
  ${data.contributor}

  ## Questions
  Link to my github (https://github.com/${data.gitHubName})
  Reach me through email at ${data.email} if you have any additional questions

  ## Licenses
  ${renderLicenseSection(data.license)}
  
  ## Table of Contents
  [Description] (#projectDescription)
  [Installation] (#installation)
  [Contributions] (#contributor)
  [Website] (#website)
  [Questions] (#questions)
  [Licenses] (#license)

`;
}

module.exports = generateMarkdown;
