---
title: 2. The Basics
subtitle: Season 2 - Los Angeles
date: 2017-01-29 12:30:33
cover_index: /real-world/assets/los_angeles_index.jpg
cover_detail: /real-world/assets/los_angeles_detail.jpg
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

Now that we have a card component in Pattern Lab, let's render it in Drupal. Sticking to the somewhat tangential theme we have going, we're going to be rendering Cast member profiles from the Real World reality show as cards to start. We've created a basic 'Cast' content type that currently only has the basics to render a card - title, body, and image fields.

We've also created a new 'Card' Display Mode. This provides an easy hook into rendering various content as cards.  We can enable this display mode for all of the content types we want to render as cards, configure which fields to display, and we also get a nice specific template suggestion - in this case node--cast--card.html.twig

### Rendering The Prototype

Depending on the complexity of your component, I often find it helpful to start by exposing the prototype component in Drupal first.  In your theme's templates directory, we'll the new node--cast--card.html.twig  This is a presenter template - it only serves to reference the component template from our pattern library and translate Drupal's data into the format that the pattern library component is expecting. Let's take a look at the Twig markup:

{% gist 820bbc02154908ce5f191e2c704c0396 node--cast--card.html.twig.prototype %}

Looking at the component parts, we first have the include statement:

    include "@molecules/card/card.twig"
    
[Twig's include statement](http://twig.sensiolabs.org/doc/2.x/tags/include.html) finds our card component template and returns the rendered content of that file to our current presenter template.  The @molecules portion of that path is a Twig namespace made possible by the Components module.  By default, templates can only live in the themes templates subdirectory, but these custom namespaces allow us to make Drupal aware of other paths. The are defined in your theme's info.yaml file. In our theme we've created namespaces for each of the main Patterns directories in Pattern Lab.

{% codeblock lang:yaml Twig namespaces as defined in neato_refills.yaml %}
# This section is used by the contrib module, Component Libraries. It allows you
# to reference .twig files in your sass/ directory by using the Twig namespace:
# @components
component-libraries:
  atoms:
    paths:
      - source/_patterns/00-atoms
  molecules:
    paths:
      - source/_patterns/01-molecules
  organisms:
    paths:
      - source/_patterns/02-organisms
  templates:
    paths:
      - source/_patterns/03-templates
  pages:
    paths:
      - source/_patterns/04-pages
{% endcodeblock %}

Getting back to our node--card--cast.html.twig template, our include statement also uses the with keyword. With allows us to explicitly define and map variables to our card component template.  

      with {
        "header": "A Card",
        "img_src": "https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png",
        "img_alt": "Card Image",
        "copy": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident."
      }

Since we're just looking to see the prototype component in Drupal, this is literally just the same data in the same format from the component's json file in pattern lab.

{% gist 820bbc02154908ce5f191e2c704c0396 card.json %}

Now, if we view a cast node in the card display mode, we'll see the same prototype component from Pattern Lab.

![](map_prototype.png)

### Rendering Drupal's Data

Now that we see the same component from Pattern Lab in Drupal, let's map the actual node data into the component.  Here we are just selecting from the variables available to the template, replacing that with the placeholder data from the template.  The end result is:

{% gist 820bbc02154908ce5f191e2c704c0396 node--cast--card.html.twig %}

Finding the right variables can be tricky, which is why I think it is useful to start with placeholders from the prototype and swap out values piecemeal. Debugging will help you here - we'll review some of the options later on.

The end result, we see our node data rendered in Drupal, using the card component from the Pattern Library.

![](map_drupal.png)

## Recapping the Workflow

As outlined above, when creating a new component I'll:

* Build the component as desired in Pattern Lab first.
* Stand the prototype component up in Drupal.
* Map the data objects one by one to the real thing in Drupal.

As you might imagine, this data mapping can get substantially more complicated than what we saw in this simple example. Next we'll look at some options to simplify that process.