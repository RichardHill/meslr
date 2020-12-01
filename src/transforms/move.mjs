const move = function(content, target) {

    // Get the position.
    const target_position = target.target.pos - 1;

    // Get the movement.
    const movement = target.distance;
    
    // Get the content length.
    const content_size = content.length;

    // Resultant position.
    const new_position = target_position + movement;
    
    // Does this move make sense?
    if (new_position < 0 || new_position > content_size) 
    {
        console.log("Moving Element -: ERROR - !!! Outside Array Bounds !!! - array size is -: " + content.length + " and the new position is -: " + new_position);
        return content;
    }

    // Get the element we want to use.
    const element_to_move = content.splice(target_position,1);

    console.log("Moving element -: " + JSON.stringify(element_to_move) + " from  " + target_position + " to " + new_position); 

    // Now splice it.
    content.splice(new_position,0,element_to_move[0]);

    return content;

};


export default move;

// Debug Code -:
//  console.log("The element to move is -: " + JSON.stringify(element_to_move));
//  console.log("Moving element -: " + JSON.stringify(element_to_move) + " from  " + target_position + " to " + new_position; 
//  movement + " the content_size is -: " + content_size + " the new_postition is -: " + new_position);
