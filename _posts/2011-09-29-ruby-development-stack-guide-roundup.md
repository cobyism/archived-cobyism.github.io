---
layout: post
title: Ruby Development Stack Guide Roundup
---

With the release of [OS X Lion](http://www.apple.com/macosx), a number of web developers seem to be facing fresh installs, and it appears many are taking the opportunity to re-evaluate their development stack. Recently, I've noticed a number of posts and tutorials floating around on the topic of how to set up a fresh development stack for web app development, mostly aimed at [Ruby on Rails](http://rubyonrails.org) developers. I thought I'd pull a few of these resources together, mostly for my own reference, but also in the hope it might help others out when faced with a blank install. It's also interesting to note how some of the more common tools people use in their stack are changing—one example being the shift from using [RVM](http://beginrescueend.com/rvm/install/) to [rbenv](https://github.com/sstephenson/rbenv) for Ruby version managment, which I'll talk about too.

<!--more-->

## Guides

Here's a few of the guides and write-ups I've come across recently.

- ### [Setting up a new machine for Ruby development](http://37signals.com/svn/posts/2998-setting-up-a-new-machine-for-ruby-development)
[37signals](http://37signals.com) are naturally very interested in optimising their development practices, so it is definitely worth nothing the post Rails creator [<acryonym title="David Heinemeier Hansson">DHH</acryonym>](http://david.heinemeierhansson.com/) published on SVN about the tools they currently use: [Homebrew](http://mxcl.github.com/homebrew/), [rbenv](https://github.com/sstephenson/rbenv) (with [ruby-build](https://github.com/sstephenson/ruby-build)), [Bundler](http://gembundler.com/), `rake setup`, and [Pow](http://pow.cx/).

- ### [2011 Rubyist’s guide to a Mac OS X development environment](http://robots.thoughtbot.com/post/8700977975/2011-rubyists-guide-to-a-mac-os-x-development)
In this article, Dan Croak of [Thoughtbot](http://thoughtbot.com) walks through how he goes about setting up an OS X Lion laptop to use the [OS X GCC installer](https://github.com/kennethreitz/osx-gcc-installer), SSH, dotfiles, Zsh, [Git](http://git-scm.com/), [Heroku](http://heroku.com), and Thoughbot's [laptop scripts](https://github.com/thoughtbot/laptop) (covered further below).

- ### [Modern Ruby Development](http://ascarter.net/2011/09/25/modern-ruby-development.html)
This write-up by [Andrew Carter](http://ascarter.net) provides another very detailed description of his stack of choice and a walkthrough for configuring Ruby and Rails applications. Andrew's stack includes Xcode 4, zsh, [Homebrew](http://mxcl.github.com/homebrew/), [rbenv](https://github.com/sstephenson/rbenv) (with [ruby-build](https://github.com/sstephenson/ruby-build)), [Bundler](http://gembundler.com/), [Pow](http://pow.cx/), [Capistrano](https://github.com/capistrano/capistrano), [Rails](http://rubyonrails.org), and [Git](http://git-scm.com/).

- ### [Rails Ultimate Install Guide on OS X Lion](http://eddorre.com/posts/rails-ultimate-install-guide-on-os-x-lion-using-rvm-homebrew-and-pow)
[Carlos Rodriguez](http://twitter.com/intent/user?screen_name=eddorre) walks through a full install of Xcode, [Homebrew](http://mxcl.github.com/homebrew/), [Git](http://git-scm.com/), zsh (with [Robby Russell](http://planetargon.com/who-we-are/robby-russell)'s fantastic [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) distribution), [RVM](http://beginrescueend.com/rvm/install/), MySQL, PostgreSQL, [Pow](http://pow.cx/), and a few other gems.

## Emerging trends

While reading through the above guides, there's a few trends you'll probably notice in the tools people seem to be chosing. Here's a few of the things I've noticed.

### Homebrew

Mac users are taking up [Homebrew](http://mxcl.github.com/homebrew/) left, right, and center&mdash;and rightly so. In case you haven't heard, Homebrew is a solution to package management for Mac OS X far superior to MacPorts and Fink. If you aren't using it, you're losing out.

### OSX GCC installer instead of Xcode

[Kennet Reitz](https://github.com/kennethreitz) has created a standalone [OSX GCC installer](https://github.com/kennethreitz/osx-gcc-installer) as a solution to the problem of having to install Xcode just to get the compilers on your system. This saves a massive amount of money, time and effort for anyone who needs to compile software, but doesn't need or want to pay for and download Xcode. I haven't used this myself yet, as I've got Xcode 4 on my system, but the project looks like a great solution to a problem many people face.

### rbenv and ruby-build instead of RVM

[Sam Stephenson](http://sstephenson.us/) from [37signals](http://37signals.com) created [rbenv](https://github.com/sstephenson/rbenv) as an alternative to RVM for managing different versions of Ruby on one system. It provides the same sandboxing functionality as RVM, but is far less complex, obtrusive, and doesn't override core system commands like RVM does. Sam also has another project called [ruby-build](https://github.com/sstephenson/ruby-build), which makes it easy to download, compile, and install different versions of ruby. When these two tools are used together, they feel much more intuitive than RVM.

To me, RVM feels like a tool people use just because that's what people have used in the past, and I think that is a silly reason to use anything. I've been using the rbenv/ruby-build configuration instead of RVM for a while now, and while I'm not a hardcore user of all the functionality they provide, I really do appreciate the simlicity of the tools. Heaps of people still use RVM, and there's clearly a good community around that tool, but my prediction is more and more people will start switching to rbenv before long.

### Pow

[Pow](http://pow.cx) is a brilliant lightweight Rack server created by [37signals](http://37signals.com), which can be up and running very quickly. It lets you run all your development applications at their own `.dev` url (e.g. `http://testapp.dev/`), with indpendant worker processes letting you server multiple apps simultaneously without running `rails server`. It's just a simple one-liner to install, too, which is always attractive. It seems to be the development server of choice for many developers, so it's definitely worth a look if you haven't seen it yet.

### Zsh and oh-my-zsh

OS X uses bash as the default shell, but also comes with zsh installed and available as an alternative. Zsh can be a bit confusing (I haven't really taken the time to get my head around it), but to get up and running quickly I'd recommend checking out [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), a zsh distribution put together by [Robby Russell](http://planetargon.com/who-we-are/robby-russell), that comes with a whole bunch of great plugins, themes, and helpful scripts to make it easy to get started using zsh. While not necessarily part of the development stack, I'm noticing quite a few developers mentioning that they use zsh as their shell of choice.

## Tools and scripts

In addition to the guides, I've also come across a couple of interesting projects which aim to help automate the process of getting a development stack up and running without fuss.

### Thoughtbot's Laptop Script

As I mentioned before, [Thoughtbot](http://thoughtbot.com/) have put together [some scripts on GitHub](https://github.com/thoughtbot/laptop) which aim to automate the process of installing a Ruby/Rails focused development environment on either a Mac <del>or Ubuntu</del> laptop. Here's what the script installs on a Mac (quoted from Dan Croak's guide above):

- Homebrew (for managing operating system libraries)
- Postgres (for storing relational data)
- Redis (for storing key-value data)
- Ack (for finding things in files)
- Tmux (for saving project state and switching between projects)
- ImageMagick (for cropping and resizing images)
- RVM (for managing versions of the Ruby programming language)
- Ruby 1.9.2 stable (for writing general-purpose code)
- Bundler gem (for managing Ruby libraries)
- Rails gem (for writing web applications)
- Heroku gem (for interacting with the Heroku API)
- Taps gem (for pushing and pulling SQL databases between environments)
- Postgres gem (for making Ruby talk to SQL databases)

Thoughtbot use these scripts at their workshops to help people get set up en-masse, so while the stack it includes is very specific, and may not be what everyone is after, it's clearly battle tested. When I get time, I'd like to create a fork of this which uses rbenv/ruby-build instead of RVM, and a few other tweaks I have in mind.

### Cinderella

[Cinderella](http://www.atmos.org/cinderella/), by Corey Donohoe is a "fully managed development environment for open source hacking on Mac OSX". It uses a combination of Homebrew and [Chef](http://wiki.opscode.com/display/chef/Home) to give you:

- MySQL, PostgreSQL, Redis, Solr, memcached and MongoDB
- Ruby (via rbenv).
- Python with pip.
- Node.js with npm.
- Erlang.

I haven't used it myself, but it seems like a very simple, straight-forward way to get a functional stack installed. Also, this is obviously better if you're looking for a Python, Node.js, or Erlang stack, as the Thoughtbot script above doesn't include any of those technologies.

## Summary

If you haven't thought about your development stack for a while, there are so many great new tools around that you'd be silly not to consider having a look at what your options are. I plan on eventually putting together my own laptop script (probably as a fork of thoughtbot's ones) for use in future upgrades, but for now all the tools seem to be pretty painless to install on their own, or using tools like Homebrew. I'd say the tools and stacks available are only going to get better with time&mdash;which is really exciting, because they're great already.
