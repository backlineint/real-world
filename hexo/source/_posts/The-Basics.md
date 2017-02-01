---
title: 2. The Basics
subtitle: Season 2 - Los Angeles
date: 2017-01-29 12:30:33
cover_index: /real-world/assets/los_angeles_index.jpg
tags:
---

To give us a baseline to discuss some common component theming challenges, we'll start with a simple baseline example.  Creating a card component seems to be the default example for some reason, so let's start with that.

## The Tools

* Main Pillars:
    * Drupal 8 (and Twig!)
    * The subtheme of your choice - I haven't been using any of the component theming starter kits, so these examples could apply to any custom subtheme. The examples here will use a subtheme of [Neato](https://www.drupal.org/project/neato) so we can easily build out [Refills](http://refills.bourbon.io/) components. I've taken a similar approach with [Zurb Foundation](https://www.drupal.org/project/zurb_foundation) subthemes on projects as well.
    * [Pattern Lab](http://patternlab.io/) - I'm pro KSS as well, but lately Pattern Lab has been functioning well as an early prototyping tool for us. We use the [Drupal Edition](https://github.com/pattern-lab/edition-php-drupal-standard) of Pattern Lab with the [Minimal Starter Kit](https://github.com/pattern-lab/starterkit-twig-drupal-minimal).
* Supporting Modules:
    * [Component Libraries](https://www.drupal.org/project/components) - we'll need more help as we expand on this example, but to start we'll only be using the Components module to define custom Twig Namespaces.

## Theme Structure

Within our custom subtheme we have three main sub directories that we'll be working in. 

![](theme_structure_1.png)

* pattern-lab - this is where we installed Pattern Lab and also where the public export of our pattern library will live.  Since this is within our theme, we can access the public version of pattern lab there. Pattern Lab git ignores the public directory by default, so ideally the pattern library will be created as part of a deploy process.
* source - by default, pattern lab looks for patterns and a number of other files here - these are all of the directories that are prefixed with an underscore.  I also have the bulk of the source for our theme live in this directory as well - additional scss, the compiled css, javascript, images. This is a bit of a break from convention from what I've seen in the community, but I think this makes sense if Drupal and Pattern Lab are sharing the same markup and code. Basically anything that both Drupal and Pattern use should live in a subdirectory of source.
* templates - this is Drupal's default templates directory. As we'll see, this will mainly contain presenter templates whose job is to map Drupal template suggestions to components in our pattern library.

Here's a closer look at the contents of the source directory, where the real magic happens:
 
![](theme_structure_2.png)

## Creating a Component

Now that we have the lay of the land, let's create our card component. Initially, we'll build this component in Pattern Lab.  Within the molecules subdirectory of _patterns, let's create a card directory to house everything our component needs.

![](component_dir.png)

card.twig contains the desired markup for our component.

{% gist 820bbc02154908ce5f191e2c704c0396 card.twig %}

And _card.scss contains all of the sass for the component.

You can see the full contents of this file in [this project's repository](https://github.com/backlineint/real-world), or in [a gist used for this chapter](https://gist.github.com/backlineint/820bbc02154908ce5f191e2c704c0396), but the most important thing here is the BEM structure for our component:

{% codeblock lang:scss _card.scss BEM structure %}
.card {
 
  // Rules for card block.

  &__image {

    // Rules for card elelment

  }

  &__header {
    
    // Rules for header element
    
  }

  &__copy {

    // Rules for copy element

  }

  &:focus,
  &:hover {
    
    // .card pseudo classes
    
  }

}

{% endcodeblock %}

This provides a nice structure that gives us the BEM classes expected in the markup for card.twig.

The SASS partial needs to be imported into our main scss file (either explicitly, or via sass globbing) so that it is compiled into our main css file.  This css file needs to be loaded by Pattern Lab (via _meta/_00-head.twig) and also added to a library used by your Drupal theme.

After defining some data to be used for our component, we'll see the following result in Pattern Lab:

![](pl_card.png)


## Mapping The Component to Drupal

Depending on the complexity of your component, I often find it helpful to start by exposing the prototype component in Drupal first.

Now that we see the same component from Pattern Lab in Drupal, let's map the actual data into the component.

## Recapping the Workflow

* Build it in pattern lab
* Get the pattern lab version in Drupal
* Map the Drupal version