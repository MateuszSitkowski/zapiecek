$(document).ready(function(){
  //menu:
  $('.wpis').css('display', "none");
  $('#sandwitch').click(function(){
    $('div.sandwitch').toggle(500);
  });
  $('#salad').click(function(){
    $('div.salad').toggle(500);
  });
  $('#drink').click(function(){
    $('div.drink').toggle(500);
  });
});
