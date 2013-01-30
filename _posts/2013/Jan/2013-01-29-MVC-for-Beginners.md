---
layout: post
title: "MVC for Beginners"
description: ""
category: 
tags: [MVC, C#, ASP.NET]
---
{% include JB/setup %}


### Tools required for Development      

You can use [Web Platform Installer](http://www.google.com), a tool from Microsoft to download the tools that we need to learn ASP.NET MVC applications. You might want to use Visual Studio Express/Ultimate/Professional as your text editor to write, test and debug your code (C#, JavaScript, HTML, CSS, etc.). You can also install IIS express, a light weight web server that we can use to run our application as it handles the HTTP request coming from the web browser and SQL Server 2008 R2 Express or higher to work with database. As I will be writing a series of posts for MVC, I will use these tools to develop my application.

* * *

### Create a New Project
I am using Visual Studio 2012 Ultimate edition for this series. Create a new project, by opening the Visual Studio, Go to File - New - Project, Select Web as a category from the left side bar and then choose either MVC 3/4 Web Application Template. I have selected MVC 4 and in the next screen, click Internet applicaiton if you want to have a basic website out of the box or Empty, if you don't want anything and start from the scratch. It is good to start with Internet Applicaiton. Now, if you run this application, you will be amazed by looking at a working website which you can play around. I have named my application as FoodReviewMVCApp. You can give any name you like. Also, for now we have selected Razor as view engine which we will discuss later in this series in more detail.

### Understanding the ASP.NET MVC Design Goals
The ASP.NET MVC term means Model View Controller and this a application design pattern that is being use since very long in the industry. This is mainly used, when you want to separate the responsibilites of the components in you User-Interface Layer.  

1. The 'C' in MVC is known as the Controller, which is a software component that will be target for some external stimulus like an incoming HTTP Request for example, /Accounts/Logon.
2. When controller receives this request, it is responsible for building a Model (which is M in MVC), which is the information that you need to give to ther user to satisfy the incoming request. For example, if the user is coming to your site to see a list of italian foods, your application then needs to have a controller that gives a list of italian foods in response to that request. And that list will be the model.
3. The controller will then select a view to display the model(information). Views in MVC are simple objects. Think like views are just templates that takes data from the model and put them at proper location of that template to render a page that has a User-Interface design with the information from the model as a response to the user.
4. The ends result is the separation of concerns that isolates behaviour into one on the above categories. Your views for example, will never have to care about to call the data access layer. Or your controllers will never worry about where to place and how to give a colour to any section of the page.
5. The above separation in the UI layer is easier to maintain and to move forward whenever it needs any modification in future.
6. The MVC design pattern doesn't care about what kind of data access layer you want to use in your application. You can use services, any relational database, or any other kind of data storage. This pattern also doesn't care about how your business objects or domain layer should look like. It won't affect this design pattern, even if you don't have any such layers in your application because it is the design pattern of building the User Interface and nothing more.
7. If you run your application and view the page source, you will find a very clean html stucture in the page. MVC pattern has the goal of embracing the web as when you working with MVC design pattern, you are expected to work with HTML, CSS and JavaScript.
8. The MVC runs on top of the core ASP.NET runtime. So, if you are already aware of ASP.NET modules, caching, handlers and diagnostics that will be very helpful for you to work with MVC environment. 
9. The MVC framework is designed for extensibility. Say suppose, if you don't like any default behaviour, you will be able to extend it depending on your needs as the MVC environment is very flexible.
10. Another goal of MVC is of being testable. We will see the advantage of the testing features that this desing pattern offers later in this post.
* * *

### Changing a View
If you run your application, and hover or click on About menu Item, you will find that the linked page with that item is "~/Home/About" which means that this request will go to that Home controller and will call a public action method named About(). See the *naming convention* in the code below which is from Controllers folder - HomeController.cs:
{% highlight C# %}
public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About() // Place your breakpoint here
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
{% endhighlight %}

If you place the breakpoint on About(), and if you click on About menu item, you will find that the control comes on that method and it will go on executing that method, which returns a View. The term **ActionResult** is a type of action result that MVC framework expects and we are saying it to return a view in this case. For example, we might ask the About() to return some JSON data, etc. 

So, we are asking About() to render a View but which one? We have some naming conventions for views also. The return statement searches the folder named as Views > Home (which is the same as the name of the controller above) > it then searches for a view file with an extension of '.cshtml' named as About i.e. About.cshtml (which is the same as About()). So, this view will be rendered as html head title body html and will be sent to the browser.
* * *

### Using ViewBag

ViewBag is a dynamically typed object which means we can add any sort of properties to this ViewBag which can be retrieved in a view to pull out the data stored in that property inside ViewBag to display the view to the user.

So, if we want to create a new property using ViewBag inside our Controller, we can write: 

<pre>
	public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";
            ViewBag.Location = "United Kingdom"; // New property

            return View();
        }
</pre>

To display this new piece of information in our view, we can write the following in our About.cshtml and give styling to it:

<pre>
@ViewBag.Message
You are from - @ViewBag.Location
</pre>

So, this is one of the approach of controller building some data or information and giving it to the view using ViewBag in order to display that to the user. 

### Using Strongly Typed Model
### Understanding Routes



