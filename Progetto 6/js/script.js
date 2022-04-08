const mieImg = [
  "arrabbiato",
  "bello",
  "piangere",
  "ridere",
  "amare",
  "amare1",
  "spavento",
  "shock",
  "arrabbiato",
  "bello",
  "piangere",
  "ridere",
  "amare",
  "amare1",
  "spavento",
  "shock",
];

let modal = $("#modal")
modal.hide();

$(document).ready(function () {
  alert("Inizia il gioco!");
  shuffle(mieImg);
  function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = a[currentIndex];
      a[currentIndex] = a[randomIndex];
      a[randomIndex] = temporaryValue;
    }
    return a;
  }
  for (let i = 0; i < mieImg.length; i++) {
    let carta =
      '<div class="images"><img id="' +
      i +
      '" src="img/' +
      mieImg[i] +
      '.png"></img> </div>';
    $(carta).appendTo(".game");
    console.log(carta);
  }

  let openArray = [];
  let array2 = [];
  let images = $(".images");
  var counter = 1;

  
  $(images).click(function () {
    $("#clicks").html(counter);
    $(this).addClass("ruotata");
    $(this).removeClass("images");
    counter++;

    openArray.push($(this).children("img").attr("src"));
    if (openArray.length == 2) {
      if (openArray[0] == openArray[1]) {   
        array2.push(openArray[0], openArray[1])
        if(array2.length == 16){
          modal.show()
        }           
        openArray.pop();
        openArray.pop();
        let cartaGiusta = $(".ruotata");
        $(cartaGiusta).addClass("giusta");
        $(cartaGiusta).removeClass("ruotata");
      } else {
        openArray.pop();
        openArray.pop();
        setTimeout(function () {
          let cartaruotata = $(".ruotata");
          $(cartaruotata).addClass("images");
          $(cartaruotata).removeClass("ruotata");
        }, 1000);
      }
    };

    $('.ruotata').animate({  borderSpacing: 360 }, {
      step: function(now) {
        $(this).css('transform','rotate('+now+'deg)');
      },
      duration:'slow'
  },'linear');
 $(".images").removeAttr("style");
  });
  $("#Restart").click(function () {
    alert("Il gioco ricomincia")
    location.reload()
  });
  $(".again").click(function () {
    location.reload()
  });
});
