---
layout: main
title: Writing
---

<h2>Writing <a class="rss-link" href="http://feeds.feedburner.com/cobyism" target="_blank" title="Subscribe via RSS, if you’re into that kind of thing." id="rss-link"><i class="fa fa-rss-square"></i></a></h2>

<div class="article-index">
{% for post in site.posts  %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

  {% if forloop.first %}
    <h3 class="year-group" id="{{ this_year }}-ref">{{this_year}}</h3>
  {% endif %}

  <div class="article-summary">
    <a href="{{ post.url }}" {% if post.bg %}style="background-color: {{ post.bg }};"{% endif %}>
      {{ post.title }}
      <span class="post-meta">{{ post.date | date: '%B, %Y' }}</span>
    </a>
  </div>

  {% if this_year != next_year %}
    <h3 class="year-group" id="{{ next_year }}-ref">{{next_year}}</h3>
  {% endif %}
{% endfor %}
</div>

### On the GitHub Blog

<div class="article-index">
{% for post in site.data.github_blog_posts %}
  <div class="article-summary">
    <a href="{{ post.url }}" {% if post.bg %}style="background-color: {{ post.bg }};"{% endif %}>
      {{ post.title }}
      <span class="post-meta">{{ post.date | date: '%B, %Y' }}</span>
    </a>
  </div>
{% endfor %}
</div>

<div class="align-center">
  <br/>
  <strong>What should I write about next?</strong> I’d love to <a href="mailto:{{ site.author.email }}">hear from you</a>.
</div>
