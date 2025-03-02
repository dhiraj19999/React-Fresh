function customRender(reactElement,Container){

const domElement=document.createElement(reactElement.type);
domElement.innerHtml=reactElement.children;
domElement.setAttribute('href',reactElement.props.href);
domElement.setAttribute('target',reactElement.props.target);
Container.appendChild(domElement);
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