---
layout: post
title: "Must Have Developer Tools! Some tricks to develop quicker"
description: ""
category: 
tags: [CSS3, Developer Tools, HTML5, JavaScript, jQuery, Productivity]
---
{% include JB/setup %}

**Google Developer Tools, Some tricks to develop quicker**

- View Source => By going through menu navigation or Ctrl-Shit-I on windows or Cmd-option(alt)-I on mac.
- Or for particular element, just right click on it and choose inspect element.
- For fast navigation, prefer keyboard arrow keys to collapse or expand DOM elements. You will find the width and height of that active element as you move in Developer Tool.
- To get the full view of the page, try Ctrl - (minus) to zoom out so as to see your whole page with developer tools open without scrolling. Sometimes useful to me.
- You can copy the the content or the DOM elements by using your mouse, but you might like to do this by using console's copy() method. For example, copy(document.body.innerText) and then paste that anywhere. Its handy if you know the DOM element and may help for productivity.
- Use clear(); function to clear the console, however the developer tool has a GUI for that.
- Use inspect(body) to inspect body element of the DOM, just pass any element in the function.
- Also, you can use $0 to access the element that is selected in the DOM in a console. So,  you can pass $( $0 ) for jquery method where an anchor tag was selected in your DOM, so it means you are accessing that anchor method.
- Under Network tab, the blue line in the waterfall chart shows that the DOM is ready or the DOMContentLoaded Event fire and the read line shows the windows load event which waits for the documents to load images, iframes, etc.
- You an see the cookies information by going through the Network tab and then selecting Header or Cookies tab.
- For javascript debugging, we can edit the script file of the page on the fly and it will render it as this feature is unique to Chrome because of its V8 JavaScript engine.
- Sometimes, its hard for us to find where the error is in our script, so you might want to open the script in developer tools and then click the pause button, now chrome will set a breakpoint when it find the statement because of which the error is being logged in console.