---
layout: article
---

# Gridism—a simple, memorable grid&nbsp;framework.

I’ve used a wide variety of grid frameworks on different projects, but none of
them have been a very good match for the way I like to design and write markup.
[Gridism](http://cobyism/gridism) is a framework I’ve created to be a better
match for me in this regard.

## How I design layouts

When I design web layouts, my thought process usually goes something like this:

> Alright, in this section, I want a bit that’s one third of the section’s
> width, and then next to that I want another bit that’s two thirds of the
> sections’s width. Now, in the next section…

I don’t think in 12 or 16 column grids. Instead, my mental model basically just
consists of the page being divided up into multiple full-width vertical
sections, and each vertical section being divided up into simple fractions of
the section width.

## How most frameworks work

Most frameworks I’ve used don’t match that thought process *at all*. I usually have to:

1. Remember how many columns are in the grid for the particular framework I’m using.
1. Decide how I want to divide up this particular section’s content.
1. Mentally do the conversion from what I want to see (one quarter + three
quarters, for example) into the number of columns I need for the grid I’m using.
1. Remember the class naming structure for the framework I’m using. Is it
`.span3`, `.grid_3`, `.col-3`, or something else altogether?
1. Deal with other hassles like clearing floats, messing with column padding to
have the gutters look right, indicating which elements are the first in a row, and so forth.

Only the second step should be necessary.

## Goals for Gridism

I couldn’t find a framework that matched this mental model of how I work, so I
created [Gridism](http://cobyism.com/gridism) and started hacking on it with
the following goals:

- Class names should be memorable and self-evident.
- Gutters and basic content padding should be taken care of.
- Clearing floats should be done automatically.
- Wrapped grid sections should be independant of vertical page sections.
- Frequently required utility classes should be provided.
- Common patterns for Responsive Design™ should be built-in.

I hope you find that this project is living up to those goals. If not, please
[create an issue](https://github.com/cobyism/gridism/issues/new) and let me know.

##
