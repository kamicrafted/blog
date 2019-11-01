---
heroImage: '/images/191030-ctrl.jpg'
title: Photo Test
date: 2000-10-30 14:49:42
excerpt: Learn how to customize and configure a CTRL keyboard
type: post
blog: true
tags:
  - General
  - Mechanical Keyboards
photoset:
  - url: '/images/191030-configurator.jpg'
    alt: 'a photo'
    caption: ''
    style: 'fullwidth'
  - url: '/images/191030-ctrl.jpg'
    alt: 'a photo'
    caption: 'This is a caption.'
    style: 'halfwidth'
  - url: '/images/191030-ctrl.jpg'
    alt: 'a photo'
    caption: 'This is a caption.'
    style: 'halfwidth'
  - url: '/images/191030-configurator.jpg'
    alt: 'a photo'
    caption: ''
    style: 'fullwidth'
  - url: '/images/191030-configurator.jpg'
    alt: 'a photo'
    caption: ''
    style: 'thirdwidth'
  - url: '/images/191030-configurator.jpg'
    alt: 'a photo'
    caption: ''
    style: 'thirdwidth'
  - url: '/images/191030-configurator.jpg'
    alt: 'a photo'
    caption: ''
    style: 'thirdwidth'
    
---

## Gallery Test
<PhotoGallery :gallery="$page.frontmatter.photoset" /> 

## Single Photo Test
<zoom-image
  class="zoom"
  src="/images/191030-configurator.jpg"
  alt="Configurator Screenshot"
  title="Configurator Screenshot"
/>