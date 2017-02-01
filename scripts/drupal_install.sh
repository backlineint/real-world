#!/bin/sh

cd ../drupal
drush si -y
drush sql-query "TRUNCATE shortcut"
drush sql-query "TRUNCATE shortcut_field_data"
drush cset system.site uuid a63de821-d027-4e5b-aeaa-536392c1221f -y
drush cim sync -y