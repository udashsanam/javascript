import pers from './Export.js';

import {HelloWorld} from './Export.js';

import {Data as newData} from './Export.js';

HelloWorld


console.log(pers.name);

console.log(newData);

// importing in one object 
import * as bundle from './Export.js';

bundle.Data;
bundle.HelloWorld;
bundle.default['Date of Birth'];