/* variables */
const mangaItemList = document.querySelectorAll('.manga-item');
const favButtons = document.querySelectorAll(".heart-svg");


favButtons.forEach(function(favButtonSingle){
  favButtonSingle.addEventListener('click', function(){
    favButtonSingle.closest('.manga-item').classList.toggle('is-favorite');
  });
});


