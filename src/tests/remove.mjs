import assert from 'assert';
import remove from '../../src/transforms/remove.mjs';

const content = [{
		"id": "speculate"
	},
	{
		"id": "temperature"
	},
	{
		"id": "production"
    }];
    
const target = {
		"type": "remove",
		"target": {
			"id": "temperature"
		}
    };

const expected_content = [{
		"id": "speculate"
	},
	{
		"id": "production"
    }];

const result = remove(content, target);

console.log("The results is -: " + JSON.stringify(result));

assert(result.length === expected_content.length);
