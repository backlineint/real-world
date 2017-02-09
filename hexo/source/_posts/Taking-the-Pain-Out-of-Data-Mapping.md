---
title: 3. Taking the Pain Out of Data Mapping
subtitle: Season 3 - San Francisco
date: 2017-01-27 21:30:36
cover_index: /real-world/assets/san_francisco_index.jpg
cover_detail: /real-world/assets/san_francisco_detail.jpg
tags:
---

Even with our simple card example, one could imagine that the mappings between Drupal and components in your component library could get somewhat complicated. Thankfully, a handful of supporting modules are already available to simplify this process and help you pass only the necessary data to your components, without extraneous markup.

Let's re-work our card component with the aid of these supporting modules.

## Twig Field Value

The [Twig Field Value](https://www.drupal.org/project/twig_field_value) module provides additional Twig filters to get partial data from field render arrays.  It makes the following twig filters available to you:

* field_label : Returns the field label value.
* field_value : Returns the render array of the field value(s) without the field wrappers.
* field_raw: Returns raw field properties value(s).
* field_target_entity: Returns the referenced entity object(s) of an entity reference field.

### Additional Considerations

Use of this module does come with a few additional considerations however. As you gain even more control over the data and markup used to render your components, it becomes more likely that you might strip out things that functionality like quicklinks, quickedit or the panels in place editor depend on.

The second consideration is related to caching.  From the module's documentation:

{% blockquote 'Twig Field Value' https://www.drupal.org/project/twig_field_value Docs %}
The field_raw and field_target_entity filters do not provide any cache information. Without additional measures content printed with these filters will not be updated when changed in the backend. You can workaround this by rendering the field in your template but not display the result. For example:  set catch_cache = content.field_image|render 
{% endblockquote %}

This workaround does the job, but it would be nice if a more automated option would be possible in the future.

### Mapping Using Twig Field Value

Considerations out of the way, let's see Twig Field Value on its feet. Using Twig field value, we can streamline our card template into the following:

{% gist b1bc46316c47c90d0171682fdcc2e165 node--cast--card.html.twig %}

Our include statement is similar, but field_target_entity and field_raw make it easier to get at the image related data that we need, and the field_value filter gives us the field values we need with less additional markup.  

Since we're using field_target_entity and field_raw, we're also adding the following line at the top of our template to work around Twig Field Value's caching limitations:

`set catch_cache = content.field_image|render`

There is quite a bit more that can be done with the field_target_entity filter.  For example, once you've referenced the target entity, you can access field values on it just as you would fields on the original node:

{% gist 9687354d0ba6a09ac645e8dbe87add2d node--physician--card.html.twig %}

After defining the practice variable that contains the results of field_target_entity for a field, we can reference fields on that entity using notation like practice.field_practice_name.value  It can be pretty useful.

## Preprocessing vs Twig Manipulation

We've really only looked at a few examples of how we can manipulate data in our twig templates and map that to our pattern library components, but the further this component based approach is taken, the more complicated it may become. Eventually you'll probably end up asking yourself how much of this logic belongs in Twig templates as opposed to preprocessing.
 
 While the line has moved a little in Drupal 8, preprocessing can still play a role.  When I start to see logic build up in templates, I start to ask myself the following:
 
 * Is this impacting the overall understandability of the template?  While some amount of logic can live in templates, I still think there is value in having them be easily readable and consumable by others.
 * Could any of the logic here be abstracted or reused beyond this template?
 
 If I answered yes to any of those questions, I consider preprocessing, twig macros, or custom twig fiters.
 
 * Preprocessing - I lean in the direction of preprocessing if what we need to do truly changes the underlying structure of the data. Adding new variables and non-cosmetic changes to existing variables falls into this category.
 * If the manipulation is mainly deals with how you present existing data, Twig Macros or Twig Filters are worth considering.
    * [Twig Macros](http://twig.sensiolabs.org/doc/2.x/tags/macro.html) - if the logic is simple and only returns a string, a Twig Macro could be used. The potential plus side here is that you stay in the land of Twig.
    * [Twig Filters](http://leopathu.com/content/create-custom-twig-filter-drupal-8) - for more complicated logic, or if returning more than a single string is necesary, you could create a custom twig filter. This is similar to preprocessing in that it requires php code in a custom module, but calling the filter in Twig provides some additional visibility in the template to how things are being manipulated. 

The makeup of your team might influence the approach here as well. The preprocessing approach will be more familiar to those with Drupal 7 experience and also likely the preference of backend developers. On the other hand, handling the logic in Twig Templates will probably be preferred by front-end developers. As you start using custom Twig Filters some of this benefit can erode, as you'll just end up having to do work in php code anyway.

While some amount of logic in preprocessing or Twig is likely inescapable, another contributed module exists that could simplify this data mapping process further, even going as far as eliminating the need to perform mappings in these Twig presenter templates at all.

## UI Patterns module

The UI Patterns Module helps get Drupal back in the loop on component definition and data mapping.  It does that by:

* Allowing UI Patterns to be defined as Drupal Plugins
* Providing ways to configure data mappings in the admin UI
* Allowing defined patterns to be used with component friendly modules like views, field group, panels, display suite, and paragraphs (requires display suite in most cases)
* And exposing an pptional Pattern Library page in Drupal

Going back once again to our card example, let's see how we can map data to our pattern library card component using the UI Patterns module.

### UI Patterns Card Mapping

### UI Patterns Configuration
