import transform  from './transform.mjs';
import content  from './content/content.js';
import operations from './content/transform.js';

const results = transform(content, operations);

console.log(results);