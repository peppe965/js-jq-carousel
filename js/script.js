// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS



$(document).ready(function(){

   
    
    //freccia indietro
    $(".prev").click(function() {
        prevImage();
    });
      

    //freccia avanti
    $(".next").click(function() {
        nextImage();
    });

       
        


    //funzione pallini
    $(".fa-circle").click(
        function() {
            pointsIndex = $(this).index();

            $(".fa-circle.active").removeClass("active");
            $("img.active").removeClass("active");
        
            if (!$(this).hasClass("active")) {
              $(this).addClass("active");
            }
        
            $("img").eq(pointsIndex).addClass("active");
        
        }
    );


    //funzione pressione freccette tastiera
    $(document).keydown(function(e) {

        var tastoPremuto = e.which;
        var frecciaDestra = 39;
        var frecciaSinistra = 37;
    
        switch(tastoPremuto) {
    
          case frecciaDestra:
            nextImage();
            break;
          case frecciaSinistra:
            prevImage();
            break;
        }
    
      });
    







      /////funzioni/////
      
       //dichiarazione e assegnazione variabili
        function start() {
            image = $("img.active");
            pointsIndex = $(".fa-circle.active");
            image.removeClass("active");
            pointsIndex.removeClass("active");
        };

        //funzione immagine successiva
        function prevImage() {
            start();
            
            if (image.hasClass("first")) {
                $("img.last").addClass("active");
                $(".fa-circle.last").addClass("active");
            } else {
                image.prev().addClass("active");
                pointsIndex.prev().addClass("active");
            };
        };      
        
        //funzione immagine successiva
        function nextImage() {
            start();
            
            if (image.hasClass("last")) {
                $("img.first").addClass("active");
                $(".fa-circle.first").addClass("active");
            } else {
                image.next().addClass("active");
                pointsIndex.next().addClass("active");
            }
        };
}
);