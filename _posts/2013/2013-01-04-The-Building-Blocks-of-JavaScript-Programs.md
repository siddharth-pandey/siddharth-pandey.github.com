---
layout: post
title: "The Building Blocks of JavaScript Programs"
description: ""
category: 
tags: [JavaScript]
---
{% include JB/setup %}

This post is second is series of learning JavaSciprt fundamentals. You may like to visit this article to go through all the posts in the series.<br />
<br />
Now, we will learn some building blocks the bits and pieces, that one should know to write JavaScript code.<br />
<br />
<b>The working demo for this post is <a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b><br />
<h3>
Outline</h3>
<div>
<ul>
<li>Comments - using which you can write some hints for a piece of code.</li>
<li>Variables</li>
<li>Null - a special object in JavaScript programs</li>
<li>Undefined - which is slightly different primitive type in JavaScript.</li>
<li>Finding Help - we will see where we can go for any assistance/docs for JavaScript.</li>
<li>Objects</li>
<li>Equality - how things are compared in JavaScript which one should be aware of it.</li>
</ul>
<h3>
Comments</h3>
</div>
<div>
<ul>
<li>The comments in JavaScript is kind of similar to comments syntax&nbsp;available&nbsp;in Java.</li>
<li>Comments is something that won't output anything as a result like your other piece of code, it is just for your use as it doesn't get rendered by the JavaScript interpreter.&nbsp;</li>
<li>Single line Comment - "//", this two forward slash characters is used for single line comments followed by any single line sentence. For example, "// this is a single line comment".</li>
<li>Multiline Comment - "/* &nbsp;your content */", the syntax for this comment is forward slash and star to start with, put your multiline sentence after that and close it with start and forward slash. For example - /* As you know this is a multiline comment, in which you can break the sentence into n number of lines.*/.</li>
<li>You might want to use comments for any piece of code in order to instruct yourself or to any other developer in the team that what that code does, etc.</li>
<li><b>The working demo for this post is&nbsp;<a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b></li>
</ul>
<h3>
Variables</h3>
</div>
<div>
<ul>
<li>Variables in JavaScript are declared with 'var' keyword.</li>
<li>Variables type is inferred, i.e. they don't have a type until a value has been assigned to a variable. When assigned, the type is then defined from type of value specified.</li>
<li><b>The working demo for this post is&nbsp;<a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b></li>
</ul>
<h3>
Null</h3>
</div>
<div>
<ul>
<li>Is one of the JavaScript primitive types.</li>
<li>Null means the absence of a value.</li>
<li>But when null is used in any boolean expression like in case of a if condition, it evaluates to false.</li>
<li><b>The working demo for this post is&nbsp;<a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b></li>
</ul>
<h3>
Undefined</h3>
</div>
<div>
<ul>
<li>Is also one of the JavaScript primitive types.</li>
<li>It represents an unknown value i.e. a variable that has not been assigned anything.</li>
<li>We encounter undefined when a non-existence object property is called.</li>
<li>But when undefined is used in any boolean expression like in case of a if condition, it evaluates to false.</li>
<li><b>The working demo for this post is&nbsp;<a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b></li>
</ul>
<h3>
Finding Help</h3>
</div>
<div>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/JavaScript" target="_blank">Mozilla Developer Network</a></li>
</ul>
<h3>
Objects</h3>
</div>
<div>
<ul>
<li>Everything in JavaScript is an object except for the simple types like string, number, boolean, null and undefined.</li>
<li>Objects are collection of properties and the values of those properties can be of any type.</li>
<li>Objects are declared with the object literal notation.
<br />
<code>
var anobject = {
firstValue: 'a',
secondValue: 2
};
</code>
</li>
<ul>
<li><span style="font-family: monospace;">In the above example, we have created a anobject object, with two properties - firstValue with a string value and secondValue with a numeric value.</span></li>
</ul>
<li><span style="font-family: monospace;">In JavaScript, there is no class construct but we can define our objects and properties.</span></li>
<li><span style="font-family: monospace;"><b style="font-family: Times;">The working demo for this post is&nbsp;<a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b></span></li>
</ul>
<h3>
<span style="font-family: monospace;">Equality</span></h3>
</div>
<div>
<ul>
<li><span style="font-family: monospace;">Objects are only equal to&nbsp;them-self.</span></li>
<li><span style="font-family: monospace;">Primitives are equal only if the values matches like ("Dog"==="Dog").</span></li>
<li><span style="font-family: monospace;">There are two types of equality operators in JavaScript:</span></li>
<ul>
<li><span style="font-family: monospace;">==</span></li>
<li><span style="font-family: monospace;">===</span></li>
<li><span style="font-family: monospace;">The difference between the two is type coercion.</span></li>
<li><span style="font-family: monospace;">== only checks for values but === check for values and also for the type.</span></li>
<li><span style="font-family: monospace;">Use === over == and !== over != as it gives a proper answer&nbsp;comparing value and the type. Although, the decision is yours.&nbsp;</span></li>
<li><span style="font-family: monospace;"><b style="font-family: Times;">The working demo for this post is&nbsp;<a href="http://codepen.io/siddharth-pandey/full/Fxdol" target="_blank">here</a>.</b></span></li>
</ul>
</ul>
<div>
<span style="background-color: white; color: #333333; font-family: 'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 19px; text-align: justify;">&nbsp;</span><a href="http://learnwithsid.blogspot.com/2012/11/learning-javascript-fundamentals.html" style="-webkit-transition: color 0.3s; background-color: white; color: #009eb8; display: inline; font-family: 'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 19px; outline: none; text-align: justify; text-decoration: initial;" target="_blank"><b>Keep reading the other post in this series to learn JavaScript.</b></a><span style="background-color: white; color: #333333; font-family: 'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 19px; text-align: justify;">&nbsp;Happy Learning!</span></div>
</div>
<div>
<b><br /></b></div>
<div>
<b><br /></b></div>
<div>
<b><br /></b></div>
