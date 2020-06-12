// http://blog.soulserv.net/tag/terminal/
var term = require('terminal-kit').terminal;

term.fullscreen();
term.grabInput({
  mouse: 'button',
  mouse: 'drag',
  mouse: 'motion',
  focus: true
});


term.on('key' , ( name, matches, data ) => {  
    console.log( "'key' event:" , name ) ;

    // Detect CTRL-C and exit 'manually'
    if ( name === 'CTRL_C' ) {
      // term.clear(); // basically scrolls
      // term.eraseDisplay();
      term.fullscreen(false);
      process.exit();
    }
});
term.on('mouse', (name, data) => {
  console.log(name, data);
});
term.on('resize', (name, data) => {
  console.log(name, data);
});
term.on('terminal', (name, data) => {
  console.log(name, data);
});