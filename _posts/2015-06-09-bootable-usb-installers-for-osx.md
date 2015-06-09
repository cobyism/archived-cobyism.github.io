---
title: Creating bootable USB Installers for OS X
layout: post
---

At yesterday’s WWDC event, Apple announced the that next release of OS X, version 10.11, will be called "[El Capitan](http://www.apple.com/osx/elcapitan-preview/)", and made a developer beta version of the OS available for download via their [Apple Developer Program](http://developer.apple.com/). I’m itching to try it out, and I’m sure you are too, so I thought I’d write up a guide to walk you through how to create a bootable USB installer.

<div class="book-teaser">
  <a href="http://cobyism.com/remotejobseeker" target="_blank"><img src="http://cobyism.com/remotejobseeker/public/cover.png" width="60px" class="book-cover"></a>
  <strong>Psst!</strong> Ever wanted to work remotely? Check out this ebook I’m putting together called the <a href="http://cobyism.com/remotejobseeker" target="_blank">Remote Jobseeker’s Handbook &raquo;</a>
</div>

## Preparation

Here’s what you’re going to need:

- A suitable USB drive. It will need to be 8GB minimum, and it will be **completely erased** as part of this process, so if you’ve got anything on it already make sure you back up the contents somewhere first.

- The "Install OS X 10.11 Developer Beta.app" installer application. To get this, you’ll need an Apple Developer Program account with access to the [beta release download](https://developer.apple.com/osx/download/). There’s probably other ways you could obtain this too, but I don’t condone doing anything shady.

- About 5 to 10 minutes to create the installer. The installation process on the target machine will probably take much longer.

It’s not required, but for simplicity’s sake I like to manually erase the USB drive myself using Disk Utility beforehand, so that I can be sure which drive it is I’m erasing. If you do this using the default settings, you should wind up with a blank drive mounted at `/Volumes/Untitled`. If your USB drive’s volume is called something else, you’ll need to substitute the correct volume name when running the commands below.

Also, note that this is a Developer Beta version of OS X. It’s probably **not a good idea** to blindly install this on your primary machine, or you could be stuck with buggy software until a more stable release becomes available. I usually install beta versions of OS X on an older spare macbook.

## Creating a bootable installer

You could use a program like [DiskMaker X](http://diskmakerx.com/) to create a bootable installer disk for you really easily, but the downside is that you often have to wait for the program to be updated in order to support the latest version of OS X. Most people don’t realise this, but it’s actually really easy to create a bootable installer using the `createinstallmedia` command supplied as part of all OS X installer images since Mavericks.

The command lives under the `/Content/Resources` path of the installer image, so presuming you have an installer image for the OS X 10.11 Developer Beta sitting in your `/Applications` directory, you can run the command as follows to see its usage instructions:

```sh
/Applications/Install\ OS\ X\ 10.11\ Developer\ Beta.app/Contents/Resources/createinstallmedia
Usage: createinstallmedia --volume <path to volume to convert> --applicationpath <path to Install OS X 10.11 Developer Beta.app> [--force]

Arguments--volume, A path to a volume that can be unmounted and erased to create the install media.
--applicationpath, A path to copy of the OS installer application to create the bootable media from.
--nointeraction, Erase the disk pointed to by volume without prompting for confirmation.

Example: createinstallmedia --volume /Volumes/Untitled --applicationpath "/Applications/Install OS X 10.11 Developer Beta.app"

This tool must be run as root.
```

So, with the USB volume ready to go, we simply need to run the following command to create the bootable installer:

```
sudo /Applications/Install\ OS\ X\ 10.11\ Developer\ Beta.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ OS\ X\ 10.11\ Developer\ Beta.app --nointeraction
```

It should take between 5 to 10 minutes to complete, and you should see the following output:

```sh
Erasing Disk: 0%... 10%... 20%... 30%...100%...
Copying installer files to disk...
Copy complete.
Making disk bootable...
Copying boot files...
Copy complete.
Done.
```

Congratulations! You’re now the proud owner of a bootable USB installer for the developer beta of OS X 10.11 El Capitan.

## Booting from the USB installer

To boot from the installer, reboot your Mac and hold down the <kbd>⌥ option</kbd> key, and it will let you choose to boot from the USB disk instead of the built-in hard drive. Once the installer loads, you can either install El Capitan over the top of whatever you currently have installed, or you can use the Disk Utility to erase the built-in hard drive first and do a fresh install.

## Future versions of OS X

The `createinstallmedia` command was introduced with Mavericks, and there’s even some [official documentation](https://support.apple.com/en-gb/HT201372) referencing the command, so it seems like this should be a reliable way to create installation media for any future release of OS X too, whether pre-release or stable. If this changes, and you notice before I do, let me know!
