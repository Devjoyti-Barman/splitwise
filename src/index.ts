import * as path from 'path';
import { SplitWise } from './splitWise';

// console.log('Testing....');
// console.log(path.sep);
// console.log(path.posix.sep);
// console.log(path.win32.sep);
// console.log(__filename);

const splitwise: SplitWise = new SplitWise();

splitwise.run();