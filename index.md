---
layout: main
title: Home
---

I’m a product designer and web developer at [GitHub](https://github.com), and live just south of Belfast, in County&nbsp;Down, Northern Ireland. I’m&nbsp;originally from New&nbsp;Zealand, but also lived in Australia too. I&nbsp;care about building focused products, approachable interfaces, and information architecture that encourages&nbsp;flow. I&nbsp;also love photography, mountain&nbsp;biking, and studying martial&nbsp;arts.

[Follow me on Twitter &rarr;](https://twitter.com/{{ site.author.handle }})

## Writing

Occasionally, I write things. I wish I did this more often.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) – {{ post.date | date_to_long_string }}{% endfor %}

I sometimes also write on the [GitHub blog](https://github.com/blog).
Here’s a couple of articles:

{% for post in site.data.github_blog_posts %}
- [{{ post.title }}]({{ post.url }}) – {{ post.date }}{% endfor %}

## Talks

Every now and then I present at events.

{% for talk in site.data.talks reversed %}
- **{{ talk.topic }}** @ {% if talk.event_url %}[{{ talk.event }}]({{ talk.event_url }}){% else %}{{ talk.event }}{% endif %}<br>
  {{ talk.location }} — {{ talk.date }}{% if talk.slides %}<br>[Slides]({{ talk.slides }}) {% endif %}{% if talk.video %}[Video]({{ talk.video }}){% endif %}
{% endfor %}

Interested in having me speak at your event? [Let’s talk &rarr;](mailto:{{ site.author.email }})

## Projects

I often experiment with side-projects. Here are a few I’ve played around with over the last little&nbsp;while:

- [Ricochet](https://github.com/cobyism/ricochet) is an exploration of what it would mean to manage my entire laptop’s setup using&nbsp;[Ansible](http://docs.ansible.com/).

- To experiment with the recently released [Heroku button](https://devcenter.heroku.com/articles/heroku-button), I made one-button deployments for a few things:
  - [Ghost](https://github.com/cobyism/ghost-on-heroku), the blogging platform.
  - [Redmine](https://github.com/cobyism/redmine-on-heroku), the project management application.
  - [Hubot (for IRC)](https://github.com/cobyism/hubot-heroku-irc), the chat bot we use at&nbsp;GitHub.

- [Gridism](http://cobyism.com/gridism) is a deliberately simple CSS grid that better reflects my mental model of layouts. I don’t think in 12 or 16 column grids, I think in terms of halves, thirds, quarters and so&nbsp;forth.

- [DCIY](https://github.com/cobyism/dciy) is an attempt to build a simple <abbr title="Continuous Integration">CI</abbr> system that you can run locally on your&nbsp;computer.

- [Filefile](https://github.com/cobyism/filefile) is a light-hearted send-up of the various applications and systems that use filenames that end with the word 'file'.

Have a look at [my GitHub profile](https://github.com/{{ site.author.handle }}) for a longer list.

## Got a question?

I’d :heart: to hear from you if you have any questions or feedback, so feel free to get in touch.
I’m on [GitHub](https://github.com/{{ site.author.handle }}), [Twitter](https://twitter.com/{{ site.author.handle }}), [Instagram](http://instagram.com/{{ site.author.handle }}), and&nbsp;[email](mailto:{{ site.author.email }}).
