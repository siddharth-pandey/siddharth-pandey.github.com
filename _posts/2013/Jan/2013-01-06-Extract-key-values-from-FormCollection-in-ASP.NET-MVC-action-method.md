---
layout: post
title: "Extract key/values from FormCollection in ASP.NET MVC action method"
description: ""
category: 
tags: [ASP.NET, C#, MVC]
---
{% include JB/setup %}


<span style="background-color: white; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 18px;">&nbsp;To avoid you from having to chase for the same information: here's how you extract key / value pairs from the FormCollection that comes as an argument in an ASP.NET MVC action method:</span><br />
<br />
<div id="language_cs_77115" style="background-color: #fffaef; border: medium none; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 18px;">
<pre style="font-size: 10pt; line-height: 12pt; width: auto;"><span style="color: blue;">public</span> ActionResult Create(FormCollection formCollection)
{

   <span style="color: blue;">foreach</span> (var key <span style="color: blue;">in</span> formCollection.AllKeys)
   {
      var value = formCollection[key];
      <span style="color: green;">// etc.</span>
   }

   <span style="color: blue;">foreach</span> (var key <span style="color: blue;">in</span> formCollection.Keys)
   {
       var value = formCollection[key.ToString()];
       <span style="color: green;">// etc.</span>
   }
}
</pre>
</div>
<span style="background-color: white; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 18px;">Also, a final tip: If you find that the formCollection does not contain the key/value pairs&nbsp;you expected,&nbsp;check that&nbsp;</span><br />
<ol style="background-color: white; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 18px;">
<li>Your controls reside within the correct&nbsp;form (you can have more than one)</li>
<li>Your controls have&nbsp;<span style="font-weight: bold;">names&nbsp;</span>(just having an&nbsp;<span style="font-weight: bold;">id</span>&nbsp;is not returning values in the formCollection)</li>
</ol>
<span style="background-color: white; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 18px;">Hope this helps.&nbsp;</span>