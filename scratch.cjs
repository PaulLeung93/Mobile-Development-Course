const fs = require('fs');
const file = 'C:/Users/Paul/OneDrive/Desktop/Mobile Course/src/curriculum/Week 7/week7_unit.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\u([0-9a-fA-F]{4})/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
});
fs.writeFileSync(file, content, 'utf8');
console.log('done');
