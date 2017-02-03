---
title: 1. How Did We Get Here?
subtitle: Season 1 - New York
date: 2017-01-31 12:30:33
cover_index: /real-world/assets/new_york_index.jpg
cover_detail: /real-world//assets/new_york_detail.jpg
tags:
---

## Component Based Design Systems Aren't New To Drupal

While it is experiencing a continued surge in popularity in the Drupal community, component based design systems are nothing new.  Prior to Drupal 8 developers were building intelligently re-usable templates and using component friendly modules like [Display Suite](https://www.drupal.org/project/ds), [Views](https://www.drupal.org/project/views), [Panels](https://www.drupal.org/project/panels), [Paragraphs](https://www.drupal.org/project/paragraphs) and more to help implement their design systems.

## Key Developments

Of course, a few key things did change as people were developing design systems in previous versions of Drupal.  One is the emergence of tools like [KSS](https://github.com/kss-node/kss-node) and [Pattern Lab](http://patternlab.io/) to generate living style guides and pattern libraries.  Developers could now document their existing design system in an external style guide or pattern library. It also made it easier to develop their design system first in an external pattern library and then apply it to their application or site.

Drupal 8 also adopted the Twig templating engine which provided some new tools for themers and provided a cleaner separation between logic and display. Potentially influenced by Drupal's adoption, style guide tools like KSS and Pattern Lab began providing options to use the Twig templating engine as well.

## Single Source of Truth

Prior to Twig, using Drupal with a pattern library would typically require some duplication of markup between the pattern library and the CMS. Beyond the duplication of effort, this opened the door to divergences between the style guide and the CMS.  But now with Drupal and many pattern library tools both using Twig, efforts began in the community to find ways for both to share the exact same markup and css. Low and behold, DrupalCon New Orleans found a handful of sessions and BOFs outlining mutliple solutions for this problem.

## So now what?

Following New Orleans I'm not alone in taking these methods beyond proof of concept and applying them to larger projects. However, what I haven't seen enough of is the sharing of the challenges that come with taking this component based theming approach beyond proof of concept. This site aims to document these challenges through a series of examples. Hopefully this can save a few headaches and also inform the discussion about the future of component based theming in Drupal 8. First up, let's take a look at the basics of this process. 