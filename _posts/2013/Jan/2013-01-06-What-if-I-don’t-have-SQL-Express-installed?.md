---
layout: post
title: "What if I don’t have SQL Express installed?"
description: ""
category: 
tags: [Entity Framework, SQL Server, SQL Server Compact]
---
{% include JB/setup %}

<h4 style="background-color: #fcfcfc; border-top-color: rgb(204, 204, 204); border-top-style: dotted; border-width: 1px 0px 0px; font-family: Arial, Helvetica, sans-serif; font-size: 22px; line-height: 22px; margin: 10px 0px 5px -10px; padding: 15px 0px 5px; vertical-align: baseline;">
<span style="color: #59770e;">&nbsp;</span>what if I don’t have SQL Express installed?</h4>
<div style="background-color: #fcfcfc; border: 0px; color: #555555; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; padding: 0px 0px 15px; vertical-align: baseline;">
If you don’t have SQL Express installed and running, you may have got the following error when your code tried to read or write some data:</div>
<blockquote style="background-color: #fcfcfc; border: 0px; color: #555555; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; margin: 0px 0px 0px 40px; padding: 0px; quotes: ''; vertical-align: baseline;">
<div style="border: 0px; font-family: inherit; font-style: inherit; padding: 0px 0px 15px; vertical-align: baseline;">
<em style="border: 0px; font-family: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Blah blah blah…</em></div>
</blockquote>
<div style="background-color: #fcfcfc; border: 0px; color: #555555; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; padding: 0px 0px 15px; vertical-align: baseline;">
No problem! You can quickly switch to use the new SQL Server Compact – a lightweight, in-process database – without having to download or install anything manually. Simply add SQL Server Compact to your project by issuing the following command in the Package Manager Console:</div>
<div class="wp_syntax" style="background-color: #f9f9f9; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; border: 1px solid silver; box-shadow: rgb(204, 204, 204) 2px 2px 7px; color: #110000; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; margin: 0px 0px 1.5em; overflow-x: auto; overflow-y: hidden; padding: 8px 0px 8px 8px !important; vertical-align: baseline; width: 780px;">
<div class="code" style="border: 0px; font-family: inherit; font-style: inherit; margin: 0px; padding: 2px 4px; vertical-align: top;">
<pre class="text" style="border: 0px; clear: none; float: none; font-family: Consolas, Monaco, monospace; font-size: 12px; font-style: inherit; line-height: 1.333; overflow: visible; padding: 0px; vertical-align: baseline; width: auto;">Install-Package EFCodeFirst.SqlServerCompact</pre>
</div>
</div>
<div style="background-color: #fcfcfc; border: 0px; color: #555555; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; padding: 0px 0px 15px; vertical-align: baseline;">
Ta da – no more external database required. Run your project again (Shift-F5) and this time it will create and connect to a file-based database (a .sdf file will appear in your ~/App_Data folder). The EFCodeFirst.SqlServerCompact package adds a file to your project called AppStart_SQLCEEntityFramework.cs, which configures the runtime to use SQL CE.</div>
<div style="background-color: #fcfcfc; border: 0px; color: #555555; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; padding: 0px 0px 15px; vertical-align: baseline;">
Of course you probably still want the proper version of SQL Server when you eventually deploy your application for public use, but for small applications or for learning, SQL CE is really handy.</div>
