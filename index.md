---
layout: page
title: 
tagline: 
---
<!-- {% include JB/setup %} -->
<div class="row">
<div class="span3">
<ul class="thumbnails">
              <li class="span3">
                <div class="thumbnail">
                  <img alt="Profile Image" style="" src="portfolioimage.jpg"><!-- width: 300px; height: 200px; -->
                  <div class="caption">
                    <h4>Hey! I am Sid</h4>
                    <p>I am a student for life &amp; an amateur software engineer.</p>
                    <em>Connect with me here:</em>
                    <br/><br/>
                    <div class="socialicons">
                      <a href="mailto:siddharthkpandey@gmail.com" title="Write a Mail to me"><span class="icon-mail" aria-hidden="true"></span></a>
                      <a href="https://plus.google.com/100899021987885665718" title="Link to Google Plus Profile"><span class="icon-google-plus" aria-hidden="true"></span></a>
                      <a href="https://www.facebook.com/sidp28" title="Link to Facebook Profile"><span class="icon-facebook" aria-hidden="true"></span></a>
                      <a href="https://twitter.com/siddharthp28" title="Link to Twitter Profile"><span class="icon-twitter" aria-hidden="true"></span></a>
                      <a href="http://uk.linkedin.com/in/siddharthkpandey/" title="Link to LinkedIn Profile"><span class="icon-linkedin" aria-hidden="true"></span></a>
                      <a href="http://stackoverflow.com/users/1211329/yoda" title="Link to Stackoverflow Profile"><span class="icon-stackoverflow" aria-hidden="true"></span></a><a href="https://github.com/siddharth-pandey" title="Link to Github Profile"><span class="icon-github" aria-hidden="true"></span></a>
                      <a href="https://gist.github.com/siddharth-pandey" title="Link to Gist (Snippets)"><span class="icon-github-2" aria-hidden="true"></span></a>
                      </div>
                    </div>
                </div>
              </li>
</ul>

<div class="well">
  <h5>Search By Category</h5>
<ul class="tag_box inline">
  {% assign categories_list = site.categories %}
  {% include JB/categories_list %}
</ul>

<h5>Search By Tags</h5>
<ul class="tag_box inline">
  {% assign tags_list = site.tags %}  
  {% include JB/tags_list %}
</ul>

</div>
<a href="http://www.w3.org/html/logo/">
<img src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="165" height="64" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics">
</a>
<br>
</div>
<div class="span9">
  <div class="postspreview">
  <ul>
    {% for post in site.posts limit:7 %}
    <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo; <span>{{ post.date | date_to_string }}</span> </li>
        {{ post.content | strip_html | truncatewords:50}} <br/><a href="{{ post.url }}" class="btn pull-right">Read more &raquo;</a><br/><br/>
    <hr/>
    {% endfor %}
  </ul>
</div>
</div>
<!-- Pagination links -->
<nav class="pagination">
  {% if paginator.previous_page %}
    {% if paginator.previous_page == 1 %}
      <a href="/" class="previous">&laquo;</a>
    {% else %}
      <a href="/page{{paginator.previous_page}}" class="previous">&laquo;</a>
    {% endif %}
  {% endif %}
  {% if paginator.next_page %}
    <a href="/page{{paginator.next_page}}" class="next ">&raquo;</a>
  {% endif %}
</nav>
</div>




