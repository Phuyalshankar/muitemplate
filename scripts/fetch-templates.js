const fs = require('fs');
const axios = require('axios');
const path = require('path');

async function fetchTemplates() {
  const appPath = path.join(__dirname, '../src/App.jsx');
  let content = fs.readFileSync(appPath, 'utf8');

  const markerRegex = /<div className="d-([^"]+)">[\s\S]*?<\/div>/g;
  const matches = [...content.matchAll(markerRegex)];

  for (const match of matches) {
    const templateName = match[1];
    const url = `https://raw.githubusercontent.com/Phuyalshankar/muitemplate/main/templates/dolphin-${templateName}.html`;
    try {
      const response = await axios.get(url);
      const html = response.data.replace(/"/g, '\\"').replace(/\n/g, '\\n');
      const replacement = `<div dangerouslySetInnerHTML={{__html: "${html}"}}></div>`;
      content = content.replace(match[0], replacement);
    } catch (error) {
      console.error(`Error fetching ${templateName}:`, error.message);
    }
  }

  fs.writeFileSync(appPath, content);
  console.log('Templates fetched and replaced in App.jsx');
}

fetchTemplates();