---
layout: main
title: Talks
---

## Talks

<div class="align-center">
  <a href="https://www.flickr.com/photos/ambientideas/14143168310" title="Coby Chapple presenting at GitHub Kaigi in Tokyo, Japan by Jordan McCullough, on Flickr"><img src="https://farm3.staticflickr.com/2940/14143168310_47d63bc5e3_m.jpg" width="180" height="120" alt="_91C0175.jpg" target="_blank"></a>
  <a href="https://www.flickr.com/photos/fillyc/9573957691" title="Refresh Belfast - Coby Chapple of GitHub by Filly Campbell, on Flickr"><img src="https://farm4.staticflickr.com/3670/9573957691_85ba9b099d_m.jpg" width="180" height="120" alt="Refresh Belfast - Coby Chapple of GitHub" target="_blank"></a>
  <a href="https://www.flickr.com/photos/fillyc/9573953683" title="Refresh Belfast - Coby Chapple of GitHub by Filly Campbell, on Flickr"><img src="https://farm4.staticflickr.com/3816/9573953683_88887130e0_m.jpg" width="180" height="120" alt="Refresh Belfast - Coby Chapple of GitHub" target="_blank"></a>
</div>

<div class="callout">
  <h4>Need a speaker for your event? <a href="mailto:{{ site.author.email }}">Get&nbsp;in&nbsp;touch</a></h4>
</div>

<blockquote class="talk-testimonial">
  <p>Coby’s talk at <a href="http://scotlandjs.com/" target="_blank">ScotlandJS</a> was clear, insightful, and encouraging—<strong>a&nbsp;great way to&nbsp;close the&nbsp;conference</strong>.</p>
  <cite><img class="avatar" src="https://github.com/JiggyPete.png"><a class="author" href="https://twitter.com/jiggy_pete" target="_blank">Peter Aitken</a>, organiser of <a href="http://scotlandjs.com/" target="_blank">ScotlandJS</a></cite>
</blockquote>

### Past presentations

<ul class="talk-list">
{% for talk in site.data.talks reversed %}
  <li class="talk">
    <h4>{{ talk.topic }}</h4>
    <div class="talk-meta">
      <div class="talk-date"><i class="fa fa-calendar"></i> {{ talk.date | date: "%B, %Y" }}</div>
      <div class="talk-event">
        <i class="fa fa-map-marker"></i>
        {% if talk.event_url %}<a href="{{ talk.event_url }}" target="_blank">{{ talk.event }}</a>{% else %}{{ talk.event }}{% endif %}{% if talk.location %}, {{ talk.location }}{% endif %}
      </div>
    </div>
    <div class="talk-media">
      {% if talk.slides %}<div class="talk-slides"><i class="fa fa-film"></i> <a href="{{ talk.slides }}" target="_blank">Slides</a></div>{% endif %}
      {% if talk.video %}<div class="talk-video"><i class="fa fa-video-camera"></i> <a href="{{ talk.video }}" target="_blank">Video</a></div>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>
