'use strict';

//---------//
// Imports //
//---------//

const editorconfig = require('editorconfig'),
  path = require('path');

//
//------//
// Init //
//------//

const log = msg => console.log(msg),
  logErr = err => console.error(err);

//
//------//
// Main //
//------//

const filepath = path.join(__dirname, 'parent/child/test-file.js');

editorconfig.parse(filepath, { root: __dirname }).then(log);
