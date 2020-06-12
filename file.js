var term = require('terminal-kit').terminal;
var fs = require('fs');

term.fullscreen();
term.grabInput({
  mouse: 'button',
  mouse: 'drag',
  mouse: 'motion',
  focus: true
});
term.on('key' , ( name, matches, data ) => {  
  if ( name === 'CTRL_C' ) {
    term.fullscreen(false);
    process.exit();
  }
});





// goToDir('/home/contour');
goToDir('./');

function goToDir(path) {
  term.clear();
  const files = fs.readdirSync(path, { withFileTypes: true });
  // console.log(files);
  files.forEach(entry => {
    if (entry.isBlockDevice()) term.yellow(entry.name);
    if (entry.isCharacterDevice()) term.magenta(entry.name);
    if (entry.isDirectory()) term.blue(entry.name);
    if (entry.isFIFO()) term.cyan(entry.name);
    if (entry.isFile()) term.white(entry.name);
    if (entry.isSocket()) term.green(entry.name);
    if (entry.isSymbolicLink()) term.red(entry.name);
    term.nextLine();
  });
}