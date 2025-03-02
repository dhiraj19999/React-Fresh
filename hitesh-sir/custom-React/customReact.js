function customRender(reactElement,Container){
/*
const domElement=document.createElement(reactElement.type); // create a dom element that is anchor tag
domElement.innerHtml=reactElement.children; // set the innerHtml of the dom element that is click me
domElement.setAttribute('href',reactElement.props.href);// set the href attribute of the dom element that is https://www.google.com
domElement.setAttribute('target',reactElement.props.target); // set the target attribute of the dom element that is _blank
Container.appendChild(domElement);// append the dom element in the container */

const domElement=document.createElement(reactElement.type); 
domElement.innerHtml=reactElement.children; 
for (const prop in reactElement.props){
    if(prop==='children'){
        domElement.innerHtml=reactElement.props.children;
        Container.appendChild(domElement);
    }else{
        domElement.setAttribute(prop,reactElement.props[prop]);
        Container.appendChild(domElement);
    }

}

}
const reactElement={
    type:'a',
    props:{
       href:'https://www.google.com',
       target:"_blank"
    },
    children:'Click me'
}

const root=document.getElementById('root');

customRender(reactElement,root) // render the reactElement in the root element