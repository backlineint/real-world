(function ($, Drupal) {
  Drupal.behaviors.expanderBehavior = {
    attach: function (context, settings) {

      $('.expander__trigger').click(function(){
        $(this).toggleClass("expander--hidden");
      });

    }
  };

})(jQuery, Drupal);