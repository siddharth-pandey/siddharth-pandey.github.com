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
10. Another goal of MVC is to be testable. We will see the advantage of the testing features that this desing pattern offers later in this post.
 
* * *
    
### Changing a View
If you run your application, and hover or click on About menu Item, you will find that the linked page with that item is "~/Home/About" which means that this request will go to that Home controller and will call a public action method named About(). See the *naming convention* in the code below which is from Controllers folder - HomeController.cs:

<pre>
<code>
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
    </code>
</pre>

If you place the breakpoint on About(), and if you click on About menu item, you will find that the control comes on that method and it will go on executing that method, which returns a View. The term **ActionResult** is a type of action result that MVC framework expects and we are saying it to return a view in this case. For example, we might ask the About() to return some JSON data, etc. 

So, we are asking About() to render a View but which one? We have some naming conventions for views also. The return statement searches the folder named as Views > Home (which is the same as the name of the controller above) > it then searches for a view file with an extension of `.cshtml` named as About i.e. About.cshtml (which is the same as About()). So, this view will be rendered as html head title body html and will be sent to the browser.

* * *

### Using ViewBag

ViewBag is a dynamically typed object which means we can add any sort of properties to this ViewBag which can be retrieved in a view to pull out the data stored in that property inside ViewBag to display the view to the user.

So, if we want to create a new property using ViewBag inside our Controller, we can write: 

<pre>
<code>
	public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";
            ViewBag.Location = "United Kingdom"; // New property

            return View();
        }
        </code>
</pre>

To display this new piece of information in our view, we can write the following in our About.cshtml and give styling to it:

<pre>
<code>
@ViewBag.Message
You are from - @ViewBag.Location
</code>
</pre>

So, this is one of the approach of controller building some data or information and giving it to the view using ViewBag in order to display that to the user. 
***

### Using Strongly Typed Model

Every MVC application in Visual Studio will give you a Models folder that you can use to create  viewmodel for your views but in reality the models can live anywhere like in any other project. As such we are developing a website where users can read reviews for restaurants, we will create a new class inside Models folder and name it as 'RestaurantReview.cs'. 

Now, we will create two properties for our viewmodel, Name and Ratings like this:

<pre>
	<code>
	 public class RestaurantReview
    {
        /// <summary>
        /// Name of the Restaurant
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Rating for the Restaurant
        /// </summary>
        public int Rating { get; set; }
    }
	</code>
</pre>

Now, say suppose, if the user goes to url like '/Home/Index' or '/Home/', we want to display a list of reviews and the names of the restaurant to the user. In a real case scenario, we would be using a database to store our data and then fetching the data as and when we need but not we will write the following in HomeController.cs. Read the comments for more information below:

<pre>
	<code>
	public ActionResult Index()
        {
            ViewBag.Message = "Your app description page.";
            ViewBag.Location = "United Kingdom";

            //Instead of this viewModel, we would be using a database in real scenario, to fetch the names and ratings for restaurants. But for now, just use this.
            var viewModel = new RestaurantReview()
            {
                Name = "Nandoos",
                Ratings = 4
            };

            //And we are telling the About() action to return a view with viewModel that we have just created. This is a way to giving the restaurant information from a
            //database or hard-coded values in this case to the view.
            return View(viewModel);
        }
	</code>
</pre>

Now open the Index.cshtml under views - Home folder. Every razor view will have a Model property by default which we can use to show the information that we have in our viewModel. So, models or viewmodels are kind of same as ViewBag and dynamic too, so you can use those to access the data that you have passed in the properites of your viewmodel inside the controller as shown in the sample code above. To access the names and ratings, we will use `@Model` in our view like this:

<pre>
	<code>
        Restaurant Name: @Model.Name
		Ratings: @Model.Ratings
	</code>
</pre>

If you now run the application after saving all your work, you will be able to see the Nandoos as name and 4 as rating on the Index page as defined under Home controller.

**Another way to bind view with the model**

Use `@model` directive at the top of the view to tell razor, the type of the model that we want to bind with our view. So the below code, i.e. the Model RestaurantReview will be used as the generic type parameter for our @Model property. This is what we called a **strongly typed Model approach**. So, if you now type `@Model.`, you will get intellisense to select either of the Name or Ratings. So, now our view look like this:

<pre>
	<code>
	//This should be at the top of our view
	@model FoodReviewMVCApp.Models.RestaurantReview

	@{
    	ViewBag.Title = "Home Page";
	}

	Restaurant Name: @Model.Name
    Ratings: @Model.Ratings

	</code>
</pre>

Now, this view expects the controller to pass RestaurantReview model and we can check whether the controller is doing this correctly or not using Unit Testing. 

***

### Unit Testing
As one of the design goals of MVC design pattern is to be testable, specifically, your controllers should be testable. Unfortunately, there are no test tools available in Visual Studio Express edition but there are many open source projects available that allow you to write unit tests.

For Unit testing, we will add a new class library project to the same solution. So, go to File - New Project - Select Windows from left-hand sidebar and choose class library as template that just produces a dll (not a ui or produce html head title body html output) and give it a name as `FoodReviewMVCApp.Tests`.

Now we will use Nuguet Package Manager, a tool to install different open source or other projects (dependencies) in your own project. And search for NUnit, a unit-testing framework. Also, add reference to the FoodReviewMVCApp project to this test project so as to use it. We also need to refer to `System.Web.MVC` dll in our test project as we are going to use some types defined in this assembly. Now, rename the Class.cs to HomeControllerIndexTests.cs or just create a new one with the same name, by which I mean to say we are going to test Index action under Home controller.

Also, note that I am changing the return type of Index action in HomeController.cs from `ActionResult` to `ViewResult` to be more specific as we want to return view. It inherits ActionResult by inheriting ViewResultBase class. 

<pre>
	<code>
		public ViewResult Index()
        {
        	//rest of the code here is same as above 
        }	
	</code>
</pre>

Now you have two option to run this test:
1. Either use the NUnit GUI application that you can find under package folder - NUnit - Tools under your solution and opening the dll of your test application inside it.
2. You can also use a nunit-console.exe and pass the path of dll to this exe and this will use the console to give the results.

You need to run the test everytime you write something and want to test it. So, if you want you can add a post-build event and the test will run for you. Right-click the FoodReviewMVCApp and select Properties. Then select - Build Events and write under Post-Build event command line:

<pre>
	<code>
		$(SolutionDir)\packages\NUnit.xxx\tools\nunit-console $(TargetPath)
	</code>
</pre>

The above code has been created by using the macros feature that you can add from Post-Build event GUI - Edit Post Build. Replace the `.xxx` with the NUnit version you have installed. Now the errors will be shown in the error list inside Visual Studio and the exception/success messages will be displayed in the Output windows inside Visual Studio. Now, as you can see the test is now automated and most of the unit test frameworks will work in the same manner.

***

### Styling and JavaScript in MVC

Another goal of MVC design pattern is to embrace the web i.e. use HTML, CSS and JavaScript. Views is all about HTML and using it as a template to display it to the user. `Content` is the folder where all your styling of the application, i.e. css, less, scss should reside. And Scripts is the folder where all the javascripts like the ones written by you or any vendor or any plugin scripts.

***
 
###Summary

In this post, we have gone through the tools that is required to work with MVC like Visual Studio, IIS Express, SQL Server, MVC Framework. We have also covered the design goals of MVC which is very important and disucssed what MVC stands for. I will be covering more in this series about MVC. And yeah, welcome to the MVC world!!!

<br/><br/>
