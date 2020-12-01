import assert from 'assert';
import move from '../../src/transforms/move.mjs';

const content = [{
		"id": "speculate"
	},
	{
		"id": "temperature"
	},
	{
		"id": "production"
	},
	{
		"id": "dilemma"
	},
	{
		"id": "torture"
	},
	{
		"id": "message"
	},
	{
		"id": "cruel"
	},
	{
		"id": "aunt"
	},
	{
		"id": "economy"
	},
	{
		"id": "bedroom"
	},
	{
		"id": "pop"
	},
	{
		"id": "recession"
	},
	{
		"id": "competence"
	},
	{
		"id": "fax"
	},
	{
		"id": "abnormal"
	},];

    
const target = {
		"type": "move",
		"target": {
			"pos": 5
        },
        "distance": 2
    };

const result = move(content, target);

assert(result[6].id === 'torture' );
