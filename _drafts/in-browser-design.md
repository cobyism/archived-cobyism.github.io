---
layout: post
title: In-browser design
---

# In-browser design

After [giving a talk](https://speakerdeck.com/cobyism/design-in-the-realm-of-open-source) at
[Refresh](http://refreshbelfast.org/) not that long ago, I’ve had a number of
conversations with people about some of the things I touched on in my talk—one common topic people
ask me about is the whole "design in the browser" issue, so I’d like to articulate some of my 
thoughts on the matter here.

## Adoption of in-browser tools and workflows

I think in-browser design is definitely on its way to becoming commonplace, especially with the improvements in the pipeline in terms of what’s possible within browser’s developer tools (source-map support for Sass, CoffeeScript and so forth). It’s not catching on as quickly as I feel it should be though (given the benefits I feel it has), and honestly I feel like that’s simply because it’s hard for people to drop the tools they know and love cold-turkey. It can take a while to adjust to new tools and workflows, and to be able to afford the time in-between where you just have to accept that you won’t be as productive as usual is a difficult thing to accept. I think what will speed up the adoption of these types of workflows is when people can gradually bring small parts of the in-browser workflow into their existing tools—things like exporting the CSS attributes from an object in a visual design tool (like you can do with [Sketch](http://www.bohemiancoding.com/sketch/)), and [live-reload](http://livereload.com/) style tools are great examples of improvements that will make transitioning more productive.

## Why design in the browser?

As I see it, the key advantages are as follows:

- You can interact with WIP designs in the browser. You can’t interact with a photo of a website you’ve designed in Photoshop. This allows you to actually pay attention to the subtlety of interactions, transitions, and performance considerations of a design as you build it, rather than thinking of these things as an afterthought.

- Designing in the browser forces you to think about things in a more sane order. If you start your design from a blank canvas and are immediately thinking about “pixel-perfection” level details of the first element you draw, you’ll spend much less time thinking about the higher level aspects of a design like information architecture, layout considerations, and so forth. When you start your designs in markup, you almost have to think about layout and document structure before you think about what your buttons are going to look like, and I think that results in a better end product.

- When you design a web interface in a visual tool, you have no choice but to have an extra secondary step of taking that design and actually coding it up in HTML/CSS after it’s finished. When you factor in the amount of time it takes to complete both of these phases, I believe it actually takes a shorter amount of time to design in the browser instead, because you don’t ever have to reimplement your design—it’s already in the format it’s going to live in.

- Similar to the above point, a problem of using a visual tool to design interfaces that live in code somewhere else is that you’re effectively maintaining two versions of the same interface, and it’s really easy for them to get out of sync with each other. Changes and bugfixes made in production code that affect your design don’t automatically get updated in the saved visual file, and any changes you subsequently make to a design in a visual tool will need to be reimplemented in code again too. This effectively doubles the amount of work required to maintain a design over a long period of time. When you design in the browser, the code is the design, so it’s simply not possible for the design to be out of sync with the implementation in any way.

- Visual design tools don’t encourage collaboration, but code is easy to collaborate on. If your designs are all done in proprietary programs with no functionality for collaboration, then it’s unavoidably going to affect the ability of your teams to work together on designs. Code on the other hand isn’t a proprietary program. With version control tools, functionality like merging changes from multiple people working on the same set of files are literally built into the system, so if you can do your design work in code you instantly open up doors to collaboration on design to everyone in the team. This increases visibility into the design process, and encourages more discussion across disciplines within teams, which can only be a good thing.

## In-browser design and "client" workflows

At GitHub, we’re a product company, and don’t have “clients” in the same sense that many design studios and freelancers do. From my past personal experience as a freelancer though, I’d say that really what most clients want is to see projects become real things as fast as possible, and they don’t really mind what tools or workflow you use. I think clients are very comfortable being shown mockups of designs before the real thing exists, but a lot of the time I think that’s just because that’s how it’s worked for so long. I believe that if you could invite a client into your office, and show them working prototypes and mockups in a browser that you can interact with, they’d be more impressed and feel happier about the progress you’re making on the project than they would be if you’d shown them “pixel-perfect” photos of their website printed out on paper for them to approve. Regardless of whether you do client work or product work though, I believe that the closer you can be to the real, finished product, the better your feedback process will be.
