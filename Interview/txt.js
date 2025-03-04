
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

  ReactDom.createRoot(document.getElementById('root')).render(reactElement) // render the reactElement in the root element


  // Above code we write in react as follws:
   //<a href="https:">Click me{another} </a> // this is a react element
   // here another is a variable that we can use in jsx expression that render final output
   // react.createElement() ko babel inject karta hai 


   // React Hooks are functions that allow you to use React features and lifecycle methods in functional
   //  components. Hooks let you use state, manage side effects, and access context. 

   /*

Benefits of Hooks
Hooks enable you to use React without classes. 
Hooks make it easier to incorporate state and lifecycle concepts into functional components. 
Custom hooks are a great mechanism for sharing logic across various components. 


When you click the increase or decrease button, useState lets React know that the state has changed. 
React then re-renders the component and updates the count. However, with a regular variable,
 React isn't aware of the changes, so it doesn't update the count.30
 The useState() hook: Allows us to obtain a state variable, this is a special variable that is 
 capable of retaining data between renders. Provides us with a setter function to update the state
  variable and hence trigger a re-render of our component.
  In React, useState is a hook that allows you to add a state variable to a component. 
  It returns an array with two values: the current state and a function to update it. \
  The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.
Example:
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
Notice that again, we are destructuring the returned values from useState.

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.

*/










/*





ReactJS Virtual DOM

ReactJS Virtual DOM is an in-memory representation of the actual DOM (Document Object Model).
 React uses this lightweight JavaScript object to track changes in the application state and efficiently 
 update the actual DOM only where necessary.

How Does the Virtual DOM Work?
Rendering the Virtual DOM: React creates a virtual representation of the UI as a tree of JavaScript objects.
Updating State: It generates a new Virtual DOM tree to reflect the updated state when the application state 
changes.
Diffing Algorithm: React compares the new Virtual DOM tree with the previous one using its efficient diffing
 algorithm to identify the minimal set of changes required.
Updating the Real DOM: React applies only the necessary changes to the real DOM, optimizing rendering 
performance.



Key Features of React’s Virtual DOM
Efficient Updates: By minimizing direct interactions with the real DOM, React significantly reduces rendering 
time.
Reconciliation Process: React’s reconciliation efficiently updates the UI based on changes in the Virtual 
DOM.
Batching Updates: Multiple state updates are batched into a single re-render cycle, avoiding unnecessary 
computations.
Cross-Browser Consistency: The Virtual DOM standardizes behaviour across different browsers, ensuring 
consistent rendering.
Component-Based Architecture: Virtual DOM integrates seamlessly with React’s component-based architecture,
 promoting modular and reusable code.
How React’s Virtual DOM Improves Performance
Avoids Full DOM Repaints: React calculates and applies only the changes needed instead of repainting the 
entire DOM.
Optimized Rendering: Updates to the Virtual DOM are synchronized with browser rendering cycles, avoiding
 redundant operations.
Reduces JavaScript Execution Time: Lightweight Virtual DOM trees are faster to manipulate than the actual 
DOM.
Intelligent Rendering Decisions: React intelligently avoids rendering components that haven’t changed using 
techniques like memoization.


Advantages of the Virtual DOM
Improved Performance: Reduces costly DOM manipulations by batching updates.
Simplified Development: Developers focus on component logic, leaving optimization to React.
Consistent Rendering: Abstracts browser-specific rendering, ensuring uniform performance.
Better User Experience: Faster updates lead to smoother interactions and enhanced user satisfaction.

Disadvantages of the Virtual DOM
Memory Overhead: Maintaining Virtual DOM trees consumes additional memory.
Learning Curve: Developers need to understand concepts like reconciliation and diffing.
Not Always Optimal: For very simple applications, the Virtual DOM may introduce unnecessary complexity.
Frameworks and Libraries Using Virtual DOM
ReactJS: The pioneer in using the Virtual DOM for efficient UI rendering.
Vue.js: Employs a Virtual DOM to provide reactive and declarative UI development.
Inferno: A fast and lightweight React alternative that uses the Virtual DOM.
Preact: A minimalistic version of React with a Virtual DOM for high performance.


When to Avoid the Virtual DOM
Static Websites: For websites with minimal interactivity, the overhead of maintaining a Virtual DOM isn’t 
justified.
Server-Side Rendering (SSR): While React’s Virtual DOM supports SSR, simpler templating engines like
 Handlebars may be more efficient.
Small Applications: In cases where performance bottlenecks are negligible, the complexity of the Virtual DOM 
isn’t necessary.


Differences between Virtual DOM and Real DOM
Virtual DOM	Real DOM
It is a lightweight copy of the original DOM	It is a tree representation of HTML elements
It is maintained by JavaScript libraries	It is maintained by the browser after parsing HTML elements
After manipulation it only re-renders changed elements	After manipulation, it re-render the entire DOM
Updates are lightweight	Updates are heavyweight
Performance is fast and UX is optimised	Performance is slow and the UX quality is low
Highly efficient as it performs batch updates	Less efficient due to re-rendering of DOM after each update


In React, reconciliation is the process of updating the user interface (UI) when the state of a component 
changes. It's a core feature of React that uses a virtual DOM (VDOM) to update the DOM efficiently. 
How reconciliation works 
React compares the new virtual DOM tree with the current one.
This comparison identifies exact changes.
React updates the DOM to reflect the changes made to the virtual DOM.
Benefits of reconciliation
Efficient updates: React avoids unnecessary updates and reduces interactions with the actual DOM. 
Faster performance: React reuses existing instances of elements on the React side, which is faster than
 constantly removing and adding elements. 
Simplifies UI creation: Developers can focus on writing clean, declarative code. 



React Fiber is a reimplementation of React's core algorithm for rendering and reconciliation. It was introduced in React 16 and is designed to improve the performance of React applications. 
How does React Fiber work? 
Incremental rendering: Breaks rendering work into smaller units, allowing React to pause, resume, or abort work
Prioritization: Allows React to prioritize updates, giving precedence to more urgent tasks
Concurrency: Allows React to handle multiple updates simultaneously without blocking the main thread
What are the benefits of React Fiber? 
Improves the responsiveness and renderability of the user interface
Enhances the reconciliation process
Enables smoother user interactions
Allows for better control over the rendering process
Makes React better at handling large and complex component trees




How to Explain in an Interview?
👨‍💻 Interviewer: What is hydration in JavaScript?
🧑‍💼 You: Hydration is the process of taking server-rendered HTML and attaching JavaScript to it so the page becomes interactive.

👉 Think of it like receiving a toy car (HTML) and adding batteries (JavaScript) so it works.

📌 Use Case: Frameworks like React (SSR), Next.js, and Astro use hydration to improve performance and SEO.

This simple analogy makes it easy to understand & remember. Would you like more examples? 🚀

 hydration as injecting JavaScript into pre-rendered HTML to make it interactive.

Simple Explanation
Server sends HTML → The page loads quickly.
JavaScript loads & attaches event listeners → Now the page becomes interactive.




1. React Element
A React Element is the smallest building block in React. It represents a UI element (like a button, heading, or div).

📌 Think of it like an HTML tag but in JavaScript.

Example: Creating a React Element
jsx
Copy
Edit
const element = <h1>Hello, Dhiraj!</h1>;
or using React.createElement:

jsx
Copy
Edit
const element = React.createElement('h1', null, 'Hello, Dhiraj!');
✅ React Elements are immutable (cannot be changed).

🔹 2. React Components
A component is a reusable, independent piece of UI. It can be a function or a class.

📌 Think of it like a blueprint (like a function) that returns a React Element.

Example: Functional Component
jsx
Copy
Edit
function Greeting() {
  return <h1>Hello, Dhiraj!</h1>;
}
Example: Class Component
jsx
Copy
Edit
class Greeting extends React.Component {
  render() {
    return <h1>Hello, Dhiraj!</h1>;
  }
}
✅ Components help break UI into smaller reusable pieces.

🔹 3. Props (Properties)
Props are inputs to a component. They allow data to be passed from a parent component to a child component.

📌 Think of props as function arguments.

Example: Using Props
jsx
Copy
Edit
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Dhiraj" />
✅ Props are read-only (cannot be changed inside the component).

🔹 4. State
State is a variable inside a component that can change over time. It makes components dynamic and interactive.

📌 Think of state as a private variable that React tracks and updates when needed.

Example: Using State in a Functional Component
jsx
Copy
Edit
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
✅ State makes UI reactive—whenever state changes, React re-renders the component.

📌 Quick Comparison Table
Concept	What is it?	Can it change?	Who controls it?
Element	A UI tag (<h1> etc.)	❌ No	React
Component	A function/class returning JSX	✅ Yes	Developer
Props	Input to a component	❌ No	Parent component
State	Internal data of a component	✅ Yes	Component itself



What is Batch Update in React?
🔹 Batching in React means combining multiple state updates into a single re-render to improve performance.

Why is Batching Important?
Without batching, every state update would trigger a separate re-render, making the app slow.
React groups multiple state updates within the same event into a single re-render to optimize performance.
Example Without Batching (Older React Versions)
Before React 18, if you updated multiple states inside an event, React would trigger multiple re-renders.

jsx
Copy
Edit
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleClick() {
    setCount(count + 1);
    setText("Updated!");

    // Before React 18, this would trigger 2 re-renders (one for each state change)
  }

  console.log("Component re-rendered"); // Runs every re-render

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
🔴 Before React 18:
This would cause two re-renders (one for setCount, another for setText).

✅ After React 18:
React batches both state updates into one re-render, making it more efficient.

React 18: Automatic Batching
In React 18, even updates inside setTimeout, promises, or async functions are batched.

Example: Async Updates Are Now Batched
jsx
Copy
Edit
function Example() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleClick() {
    setTimeout(() => {
      setCount((c) => c + 1);
      setText("Updated!");

      // ✅ In React 18, both updates will be batched (only one re-render)
    }, 1000);
  }

  console.log("Component re-rendered"); // Runs every re-render

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
✅ In React 18, both setCount and setText inside setTimeout will be batched into a single re-render.

How to Force Separate Re-renders?
If you don't want React to batch updates, you can use React.flushSync().

jsx
Copy
Edit
import { flushSync } from "react-dom";

function Example() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleClick() {
    flushSync(() => {
      setCount(count + 1);
    });
    flushSync(() => {
      setText("Updated!");
    });

    // This forces two separate re-renders
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
🔴 Using flushSync(), React will perform two separate renders instead of batching updates.

📝 Summary (How to Explain in an Interview)
👉 React automatically batches multiple state updates in one event to avoid unnecessary re-renders and improve performance.
👉 Before React 18, batching only worked inside event handlers but not inside async code.
👉 React 18 improved batching, so even async updates inside setTimeout(), promises, or fetch requests are batched.
👉 Use flushSync() if you need React to re-render immediately without batching.