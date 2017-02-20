(function ($, Drupal) {
  Drupal.behaviors.expanderBehavior = {
    attach: function (context, settings) {

      $('.expander-trigger').click(function(){
        $(this).toggleClass("expander-hidden");
      });


    }
  };

})(jQuery, Drupal);