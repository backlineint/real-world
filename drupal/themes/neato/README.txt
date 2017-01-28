INSTALLATION
------------

Gulp and Bower are required to manage assets.

First, you will need to install NodeJS.

Install gulp and bower with 'npm install -g gulp bower' from the command line. On some setups, sudo may be required.

From the parent (neato) theme directory, enter 'bower install' in the command line. This will pull in the component assets for Neato. These
are referenced includes from the STARTER theme for you - no need to copy them into the STARTER/subthemes.

Create a subtheme. See the BUILD A THEME WITH DRUSH section below on how to do that.

From your subtheme directory, enter 'npm install' in the command line. This will install the required tools to compile
assets.

Make a copy of example.config.js and set your local development settings here. Add this file to your .gitignore file to prevent breaking of team-members' dev setup.

cp example.config.js config.js

Run 'gulp' from the subtheme command line to compile CSS from SASS. Gulpfile.js controls what happens in this process. Feel free to
add your own tools into this file to facilitate development. Saving SCSS/JS/Twig files will trigger tasks like CSS generation, JS
generation, source map generation, and if configured, cache rebuilding.

BUILD A THEME WITH DRUSH
----------------------------------
It is highly encouraged to use Drush to generate a sub theme for editing. Do not edit the parent 'neato' theme!

  1. Enable the Neato theme and set as default. You can unset it as default after you are done step 2.
  2. Enter the drush command: drush ngt [THEMENAME] [Description !Optional]