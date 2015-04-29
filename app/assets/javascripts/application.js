// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(document).ready(function(){

  // FADING MESSAGES
  // ==========================================================================
  //
  setTimeout(function(){
    $('.message .message-wrap').fadeOut('slow', function(){
      $('[data-hook="js-message"]').remove();
    });
  }, 4000);



  // SETUP CHECKIN EVENT HANDLERS
  // ==========================================================================
  //
  function setupCheckinEventHandlers() {

    // <%= button_to "Delete", delete_todo_path(todo),
    //       method: :delete, data: { :"delete-todo-button" => true, :"todo-id" => todo.id  } %>
    $(document).on("click", "[data-checkin-button]", checkinEvent);
  };
  setupCheckinEventHandlers();



  // CHECKIN EVENT
  // ==========================================================================
  //
  function checkinEvent(event) {
    event.preventDefault();

    // Get the delete button that was clicked (event.target) and
    // wrap it in a jQuery object.
    var clickedElement = $(event.target);

    // The delete button needs a data-todo-id attribute, e.g.
    // <button data-todo-id="7" data-delete-todo-button="true">Delete</button>
    var userId = clickedElement.data("user-id");

    var ajaxOptions = {
      type: "PATCH",
      // headers: { "Authorization": getAuthToken() },
      url: "/api/v1/users/" + userId,
      dataType: "json",
      contentType: "application/json; charset=utf-8"
    };

    function checkout() {
      // Assumes that the delete button is a child element of the
      // todo's table row.
      clickedElement.attr('value', 'Checked out');
    };
    $.ajax(ajaxOptions).done(checkout).fail(handleError);

  };



});
