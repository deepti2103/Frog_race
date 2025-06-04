document.addEventListener("DOMContentLoaded", function () 
{
  var lilyPads = document.querySelectorAll('.lily-pad');
  var currentSpot = 0;

  var frog = document.createElement('div');
  frog.classList.add('dot');

  lilyPads[currentSpot].appendChild(frog);

  document.addEventListener('keydown', function (event) 
  {

    lilyPads[currentSpot].removeChild(frog);

    var row = Math.floor(currentSpot / 4); 
    var column = currentSpot % 4;          

   
    if (event.key === 'ArrowUp' && row > 0) {
      currentSpot = currentSpot - 4;
    } else if (event.key === 'ArrowDown' && row < 3) {
      currentSpot = currentSpot + 4;
    } else if (event.key === 'ArrowLeft' && column > 0) {
      currentSpot = currentSpot - 1;
    } else if (event.key === 'ArrowRight' && column < 3) {
      currentSpot = currentSpot + 1;
    }
    lilyPads[currentSpot].appendChild(frog);
  });
});
