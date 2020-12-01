import move from './transforms/move.mjs';
import move_fn from './transforms/move.mjs';
import remove_fn from './transforms/remove.mjs';
import rename_fn from './transforms/rename.mjs';

const getTransform = (transform) => {

    const move_transform = 'move';
    const remove_transform = 'remove';
    const rename_transform = 'rename';

    const transforms = {
        [move_transform] : move_fn,
        [remove_transform]: remove_fn,
        [rename_transform]: rename_fn
    };

    return transforms[transform];
}

const transform = function(content, trans) {

 if (content === null || trans === null) return; // Early out

    // Loop over the 
    trans.forEach((transform) => {
        const transform_type = transform.type;        
        const transformer = getTransform(transform_type);
        transformer(content, transform);
    }); 

    return content;
}

export default transform;

// Debug 
// console.log("The transform type is - " + transform_type + " and the target type -: " + JSON.stringify(transform.target));
// console.log("Content -: " + JSON.stringify(content));
//var stdin = process.openStdin();
// stdin.on('keypress', function (chunk,key){
//     console.log("The key press is -: " + key.name);
// });