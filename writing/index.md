---
layout: main
title: Writing
---

## Writing

<div class="article-index">
{% for post in site.posts %}
  <div class="article-summary">
    <a href="{{ post.url }}">{{ post.title }}</a>
  </div>
{% endfor %}
</div>

### On the GitHub Blog

<div class="article-index">
{% for post in site.data.github_blog_posts %}
  <div class="article-summary">
    <a href="{{ post.url }}">{{ post.title }}</a>
  </div>
{% endfor %}
</div>

<div class="align-center">
  <br/>
  <strong>What should I write about next?</strong> I’d love to <a href="mailto:{{ site.author.email }}">hear from you</a>.
</div>
