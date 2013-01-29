---
layout: post
description: ""
category: 
tags: [CSS3, HTML5, JavaScript, Knockout, MVVM]
---
{% include JB/setup %}

One needs to understand the "Separation of Concerns" while building an application:<br />
<br />
<ol>
<li>The Structure i.e. HTML</li>
<li>Presentation i.e. CSS</li>
<li>Behaviour i.e. JavaScript</li>
</ol>
<div>
Do we use any UI patterns with JavaScript development, like&nbsp;</div>
<div>
<ol>
<li>MVVM or</li>
<li>Data binding structures</li>
</ol>
<div>
How should be write structured JavaScript? Should we write in a modular pattern?</div>
</div>
<div>
<br /></div>
<div>
Also, all apps love data, so, how should we care about data and bindings. Somehow, we need to load data from somewhere, such as using an Ajax service or loading JSON data on your screen and after getting the data how will you respect changes from the user</div>
<div>
<br /></div>
<div>
Knockout is a JavaScript library that can solve the above issues in a very nice and efficient manner.</div>
<div>
<br /></div>
<div>
So, what is Knockout?</div>
<div>
<ol>
<li>It allows you to have rich client-side interactivity for your UX provide a good pattern.&nbsp;</li>
<li>It gives you a good separation of structure and behaviour.</li>
<li>It provides you to use declarative bindings to be able to help you bind your UI elements, in case, HTML or even may be CSS styles and classes down to your source object.&nbsp;</li>
<li>Offers you to work in MVVM pattern.</li>
<li>It has a very good browser support. (IE6+, Firefox 2+, Chrome, Safari, Opera)</li>
</ol>
<div>
Key Concepts of Knockout:</div>
</div>
<div>
<ol>
<li>Dependency Tracking via observables (eg: a property depending on another property and it is in sync with a UI control and vice-versa(optional).)</li>
<li>Declarative Bindings (Instead of using JavaScript to go through DOM and find a particular control with certain ID use can bind the control from the html itself to push data to the UI and pull data from UI again from/to the source object.)</li>
<li>Templating Support (eg: you might have repetitive structures in your webpage like list of abc or rows in a list box, rows in a table or li in a ul/ol. You can use templates to take care of those views. You can use jQuery templates with Knockout, or native templates of Knockout or any third party templating engine.)</li>
</ol>
<div>
Demo</div>
</div>
<div>
<ul>
<li><a href="http://codepen.io/siddharth-pandey/full/ovrxL" target="_blank">Hello World Demo</a>&nbsp;(Open in a good browser as CodePen needs it.)</li>
</ul>
<div>
The important factor is to understand the MVVM in terms of Knockout: the separation of concerns.&nbsp;</div>
<div>
<ol>
<li>MVVM is just a separation pattern and a way to organise your code structure to make it easier to maintain and to deal with separation and responsibilities.</li>
<li>Model-View-ViewModel</li>
<li>Not technology specific. ( you might have heard MVVM with XAML and now you are using with Knockout with JavaScript and HTML.)</li>
<li>Works well with data bindings. (in this case its html)</li>
</ol>
<div>
MVVM Components</div>
</div>
</div>
<div>
<ol>
<li>We have a view which is this case is HTML. ( is the user friendly presentation of information)</li>
<li>We have our model which is in JSON. (javascript object in this case which has a property named as firstName)</li>
<li>Between above two, we have logic to separate to how to &nbsp;present that model JSON data into the view itself and that is our view model.&nbsp;</li>
<ol>
<li>It contains all the behaviour for the view that the view needs and can aggregate on or more models to show the data inside the view.</li>
<li>Contains properties like firstName, methods and the Model.</li>
</ol>
</ol>
<div>
Demo</div>
</div>
<div>
<ul>
<li><a href="http://codepen.io/siddharth-pandey/full/tcuob" target="_blank">A quick demo using JavaScript's object literal notation</a></li>
<li><a href="http://codepen.io/siddharth-pandey/full/dsmtH" target="_blank">A quick demo using JavaScript's function</a></li>
<li><a href="http://a%20quick%20demo%20using%20javascript%27s%20function/" target="_blank">A quick demo</a></li>
</ul>
<div>
Visual Studio Extensions for your productivity</div>
</div>
<div>
<ul>
<li>Nuget - to manage 3rd party libraries and references.</li>
<li>Web Essentials - code collapsing, vendor specific css properties, etc.</li>
<li>Web Standards Update - html intellisense and validation.</li>
<li>WoVS Default Browser Switcher - quickly change the default browser from visual studio.</li>
<li>JSLint - javascript code analysis.</li>
<li>CSSCop - catches common CSS issues.</li>
<li>Resharper 6 (trial version only) - javascript refactoring tools.</li>
</ul>
<div>
Begin Coding with Knockout and Visual Studio</div>
</div>
<div>
<ul>
<li>Either download the JavaScript references from&nbsp;<a href="http://knockoutjs.com/">http://knockoutjs.com/</a>.</li>
<li>Either get the debugger or minified version from&nbsp;Github.</li>
<li>Use Nuget to install Knockout.</li>
<li>Add intellisense for Knockout in Visual Studio for any *.js files by adding the following: &amp; lt; reference path="/scripts/knockout-2.2.0.debug.js" / &amp; gt; at script-page level.</li>
<ul>
<li>After doing this, whenever you will type ko. you will see all the options that you can use from the Knockout library.</li>
<li>It has to be the first line of code in the page and you have to comment it using "///".</li>
<li>Or use a tool like Resharper that will add the intellisense support for your project by its own.</li>
</ul>
</ul>
<div>
Key Resources</div>
</div>
<div>
<ul>
<li>Knockout &nbsp;- <a href="http://knockoutjs.com/">http://knockoutjs.com</a></li>
<li>Source Code - <a href="https://github.com/SteveSanderson/knockout">https://github.com/SteveSanderson/knockout</a></li>
<li>Documentation&nbsp;- <a href="http://jpapa.me/kodocs">http://jpapa.me/kodocs</a></li>
<li>Forums - <a href="http://jpapa.me/koforum">http://jpapa.me/koforum</a></li>
<li>Tutorials - <a href="http://learn.knockoutjs.com/">http://learn.knockoutjs.com</a></li>
<li>Stackoverflow - <a href="http://jpapa.me/kostackoverflow">http://jpapa.me/kostackoverflow</a></li>
<li>Ryan Niemeyer's Blog - <a href="http://www.knockmeout.net/">http://www.knockmeout.net</a></li>
<li>jsFiddle - <a href="http://www.jsfiddle.net/">http://www.jsfiddle.net</a></li>
<li>CodePen.io - <a href="http://codepen.io/">codepen.io</a></li>
</ul>
<div>
Stay tuned for part - 2.</div>
</div>
