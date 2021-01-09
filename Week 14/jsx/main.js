import {createElement,Component} from './framework';


// let a = <div>
//     <span>a</span>
//     <span>b</span>
//     <span>c</span>
// </div>

class Carousel extends Component{
    constructor(){
        super();
    }
    render(){
        return document.createElement('div')
    }
}
// document.body.appendChild(a.root)
let a = <Carousel/>
a.mountTo(document.body)