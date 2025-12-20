// Quick script to verify images exist
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const photosDir = path.join(publicDir, 'photos');

console.log('Checking image files...');
console.log('Public directory exists:', fs.existsSync(publicDir));
console.log('Photos directory exists:', fs.existsSync(photosDir));

if (fs.existsSync(photosDir)) {
  const communityDir = path.join(photosDir, 'community');
  const agentDir = path.join(photosDir, 'agent');
  
  console.log('Community directory exists:', fs.existsSync(communityDir));
  console.log('Agent directory exists:', fs.existsSync(agentDir));
  
  if (fs.existsSync(communityDir)) {
    const files = fs.readdirSync(communityDir).filter(f => f.endsWith('.jpg'));
    console.log(`Found ${files.length} JPG files in community directory`);
    console.log('Sample files:', files.slice(0, 5));
  }
  
  const heroImage = path.join(communityDir, 'hero-view-lifestyle.jpg');
  console.log('Hero image exists:', fs.existsSync(heroImage));
  if (fs.existsSync(heroImage)) {
    const stats = fs.statSync(heroImage);
    console.log('Hero image size:', stats.size, 'bytes');
  }
}
