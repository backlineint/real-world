---
title: 4. Drawing The Line
date: 2017-01-25 12:32:53
tags:
---

## Section Outline:

* So how far should we really be going in order to break things into components and keep Drupal and Pattern Library using the same markup?
    * Atoms - The smallest global elements. Don't include / embed.  Represent in pattetn lab in low-effort way.  Make sure styles apply globally when used elsewhere.
    * Organisms, Molecules - Create components, and make the effort to align Drupal with Pattern Lab.
    * Templates - Only 'middle of the page' things.  Views. Layouts.  Focus on the things that are re-usable.
    * Pages - generally not worth the effort to port to Pattern Lab. But re-usable extendable templates in Drupal are a good idea.
    * Other exceptions - Views exposed forms.
        * Altering forms to add BEM classes might be enough.  100% perfect/identical markup isn't worth the effort.
* Testing
    * Test the pattern library as a low effort way to have coverage.