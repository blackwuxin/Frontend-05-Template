
function createElement(type,attributes,...children){
    let element = "";
    if(typeof type == 'string'){
        element = document.createElement(type);
    }else{
        element = new type;
    }

    for(let name in attributes){
        element.setAttribute(name,attributes[name]);
    }
    for(let child of children){
        if(typeof child == 'string'){
            child = document.createTextNode(child);
        }
        child && element.appendChild(child);
    }
    return element;
}

let a = <div>
    <span>a</span>
    <span>b</span>
    <span>c</span>
</div>

document.body.appendChild(a)