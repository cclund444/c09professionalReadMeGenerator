function generateMarkdown(data) {

  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  ## Licenses
  [![()](#)
  ## Table of Contents
  * [Installation](#installation)
  * [Instructions](#usage)
  * [Licenses](#licenses)
  * [Contributing Members](#contribution)
  * [Contribution Requirements](#contributionReqs)
  * [Tests](#tests)
  * [GitHub](#github)
  * [Contact Information](#contact)
  ## Installation steps
  ${data.installation}
  ## Instructions
  ${data.usage}
  ## Contributing Members
  ${data.contribution}
  ## Contribution Requirements
  ${data.contributionReqs}
  ## Tests
  ${data.tests}
  ## GitHub
  https://github.com/${data.github}
  ## Contact Information
  ${data.contact}
`;
}

module.exports = generateMarkdown;