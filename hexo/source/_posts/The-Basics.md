---
title: 2. The Basics
date: 2017-01-29 12:30:33
tags:
---

Section Outline:
* Our tools:
    * Main Pillars: Drupal 8, Zurb Foundation, Pattern Lab
    * Supporting Modules: Components, Twig Field Value, Panels/Page Manager, Paragraphs
* Theme Structure:
    * All theme source lives in theme_name/source - patterns, scss, js, compiled css.
    * One exception is presenter templates - they live outside of source in theme_name/templates (also layouts for page manager layouts)
    * Gulp tasks for different jobs - pattern lab work, vs Drupal, vs build only vs all.
* An example component:
    * Entire component lives in patterns folder - sass, js, twig.
    * Look at example BEM structure.
    * New Sass partials are added to main scss build.
    * JS is added to pattern lab and uses Drupal components.
    * Drupal templates map to pattern using twig namespace and twig field value.
* Workflow:
    * Build component in Pattern Lab first.

Notes:
* Everyone builds a card component for some reason, so let's do that.
* What is the easiest way to spin up an example card?  Probably still neato refills.
* In a the future / in a perfect world, Pattern Lab would be an external submodule that could completely live on its own.