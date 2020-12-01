
import assert from 'assert';
import rename from '../../src/transforms/rename.mjs';

const content = [{
		"id": "speculate"
	},
	{
		"id": "temperature"
	},
	{
		"id": "production"
    }];
    
const renamed = 'pluto';
const target = {
		"type": "rename",
		"target": {
			"id": "temperature"
        },
        "newid" : renamed
    };

const result = rename(content, target);
const findResult = result.find(element =>  element.id === renamed );

assert(findResult !== null);
assert(findResult.id === renamed);