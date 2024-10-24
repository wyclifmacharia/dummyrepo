// CommonJs, every  file is module (By default)
// modules - Encapsulated  code (only share the minimum)
// in oerder to access the modules you will have to use (require) method
//some of build in modules are:
// os- OPERATING SYSTEM
// PATH MODULES 
// FS FILE SYSTEM
// HTTP MODULES



const names = require('./4-names');
const sayhi = require ('./5-utilities')
 const add =require('./6-mind-granades')

  sayhi("suasan")
  sayhi(names.mary)
  sayhi(names.Edwein)
  sayhi(names.josh)    
  sayhi(names.peter)
