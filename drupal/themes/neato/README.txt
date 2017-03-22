    _   __           __      
   / | / /__  ____ _/ /_____ 
  /  |/ / _ \/ __ `/ __/ __ \
 / /|  /  __/ /_/ / /_/ /_/ /
/_/ |_/\___/\__,_/\__/\____/ 
                             

INSTALLATION
------------

It is recommended to create a /custom and /contrib directory in your /themes dir.

Install Neato using drush (drush en neato -y) or by manually putting it in the /themes/contrib directory.

Gulp and Bower are required to manage assets.

First, you will need to install NodeJS (https://nodejs.org/en/download/), if you already have NodeJS installed: make sure you run the latest version (https://nodecasts.io/update-node-js/).

Install gulp and bower with 'npm install -g gulp bower' from the command line. https://nodecasts.io/update-node-js/

From the parent theme directory (/themes/contrib/neato), enter 'bower install' in the command line. This will pull in the component assets for Neato. These are referenced from the STARTER theme for you so there is no need to copy them into the STARTER/subtheme.

CREATING A SUBTHEME
-------------------

It is highly encouraged to use Drush to generate a sub theme for editing. Do not edit the parent theme (/themes/contrib/neato) because otherwise you can’t upgrade it in the future. 

Option 1 - Install with Drush (RECOMMENDED)

1. Enable the Neato theme and set as default. You can unset it as default after you are done step 2.
2. Enter the drush command: drush ngt [THEMENAME] [Description !Optional]
3. You are done!

Option 2 - Take a manual copy (NOT RECOMMENDED)

1. Take a copy of STARTER and change all references to [THEMENAME]
2. Manually copy the contents of /themes/contrib/neato/bowers_components/bitters/app/assets/stylesheets into your new start theme /themes/custom/[THEMENAME]/scss/base directory
3. Check
4. Double check
5. Fingers crossed (you should have gone with option 1 using drush!
6. You are done!

From your subtheme directory, enter 'npm install' in the command line. This will install the required tools to compile assets.

Make a copy of example.config.js and set your local development settings here. Add this file to your .gitignore file to prevent breaking of team-members' dev setup.

cp example.config.js config.js

Run 'gulp' from the subtheme (/themes/custom/[THEMENAME]) command line to compile CSS from SASS. Gulpfile.js controls what happens in this process. Feel free to add your own tools into this file to facilitate development. Saving SCSS/JS/Twig files will trigger tasks like CSS generation, JS generation, source map generation, and if configured, cache rebuilding.

Problems while installing/using Neato? Please create an issue: 
 