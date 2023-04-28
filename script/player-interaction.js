let interactedResources = [];

function checkInteraction(){
    for(let resource_name in resources){
        let resource = resources[resource_name];
        for(let item_key in resource){
            let item = resource[item_key];
            checkHit(resource_name, item_key, item, posX, posY);
        }
    }
    activateEvents();
}

function checkHit(resource_name, item_key, item, x, y){
    let item_x = item['x'];
    let item_y = item['y'];
    if(Math.abs(posX+dw/2-item_x) < 38 && Math.abs(posY+dh/2-item_y)<38){
        let itemStatus =  resources[resource_name][item_key]['status'];
        
        if(itemStatus=='full'){
            let hitItem = {
                resourceGroup: resource_name,
                itemIndex: item_key
            };
            interactedResources.push(hitItem);
        }
        resources[resource_name][item_key]['status']  = 'empty';
        
    }
}


function activateEvents(){
    for(let i of interactedResources){
        clearResourceItem(i['resourceGroup'], i['itemIndex']);
        if(i['resourceGroup']=='apple'){
            health += 10;
            stomach += 10;
            generateHudBg();
        }
        console.log(interactedResources.shift());
    }
}