 What is javascript?
	
Javascript is  a scripting language that allows a developer to implement complex features on a website. It's a higher level programming language that supports different coding patterns like object oriented , functional programming. It's written in c/c++. Javascript is interpreted , just in time, compiled language . It can be used as both client side and server side with the help of node js.

What is DOM?

Dom stands for document object model. When a website is loaded then the browser creates a dom tree to access the document. As javascript treats all the elements as objects except functions , arrays. 

Higher order function

Higher order function is a function that can take a function as an argument and return a function as value. Callback is just a function that passed to another function. 

Hoisting

Hoisting is a default behaviour of javascript when all variables and functions are moved to the top. It usually refers to function declaration not the initialization. When we use var keywords for declaring value. We can access the value anywhere in the programme. When we use let , that is also hoisted but the value is never at the top. 

Call/Apply/Bind

As we know, normal functions have access to this. We can call the function with the object externally. Difference between call and apply is that . Binding extra parameters we normally use commas. When using apply it requires an array of data. 

Closure

From a function scope childrens can access to their parent properties. 

Functional programming 

Generally, functional programming means using functions to the best effect for creating clean and maintainable software. More specifically, functional programming is a set of approaches to coding, usually described as a programming paradigm.

Object oriented programming

Object-oriented programming (OOP) is a computer programming model that organises software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behaviour.

Nullish coalescing/ Logical or operator

When the left side operand is null or undefined it returns the right side operand. On the other hand when the left side operand is a falsy value it returns the right side operand, that is called logical or operator. 

Example:
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

Asynchronous Javascript 

Asynchronous programming makes it possible to express waiting for long-running actions without freezing the program during these actions. JavaScript environments typically implement this style of programming using callbacks, functions that are called when the actions complete.

Browser/Node JS

A computer program with a graphical user interface for displaying and navigating between web pages. Every browser has their own javascript engine. Just like google have v8 Engine, Mozilla have spider monkey.

Execution context

Cors (Cross origin resource sharing)

When we try to access data from a server from a different port or domain then an error message shows in the console that the request has been blocked by cors policy.Cause by default browsers reject the request. When we request a response from the browser, the browser shares some data to the request header.When a server allows to request from different origin than, the cors errors will not appear and it’s solves. Preflight is something when we try to put a request from a client, the client ensures that the request is eligible for the request . It’s kind of precaution 

Remove falsy value from array
Cost arr = [true, false]
Const filtered = arr.filter(Boolean)

Explanation : 

console.log(Boolean(5<8) // true
console.log(Boolean(10<8) // false

Convert an value to boolean

console.log(!!”something”)

If we place !! before any value,it will convert the value to boolean

We can also use boolean
console.log(Boolean(value))

Resize an array
If you change the array length it will resize

Flatten a multidimensional array
Cost arr = [“something”, [“some”, “thing”]]
console.log(arr.flat())
It will convert only one level array
If we try to flat multi level array then We have to pass Infinity as parameter the flat function

Just like 

console.log(arr.flat(Infinity))

Short conditional 

When left value is truthy it will go further 

Just like

Name === ‘affan’ && console.log(‘true in left side”)
On the other hand when left side is falsy then || will go further

Name === ‘affans’ || console.log(‘true in left side”)


Replace all occurrence from string

String = “Some is good in javascript , someone is trying hard”
string.replace(/Someone/g, “Affan”)
Using regular expression

Check performance of  task 

Const startTime = performance.now()

LOOP

Const endTime = performance.now()
console.log(endTime - startTime)

Data types in javascript 

Number.
String.
Boolean.
Undefined.
Null.
Object.
Symbol.

//Objects are non primitive data types. It stores values as reference type.


Pure function 

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

First Class Function

A programming language is said to have first class function when functions are treated like any other variable. For example, in a language function can return from another function and we can also pass a function as an argument to another function. 


Why Javascript Dynamically typed language

Because we can declare a variable with a type like string and we can change that reassigning value as another type Boolean or any other type.To get rid of this behaviour we can use typescript . It checks the type of data and.Typescript is a superset of javascript. 

Example Let a = 2;
a  = “3”

// Typescript
Let x : string = “string”

Difference between map and foreach 

Maps always return an array on the other hand for each doesn't return a value.
Flatten a array

Let array = [[1,3], [2,5],[“string”, null]]
Single level
Let flattenArrry = [].concat[...array]

Multi level

var flatten = function (array){
 // TODO: Program me 
var newArray = []; 
for(var i = 0; i<array.length; i++) {
 newArray.push(array[i]); } 
return newArray; }
This are the results excepted:
flatten([1,2,3]) // => [1,2,3] flatten([[1,2,3],["a","b","c"],[1,2,3]]) // => [1,2,3,"a","b","c",1,2,3] flatten([[[1,2,3]]]) // => [[1,2,3]] Test result: Test Passed



function flatten(array) { return array.reduce(function(memo, el) { var items = Array.isArray(el) ? flatten(el) : [el]; return memo.concat(items); }, []); }







Rest operator/ Spread operator

Array/object destructuring 

Deep copy/Shallow copy

Higher order function 

Debounce/Throttle 

Call back

Global variable/ Local Variable 

Scope

Primitive/Non primitive 

Why ES6

Web Api/ C++ api

Asynchronous functions executed by web api/c++ api. 
Interpreter, Just in time compiler

Javascript Runtime

Javascript errors and handling 

Null vs undefined

statically typed or a dynamically typed language

Reference value

Immediately Invoked Function in JavaScript?
This keyword

Recursion

Object prototypes

Arrow function 

Difference between prototypal and classical inheritance
What is a Temporal Dead Zone?
Why React 
Hooks
In functional programming in react. We use Hooks. It's a new feature used in react 16.8. Hooks have some rules. It should be only called top level and used in functions in react.It requires node 6 +, npm 5.2 or above. 
Virtual DOM

Render

useEffect, useState, useCallback, useMemo

Context API

Redux

Difference between Context api vs Redux

How Reux works

How Context Api works

Server side rendering 

Virtual Dom

Real Dom vs Virtual Dom

Cookies, Session Storage, Local storage 

Rest Api

Load more

JSON parse/stringify

React suspense

React router

How React router works



Notes

Event driven programming language.



