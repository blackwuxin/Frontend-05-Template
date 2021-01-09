export function createElement(type,attributes,...children){
    let element = "";
    if(typeof type == 'string'){
        element = new ElementWrap(type);
    }else{
        element = new type;
    }

    for(let name in attributes){
        element.setAttribute(name,attributes[name]);
    }
    for(let child of children){
        if(typeof child == 'string'){
            child = new TextWrap(child);
        }
        child && element.appendChild(child);
    }
    return element;
}


export class Component{
    constructor(){
        this.root = this.render();
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(child){
       child.mountTo(this.root);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}
class ElementWrap extends Component{
    constructor(type){
        this.root = document.createElement(type);
    }
}
class TextWrap extends Component{
    constructor(content){
        this.root = document.createTextNode(content);
    }
}