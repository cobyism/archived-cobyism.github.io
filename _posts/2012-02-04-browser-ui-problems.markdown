---
layout: post
title: "Browser UI Problems, or Why I Use Chrome"
date: 2012-03-06 07:34
comments: true
categories: [Design, Interfaces, Software]
---

As a UI designer and web developer I spend a lot of time thinking about interfaces. Generally, I tend to prefer software that demonstrates a similar thoughtfulness — but there's one particular category of program about which I am noticeably picky: my web browser. So much so, that I'm about to embark on a rant about the problems I've encountered, and why one browser continually wins out for me. Read on if that's the sort of thing you care about.

<!--more-->

I spend hours upon hours of my day inside one, so even small UI problems are enough to make me want to jump ship to another browser. To keep me on my toes (and make sure I haven't missed any massive features or something), I frequently attempt to change the browser I use for a week or so—but so far I've always come running back to one browser (often within a day or two): [Google Chrome](http://google.com/chrome). Let me explain.

Note: I run OS X, so I haven't included anything here about the UI of Internet Explorer. Even if I didn't, there's a whole bunch of other reasons I wouldn't use IE.

## The Omnibar

To me, it seems obvious that you only need one area for text-based navigation, regardless of whether you are doing a search or entering a URL. If I'm about to start a browsing session, I just want to type what I want and have the browser bring me that however it has to, whether it's by showing me a dropdown list of URLs I've visited in the past, or by me hitting enter and showing me a list of search results. I see no advantage in splitting this bar into one text entry field on the left for web addresses, and a second on the right for searches. Chrome gets this, which is why they designed it to have the Omnibar in the first place. Sure there's Omnibar plugins available for [Safari](http://hackemist.com/SafariOmnibar/) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/omnibar/), but the fact that they don't ship with this by default tells me that the designers of these applications just don't understand how unnecessary this secondary search box is, and consequently suggests that they don't care quite as much about this aspect of the user's experience.

## Tab Layout and Window Titles

I find the tab and title layout in both Safari and Firefox a little silly. They have the three window control buttons (close, minimise, and maximise) then a whole bunch of horizontal space, then a window title in the middle, and then a whole bunch more empty space on the other side. This space does allow windows to display longer &lt;title&gt; attributes, but when you've got the title already displayed for each tab, this whole horizontal area becomes unnecessary.

Chrome puts the window's close, minimise and maximise buttons in-line with the tabs, and does away with the need to display a window title separately. This saves space and eliminates redundant content.

I think this is an obvious solution to the layout, and feels much nicer on my eye all-round. Classy.

## New Tab vs. New Window

I use tabs like there's no tomorrow, but I hardly ever find myself wanting to split my tabs into multiple windows (and even then it's usually only for a cleaner screen shot or something similar). I assume that most other people also use tabs rather than windows too, and so I get incredibly frustrated every time I try out Safari and get reminded that when right-clicking a link they put the option to open in a new window above the option to open in a new tab. This always catches me out and makes me feel like a moron when I wind up staring at a new window asking myself where all my tabs went.

I think it's always been this way for Chrome, as they got into the game much later. This means that if I right click, I only have to move my pointer one or two pixels and click again (which I can do without thinking) in order to get the link open in a new tab.

Firefox has come around too. I think this is a somewhat recently development though.

Some might say that moving your mouse a few extra pixels down shouldn't be a big issue, and they have a point. It's a small issue, but it's one that I have to think about every time (i.e. "have I moved my cursor far enough to highlight the new tab option yet?"), and that makes me not enjoy using the software as much. I guess what bugs me about this is that it's indicative of the understanding of how people browse the web these days and actually use their software. I'm going to go out on a limb and guess that tabs within one window is the way the majority of people do it, so browsers should realise this and change the UI priorities accordingly.

## Viewing Downloads

Firefox puts downloads into a separate window that I have to move around separately. I have to resize it and clear it and do all sorts of things I don't want to have to think about.

Safari has recently changed from the separate window approach to using a dedicated popover-style dropdown, which is kinda cool and moves with the window and so forth, however it still feels like it's in the wrong paradigm as far as solving the UI problem.

Chrome has worked out that we already have a way for managing multiple screens and windows in an easy to digest way: tabs. So, naturally, they put things like the download manager, preference panes, extension management — all into their own separate tabs that you can open, close (or pin!) like everything else. Way to re-use UI elements! I'm also presuming this makes the job of designing and implementing the actual contents of these windows easier on the developers too, as it means the contents can essentially just be developed using just HTML/CSS like any other tab's content.

## Status Bars

Safari makes the status bar either shown or not shown, and ignores the idea that it's appropriate to show it in certain contexts and then hide it at other times. Boring.

In Chrome and Firefox, the status bar appears when it makes sense (like when hovering over a link). It doesn't go full width, but just enough for the URL or message in questions. This seems like a much better solution that simply showing or hiding the status bar at all time. It's worth noting that this contextual status bar actually covers content in the bottom-left corner of the window that a user might actually need to see. If you move your cursor to the bottom-left corner near the status pane, Chrome promptly slides it outside the window so you can see what's underneath, and slides it back again once you move your mouse away. It feels like a really natural response.

In contrast to Chrome's nice treatment of this, Firefox abruptly swaps the status bar over to the bottom-right corner instead. This solves the problem, but in a much more jarring way from a UI perspective.

It's a really small aspect of the browser, but it's these details that tell volumes about which team of developers have thought more about my experience as a user, and which teams just did what was easy for them.

### Show me the damn close button

Close buttons on tabs are always visible in Chrome and Firefox, but Safari hides the close button for tabs, and forces you have to put your mouse over the favicon to reveal the close button. Why there? Who knows.


If there's one aspect of browser UI has always been a major point of frustration point for me, it's that closing 40 tabs quickly can either be a piece of cake or a major mood killer depending on which browser I'm in.

Chrome (and as of quite recently, Firefox) puts the close button of the next tab in the sequence directly under the mouse pointer so that you can close that tab without moving your cursor (and thus without thinking). It continues to do this until you move your mouse pointer **away** from the close button, then **and only then** does it proceed to resize all the tabs horizontally so they fit within the window's width. This is how all browsers should behave, without question.

Firefox seems to have caught on that this makes sense, but Safari still insists on being oh-so-helpful by resizing the tabs so they fit nicely horizontally after each close — meaning that I have to do the dreaded hunt-and-peck after each click until all 40 tabs are closed. Lame.

## Other nice touches in Chrome

Perhaps the most helpful thing Chrome allows me to do is to re-open recently closed tabs from a handy wee menu on the new tab screen. Not only does this bring back the tab just as it was, it also preserves the history state such that I can restore a tab and click 'back' to visit previous pages I'd visited **in that tab** before I closed it.

This has been really helpful on a number of occasions. On a recent excursion to try out Safari again, I accidentally closed a tab that I actually really needed to reopen, and it frustrated me so much it spelled the end of that excursion very promptly.

There's quite a few other things that Chrome does that I think make a lot of sense from a UI perspective. As I mentioned earlier, all of Chrome's settings, downloads, and other panes are all available shown in their own tab. What's cool about this is that they're also available via a URL (i.e. "chrome://downloads"), so if I really wanted to I could add a bookmark in my bookmarks bar.

# That's a wrap

There's plenty more I could probably go into, but for now I think that's a pretty good breakdown of the problems I've encountered in Safari and Firefox, and why I tend to keep coming back to Chrome as my browser of choice. Everything I've mentioned is a small enough problem for many to easily dismiss, but I believe it's these details are what make it a pleasure to use a piece of software rather than a chore.

## Follow Me on Twitter

Did you enjoy this article? [Follow me on Twitter](http://twitter.com/cobychapple) and let me know what you thought, or leave a comment below. Thanks for reading!

