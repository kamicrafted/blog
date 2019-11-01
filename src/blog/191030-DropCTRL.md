---
heroImage: '/images/191030-ctrl.jpg'
title: Configuring the Massdrop CTRL Keyboard
date: 2019-10-30 14:49:42
excerpt: Learn how to customize and configure a CTRL keyboard
type: post
blog: true
tags:
  - General
  - Mechanical Keyboards

---

## Installing mdloader

First, we'll need to grab `mdloader_mac` which is the macOS version of mdloader, as well as `applet-flash-samd51j18a.bin` from [here](https://github.com/Massdrop/mdloader/releases/tag/1.0.3).

Once both files are downloaded, we'll need to put them both in the same folder (I've placed mine in `~/Massdrop/`).

Next, open up Terminal and run the following command to make the file executable:

``` bash
chmod u+x mdloader_mac
```

## Using the Drop QMK Configurator

Next, we'll need to go to the web [Configurator](https://drop.com/mechanical-keyboards/configurator/preset/ctrl--default) and select Default CTRL to get started.


<zoom-image
  class="zoom"
  src="/images/191030-configurator.jpg"
  alt="Configurator Screenshot"
  title="Configurator Screenshot"
/>

Using the Configurator, we can start modifying the keyboard configuration to suit our preferences. Once changes have been made, click the "Compile & Download" button. This will build and download a bin file. Move this file over to the folder containing `mdloader_mac` that we created before.

<zoom-image
  class="zoom"
  src="/images/191030-configurator2.jpg"
  alt="Configurator Screenshot"
  title="Configurator Screenshot"
/>

## Flashing the CTRL keyboard

Plug in your keyboard and change directory to the folder with your files in Terminal. Next, run the following command (where [FILE_NAME] is the name of the bin file that was downloaded from the Configurator):

```bash
./mdloader_mac --first --download [FILE_NAME] --restart 
```

This will auto-detect the first available keyboard to flash for 60 seconds. Immediately after running the above command, use a toothpick or pin to press the reset button located below the keyboard and the LEDs will turn off. If successful, the keyboard will flash and reboot with the following output:

```bash
Massdrop Loader 1.03

Massdrop Loader  Copyright (C) 2018  Massdrop Inc.
This program is Free Software and has ABSOLUTELY NO WARRANTY

Scanning for device for 60 seconds
..........................................
Device port: /dev/cu.usbmodem14124201 (SAMD51J18A)

Opening port '/dev/cu.usbmodem14124201'... Success!
Found MCU: SAMD51J18A
Bootloader version: v2.20 Mar 27 2019 10:04:47 [ctrl]
Applet file: applet-flash-samd51j18a.bin
Applet Version: 1
Writing firmware... Complete!
Booting device... Success!
Closing port... Success!
```

One last thing I like to do is to take screenshots of the keymap from the web Configurator to have something to reference in case I forget the customized mapping.