const remove = function(content, target) {

    const remove_target = target.target.id;

    let removalIndex = -1;

    for (let item of content) {
        removalIndex++;
        if (item.id === remove_target) {
            break;
        }
    };

    if (removalIndex > -1) {
        const item_removed = content.splice(removalIndex,1);
        console.log("Removing Element -:" + JSON.stringify(item_removed));
    }

    return content;
};


export default remove;