---
title: GitHub Flow for Heroku with Pull Request Apps
layout: post
---

[Heroku](http://heroku.com) recently announced a public beta of a feature I’m really excited about, and that’s [Pull Request Apps](https://devcenter.heroku.com/articles/github-integration-pull-request-apps).

![Heroku Pull Request Apps example](http://f.cl.ly/items/2Q1J3j3w40201S2J083V/2015-05-17%20at%203.35%20pm.png)

When you’re making changes to any codebase, it’s hugely important to see the diff and discuss the change before merging. That’s the whole premise of [GitHub Flow](https://github.com/blog/1557-github-flow-in-the-browser), and it’s why GitHub’s pull requests have had such a huge impact in the open source community. For many changes, seeing the diff is sufficient, but often, especially if there’s changes to the UI or interactions that aren’t easily testable from a CI standpoint, it becomes necessary for anyone reviewing a pull request to pull the branch down locally to their laptop and fire up the development environment in order to verify the change works as expected.

That’s fine as a workflow, but as soon as someone needs to  review the change that doesn’t have their development environment set up—perhaps they’re on another team, or are maybe browsing from a mobile device—then they have to either ask someone to post screenshots of the changes, or ask the team to wait, which can block momentum. This is why staging environments are helpful in many situations, but if you use Heroku to host your applications, then having to push your branch to a second "staging" remote manually each time you want to preview a change in an environment that mirrors your production setup can be a real pain. Not only is it a hassle logistically, but it essentially also requires everyone on the team to be comfortable with both the command line and the deployment process. Many people simply don’t have that technical expertise.

This is where Heroku’s new [Pull Request Apps](https://devcenter.heroku.com/articles/github-integration-pull-request-apps) feature comes in.

## How it works

![Heroku Pull Request Apps configuration](http://f.cl.ly/items/2Q0b29332E2I243o1N3G/2015-05-17%20at%203.30%20pm.png)

The way Pull Request Apps work is as simple. When you enable it in your dashboard, Heroku sets up a [webhook](https://developer.github.com/webhooks/) on your chosen GitHub repository, which gets triggered each time a pull request is created (or updated with new commits). Heroku then pulls the latest code from that pull request’s branch, and uses the [`app.json` file](https://devcenter.heroku.com/articles/app-json-schema) in your repository’s root directory to configure a new, temporary Heroku application with the environment and resources it needs to run. When it’s up and running, Heroku updates the pull request on GitHub with a deployment event (using our [Deployments API](https://developer.github.com/v3/repos/deployments/), containing a clickable link that takes you to the URL of the temporary Heroku application.

![Heroku Pull Request App Deployed!](http://f.cl.ly/items/0E1e3w060G2b422d0j0u/2015-05-17%20at%203.46%20pm.png)

As an example, check out [the pull request](https://github.com/cobyism/cobyism.github.io/pull/7) I opened to add this post to my blog (meta, right?). While the version of my site you’re reading now is hosted with [GitHub Pages](https://pages.github.com/), I also have a Heroku application set up to mirror the site, and it’s configured so that a Pull Request app is created anytime a PR is opened on the GitHub repository. So, as you can see, Heroku spun up an app called `cobyism-com-pr-7.herokuapp.com` and updated the PR with a link for me to click through. Neat, huh!

## Why this is awesome

This new feature is particularly great for testing design and interaction changes. Screenshots are all well and good, and seeing a diff of the code is great, but being able to fire up the new version of your app *there and then* in your browser to click through everything yourself takes visualising a change to a whole other level. Even for people working solo on a project (e.g. for many of my own private projects), being able to spin up a Heroku app with my changes is a huge help in terms of giving me confidence that the changes I’m making will have the intended result when merged and deployed to production on Heroku.

People have come up with ways to make similar functionality possible in the past (e.g. using [Fourchette](https://blog.rainforestqa.com/2014-07-28-fourchette-isolated-testing-environment/), or perhaps something along the lines of LayerVault’s [Divergence](https://github.com/layervault/divergence) for teams that aren’t running on Heroku), but it’s really a lot of overhead to set up that functionality and maintain over time, so the fact that this is being built into Heroku’s functionality as standard sets the bar really high for other platforms to compete with.

Integrations like this with GitHub, when taken in combination with other functionality Heroku have recently been rolling out (such as the totally awesome "Deploy to Heroku" button—see my [Ghost On Heroku](https://github.com/cobyism/ghost-on-heroku) project for a demo), paint a really incredible picture of the direction Heroku’s platform is heading. While Heroku might not be for everyone, anybody building web-based products who doesn’t want to spend their time and hassle managing their own servers and debugging their deployment processes should seriously consider just choosing Heroku and being done with it.

## Try it out for yourself

To try Pull Request Apps out yourself, check out Heroku’s [dev center article on the feature](https://devcenter.heroku.com/articles/github-integration-pull-request-apps), and also have a read of their [general GitHub integration article](https://devcenter.heroku.com/articles/github-integration) too. If you’re the kind of person who’s into this kind of stuff, I also highly recommend signing up for Heroku’s [private beta program](https://beta.heroku.com/), through which you can find out about the odd new feature like this as they get rolled out.