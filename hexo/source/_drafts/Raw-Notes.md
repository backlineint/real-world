---
title: Raw Notes
tags:
---

## Section 1 - How did we get here?

* Alt titles: Introduction. Orgins.
* Do I need the hero?
* Should I go with city photos or cast photos?

## Section 2 - The Basics

Section Outline:
* Our tools:
    * Main Pillars: Drupal 8, Theme of Your Choice (Zurb Foundation), Pattern Lab
    * Supporting Modules: Components
* Theme Structure:
    * All theme source lives in theme_name/source - patterns, scss, js, compiled css.
    * One exception is presenter templates - they live outside of source in theme_name/templates (also layouts for page manager layouts)
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
* Not using a Drupal Pattern Lab Starter Kit Theme

## Section 3 - Streamlining the Process

* I went way overboard in mapping in Twig Templates - don't be like me.
* Maybe this needs to be broken out into different sections - streamlining the process / mapping just the date you need...
* Maybe something about tests here?
* Something about dev team challenges and preprocessing possibly.
* Twig Tweak: https://www.drupal.org/project/twig_tweak

## Section 4

## Section 5 - Component Friendly Content Editing

* All plays nicely with panels IPE.

Dos:
* Keep things at the component level - field are paragraphs, not individual standalone fields.

Editing Challenges:
* Paragraphs on the node move as a single block even when containing mutliple paragraphs.
* Paragraphs on the node must be edited on the node edit form, not the IPE.
* Blocks (even with paragraphs) can be nicely edited using quickedit.

## Section 6

## General

Running Todo List:
* Try to set up composer Drupal install.

Notes:
* Until supporting drupal codebase exists, create supporting gists for code samples.
* Note: Initial cover images should be the towns from the real world seasons.

## Example
    This is preformatted text.