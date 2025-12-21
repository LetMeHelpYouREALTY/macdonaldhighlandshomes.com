const fs = require('fs');
const path = require('path');

// Get all image references from code
const imageRefs = new Set([
  // Community images
  '/photos/community/view-lifestyle-00024-full.jpg',
  '/photos/community/hero-view-lifestyle.jpg',
  '/photos/community/golf-lifestyle.jpg',
  '/photos/community/clubhouse.jpg',
  '/photos/community/pool.jpg',
  '/photos/community/guard-gate-full.jpg',
  '/photos/community/golf-lifestyle-full.jpg',
  '/photos/community/view-lifestyle-2.jpg',
  '/photos/community/pool-full.jpg',
  '/photos/community/clubhouse-full.jpg',
  '/photos/community/guard-gate.jpg',
  '/photos/community/golf-lifestyle-0008.jpg',
  '/photos/community/golf-lifestyle-0009.jpg',
  '/photos/community/golf-lifestyle-00011.jpg',
  '/photos/community/golf-lifestyle-00012.jpg',
  '/photos/community/golf-lifestyle-00013.jpg',
  '/photos/community/golf-lifestyle-00014.jpg',
  '/photos/community/clubhouse-2.jpg',
  '/photos/community/views-lifestyle-3.jpg',
  '/photos/community/view-lifestyle-00021-1024.jpg',
  '/photos/community/view-lifestyle-00023-1024.jpg',
  '/photos/community/view-lifestyle-00024-1024.jpg',
  '/photos/community/maps/community-site-map.jpg',
  '/photos/community/dragonridge-ad.jpg',
  '/photos/community/foothills-village.jpg',
  
  // Agent images
  '/photos/agent/dr-jan-duffy-headshot.jpg',
  
  // Legacy Image folder
  '/Image/story.png',
  '/Image/mission.webp',
  '/Image/person1.jpeg',
  '/Image/person_2-min.jpg',
  '/Image/person_3-min.jpg',
  '/Image/agent1.jpg',
  '/Image/hero_bg_1.jpg',
  '/Image/hero_bg_2.jpg',
  '/Image/hero_bg_3.jpg',
  '/Image/hero_bg_4.jpg',
  '/Image/house.jpeg',
]);

const publicDir = path.join(__dirname, 'public');
const missing = [];
const found = [];

imageRefs.forEach(imgPath => {
  // Remove leading slash for file system path
  const filePath = path.join(publicDir, imgPath.substring(1));
  
  if (fs.existsSync(filePath)) {
    found.push(imgPath);
  } else {
    missing.push(imgPath);
  }
});

console.log('\n=== IMAGE AUDIT REPORT ===\n');
console.log(`✅ Found: ${found.length} images`);
console.log(`❌ Missing: ${missing.length} images\n`);

if (missing.length > 0) {
  console.log('MISSING IMAGES:');
  missing.forEach(img => console.log(`  - ${img}`));
  console.log('');
}

// Check what's actually in the directories
console.log('\n=== ACTUAL FILES IN DIRECTORIES ===\n');

const checkDir = (dir, label) => {
  const fullPath = path.join(publicDir, dir);
  if (fs.existsSync(fullPath)) {
    const files = fs.readdirSync(fullPath, { recursive: true });
    console.log(`${label} (${files.length} files):`);
    files.slice(0, 10).forEach(file => console.log(`  - ${dir}/${file}`));
    if (files.length > 10) console.log(`  ... and ${files.length - 10} more`);
  } else {
    console.log(`${label}: Directory does not exist`);
  }
  console.log('');
};

checkDir('photos/agent', 'Agent Photos');
checkDir('photos/community', 'Community Photos');
checkDir('Image', 'Legacy Image Folder');
