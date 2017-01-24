---
title: 1.Introduction
date: 2017-01-31 12:30:33
tags:
---

## Section Outline:

* Component based design systems aren't new to Drupal.
    * Approach was Drupal-centric.  What can Drupal offer to help us build an efficient design system?
* Meanwhile, tools to generate living style guides and pattern libraries emerged.
    * How can I build an efficient design system regardless of the CMS?
* Drupal 8 Adopts Twig.
    * Eventually so do popular pattern library generators.
    * Twig ends up being the bridge between Drupal and Pattern Library tools. 
    * We can build the component first, and then map to Drupal.
* We've gotten our first taste of an style guide driven theming workflow. *But now what?*
    
While it is experiencing a continued surge in popularity in the Drupal community, component based design systems are nothing new.  Prior to Drupal 8 people were using component friendly modules like Display Suite, Views, Panels, Paragraphs and more to create templates that can be styled and re-used in efficient ways.

A few key things did change as people were developing design systems in previous versions of Drupal.  One is the emergence of tools to generate living style guides and pattern libraries.  Developers could now document their existing design system in an external style guide.  Alternatively, they could develop their design system in an external pattern library that could then be applied to their application or site.

Drupal 8 also adopted the Twig templating engine which provided some new tools for themers and provided a cleaner separation between logic and display. Potentially influenced by Drupal's adoption, style guide tools like KSS and Pattern Lab began providing options to use the Twig templating engine as well.

Prior to Twig, using Drupal with a pattern library would typically require some duplication of markup between the pattern library and the CMS. Beyond the duplication of effort, this opened the door to divergences between the style guide and the CMS.  But now with Drupal and many pattern library tools both using Twig, efforts began in the community to find ways for both to share the exact same markup and css. Low and behold, DrupalCon New Orleans found a handful of sessions and BOFs outlining mutliple solutions for this problem.

Following New Orleans I'm not alone in taking these methods beyond proof of concept and applying them to larger projects. However, what I haven't seen enough of is the sharing of the challenges that come with taking this component based theming approach beyond proof of concept. I hope that in documenting these challenges I can further streamline the component based theming process for other Drupal 8 developers in addition to influencing the discussion on where we'd like to take component theming efforts in Drupal 8 going forward.