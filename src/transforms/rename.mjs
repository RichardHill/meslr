const rename = function(content, target) {

    const rename_target = target.target.id;
    const new_name = target.newid;

    let removalIndex = -1;

    //Check we don't have an item with this already.
    let id_already_exists = false;

    for (let item of content) {
        const current_name = item.id;
        if (current_name === new_name) {
            id_already_exists = true;
            console.log("Renaming Element -: ERROR - !!! Found Duplicate !!! - " + item.id);
        }       
    }

    if (id_already_exists === false) { 
        for (let item of content) {
            removalIndex++;
            if (item.id === rename_target) {
                console.log("Renaming Element -: " + target.target.id + " to " + target.newid);
                item.id = new_name;
                break;
            }
        };
    }

    return content;
}

export default rename;