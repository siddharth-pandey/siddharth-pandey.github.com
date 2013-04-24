---
layout: post
title: "What if I don’t have SQL Express installed?"
description: ""
category: 
tags: [Entity Framework, SQL Server, SQL Server Compact]
---
{% include JB/setup %}

If you don’t have SQL Express installed and running, you may have got the following error when your code tried to read or write some data:

A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Blah blah blah…
No problem! You can quickly switch to use the new SQL Server Compact – a lightweight, in-process database – without having to download or install anything manually. Simply add SQL Server Compact to your project by issuing the following command in the Package Manager Console:

<pre>
	<code>
Install-Package EFCodeFirst.SqlServerCompact
	</code>
</pre>

Ta da – no more external database required. Run your project again `(Shift-F5)` and this time it will create and connect to a file-based database `(a .sdf file will appear in your ~/App_Data folder)`. The EFCodeFirst.SqlServerCompact package adds a file to your project called `AppStart_SQLCEEntityFramework.cs`, which configures the runtime to use SQL CE.
Of course you probably still want the proper version of SQL Server when you eventually deploy your application for public use, but for small applications or for learning, SQL CE is really handy.