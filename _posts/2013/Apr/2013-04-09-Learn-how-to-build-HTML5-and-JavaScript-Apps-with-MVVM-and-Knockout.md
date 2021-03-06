---
layout: post
description: "Learn how to build HTML5 and JavaScript Apps with MVVM and Knockout"
category: 
tags: [CSS3, HTML5, JavaScript, Knockout, MVVM]
---
{% include JB/setup %}

One needs to understand the "Separation of Concerns" while building an application:

- The Structure i.e. HTML
- Presentation i.e. CSS
- Behaviour i.e. JavaScript

Do we use any UI patterns with JavaScript development, like 
- MVVM or
- Data binding structures

How should be write structured JavaScript? Should we write in a modular pattern?

Also, all apps love data, so, how should we care about data and bindings. Somehow, we need to load data from somewhere, such as using an Ajax service or loading JSON data on your screen and after getting the data how will you respect changes from the user

**Knockout is a JavaScript library that can solve the above issues in a very nice and efficient manner.**

**So, what is Knockout?**

- It allows you to have rich client-side interactivity for your UX provide a good pattern. 
- It gives you a good separation of structure and behaviour.
- It provides you to use declarative bindings to be able to help you bind your UI elements, in case, HTML or even may be CSS styles and classes down to your source object. 
- Offers you to work in MVVM pattern.
- It has a very good browser support. (IE6+, Firefox 2+, Chrome, Safari, Opera)

**Key Concepts of Knockout:**

- Dependency Tracking via observables (eg: a property depending on another property and it is in sync with a UI control and vice-versa(optional).)
- Declarative Bindings (Instead of using JavaScript to go through DOM and find a particular control with certain ID use can bind the control from the html itself to push data to the UI and pull data from UI again from/to the source object.)
- Templating Support (eg: you might have repetitive structures in your webpage like list of abc or rows in a list box, rows in a table or li in a ul/ol. You can use templates to take care of those views. You can use jQuery templates with Knockout, or native templates of Knockout or any third party templating engine.)

**Demo**

[Hello World Demo (Open in a good browser as CodePen needs it.)](http://codepen.io/siddharth-pandey/full/ovrxL)

The important factor is to understand the MVVM in terms of Knockout: the separation of concerns. 

- MVVM is just a separation pattern and a way to organise your code structure to make it easier to maintain and to deal with separation and responsibilities.
- Model-View-ViewModel
- Not technology specific. ( you might have heard MVVM with XAML and now you are using with Knockout with JavaScript and HTML.)
- Works well with data bindings. (in this case its html)

**MVVM Components**

- We have a view which is this case is HTML. ( is the user friendly presentation of information)
- We have our model which is in JSON. (javascript object in this case which has a property named as firstName)
- Between above two, we have logic to separate to how to  present that model JSON data into the view itself and that is our view model. 
	- It contains all the behaviour for the view that the view needs and can aggregate on or more models to show the data inside the view.
	- Contains properties like firstName, methods and the Model.

**Demo**

- [A quick demo using JavaScript's object literal notation](http://codepen.io/siddharth-pandey/full/tcuob)
- [A quick demo using JavaScript's function](http://codepen.io/siddharth-pandey/full/dsmtH)
- [A quick demo](http://a%20quick%20demo%20using%20javascript%27s%20function/)

**Visual Studio Extensions for your productivity**

- Nuget - to manage 3rd party libraries and references.
- Web Essentials - code collapsing, vendor specific css properties, etc.
- Web Standards Update - html intellisense and validation.
- WoVS Default Browser Switcher - quickly change the default browser from visual studio.
- JSLint - javascript code analysis.
- CSSCop - catches common CSS issues.
- Resharper 6 (trial version only) - javascript refactoring tools.

**Begin Coding with Knockout and Visual Studio**
- Either download the JavaScript references from http://knockoutjs.com/.
- Either get the debugger or minified version from Github.
- Use Nuget to install Knockout.
- Add intellisense for Knockout in Visual Studio for any *.js files by adding the following: & lt; reference path="/scripts/knockout-2.2.0.debug.js" / & gt; at script-page level.
	- After doing this, whenever you will type ko. you will see all the options that you can use from the Knockout library.
	- It has to be the first line of code in the page and you have to comment it using "///".
	- Or use a tool like Resharper that will add the intellisense support for your project by its own.

**Key Resources**

- [Knockout](http://knockoutjs.com)
- [Source Code](https://github.com/SteveSanderson/knockout)
- [Documentation](http://jpapa.me/kodocs)
- [Forums](http://jpapa.me/koforum)
- [Tutorials](http://learn.knockoutjs.com)
- [Stackoverflow](http://jpapa.me/kostackoverflow)
- [Ryan Niemeyer's Blog](http://www.knockmeout.net)
- [jsFiddle](http://www.jsfiddle.net)
- [CodePen.io](codepen.io)
