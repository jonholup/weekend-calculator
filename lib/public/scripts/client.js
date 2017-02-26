var x;
var y;
var values = {};

$(document).ready(function(){

//// Math Buttons //// todo: give math class, add data types and refactor
//// todo: add conditional to check for firstInput || secondInput empty and alert
  $('#addButton').on('click', function(){
    x = $('#firstInput').val();
    y = $('#secondInput').val();
    values = {x: x, y: y, type: 'Add'};
    console.log(values);
    doMath();
  });

  $('#subtractButton').on('click', function(){
    x = $('#firstInput').val();
    y = $('#secondInput').val();
    values = {x: x, y: y, type: 'Subtract'};
    doMath();
  });

  $('#multiplyButton').on('click', function(){
    x = $('#firstInput').val();
    y = $('#secondInput').val();
    values = {x: x, y: y, type: 'Multiply'};
    doMath();
  });

  $('#divideButton').on('click', function(){
    x = $('#firstInput').val();
    y = $('#secondInput').val();
    values = {x: x, y: y, type: 'Divide'};
    doMath();
  });

//// Clear Button ////
  $('#clear').on('click', function(){
    $('#firstInput').val('');
    $('#secondInput').val('');
    $('#resultVal').empty();

  });
  //// todo: figure out better error
  function doMath(){
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: values,
      success: function(response){
        $('#resultVal').text(response.result);
      },
      error: function(error){
        alert('Uh oh');
      }
    });
  }
});
