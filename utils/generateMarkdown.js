// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Author
  Created by: 
  ${data.name}

  ## GitHub Link
  ${data.github}

  ## Description
  ${data.description}

  ## License
  ${data.license}

  ## Credits
  ${data.credit}
`;
}

module.exports = generateMarkdown;
