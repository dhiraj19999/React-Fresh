
/*

 It is js library for building user interfaces
    It is used for building single page applications
    it can update only the part of  page that need to be updated , insted of re-rendring the whole page
    we can create reusable UI components
    useful in making complex web applications

In react we can navigate to new page without refreshing the page

//  What is imperative programming?
//  What is declarative programming?
  imperative programming is a programming paradigm that uses statements that change a program state.
   In other words, it is a programming style where the flow of control is determined by 
    the programmer.
    declarative programming is a programming paradigm that expresses the logic of a computation
        without describing its control flow.
        In other words, it is a programming style where the logic of computation is expressed
         without describing its control flow.





*/

//  what is a react element?
//    A React element is a plain object describing a component instance or DOM node and its desired properties.
//     React elements are immutable and are cheap to create. React DOM takes care of updating the DOM to 
// match the React elements.
//     The simplest way to create a React element is with JSX:  const element = <h1>Hello, world</h1>;
//     This creates an object like this: {type: 'h1', props: {children: 'Hello, world!'}}
//     These objects are called “React elements”. You can think of them as descriptions of what you want to 
// see on the screen.

//  what is react dom?
//    React DOM is a package that provides DOM-specific methods that can be used at the top level of your app.
//     Most of the components are not supposed to use React DOM. The main purpose of React DOM is to render 
// the React components into the DOM.
//  react dom vs browser dom
//    React DOM is a package that provides DOM-specific methods that can be used at the top level of your app.
//     Most of the components are not supposed to use React DOM. The main purpose of React DOM is to render
//      the React components into the DOM.
//     The Browser DOM is a programming interface for HTML and XML documents. It represents the document as
//      nodes and objects. It is a model that represents the page so that programs can change the document
//       structure, style, and content. The Browser DOM is a standard for how to get, change, add, or delete
//        HTML elements.




// let root= document.getElementById('root'); // get the root element
// let element = <h1>Hello World</h1> // create a react element
// ReactDOM.render(element,root) // render the element in the root element

// react ka khd ka dom hota hai jo ki virtual hota hai
// react ka dom browser ka dom se alag hota hai 
// react virtual dom se browser dom ko compare karke bus wahi change karta hai jo change hua hai
// react ka dom browser dom se fast hota hai  
// react ka dom browser dom se light weight hota hai
// What is ReactDom.render()?
// ReactDom.render() is a method that is used to render a React element into the DOM in the supplied container.
//  It will render the element into the container and it will return the reference to the component.


  // What is babel in react?
  // Babel is a JavaScript compiler that is used to convert ECMAScript 2015+ code into a backward-compatible
  //  version of JavaScript in current and older browsers or environments. It can convert JSX syntax and
  //   other syntax extensions into JavaScript.
  //   Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backward-compatible



  // React.createElement() is a method that is used to create a React element. It is used to create a new
  //  React element with the given type, props, and children. It is a low-level API that is used to create
  //   React elements without using JSX. It is used to create a new React element with the given type, props,
  //    and children. It returns a new React element object that can be rendered into the DOM using ReactDOM.render().
  //    The syntax of React.createElement() is as follows: React.createElement(type, [props], [...children])
  // example: const element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');

  // This will create a new React element with the type 'h1', props {className: 'greeting'}, and children 
  // 'Hello, world!'.


  // What is evaluated expression in JSX?
  //Expressions in JSX are JavaScript expressions that can be used to evaluate and display 
  // dynamic values within JSX code. They are defined within curly braces ({}). These expressions 
  // can be any valid JavaScript expressions, including variables, function calls, and operations
  // In JSX, expressions are evaluated and the result is rendered in the output. JSX expressions are written
  //  inside curly braces {}. JSX expressions are used to embed JavaScript expressions in JSX. JSX expressions  
  //  are written inside curly braces {} and they are evaluated and the result is rendered in the output.
  const reactElement={
    
    type:'a',
    props:{
       href:'https://www.google.com',
       target:"_blank"
    },
    children:'Click me'
}
  // syntax: <h1>{2 + 2}</h1> // 4 in h1 is a children  like above children from reactElement object
  // and we can't write if else in object like if(true){'click me'}else{'dont click me'}
  // In this example, the expression 2 + 2 is evaluated and the result 4 is rendered in the output.
  // but we can not use if else in jsx .
  // only final output will be rendered in the expression
let another="hello"
  const reactElement=React.createElement('a',{href:'https://www.google.com',target:"_blank"},'Click me',another)

  ReactDom.createRot(document.getElementById('root')).render(reactElement) // render the reactElement in the root element


  // Above code we write in react as follws:
   //<a href="https:">Click me{another} </a> // this is a react element
   // here another is a variable that we can use in jsx expression that render final output