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
  <h4>Each year, I accept a small number of speaking gigs.</h4>
  <p>
    Interested in having me speak at your event? <a href="mailto:{{ site.author.email }}">Get in touch</a>
  </p>
</div>

### Past presentations

{% for talk in site.data.talks reversed %}
- **{{ talk.topic }}** @ {% if talk.event_url %}[{{ talk.event }}]({{ talk.event_url }}){% else %}{{ talk.event }}{% endif %}<br>
  {{ talk.location }} — {{ talk.date }}{% if talk.slides %}<br>[Slides]({{ talk.slides }}) {% endif %}{% if talk.video %}[Video]({{ talk.video }}){% endif %}
{% endfor %}
