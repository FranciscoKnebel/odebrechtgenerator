var app = angular.module('o-generator', []);
app.controller('generatorController', function($scope) {
  var list = [
              "Passivo", "Mandrake", "Cortininha", "Avião", "Manicure", "Carangueijo", "Zé Ruela", "Lindinho",
              "Pastor", "Aspirador", "Escritor", "Metralhadora", "Gatuno", "Mandioca", "Catarro", "Nervosinho", "Correria",
              "Padeiro", "Peteca", "Malote", "Nervosinho", "Havaiana", "Caroço", "Xaninha", "Drácula", "Carniça",
              "Motorista", "Leite com Pera", "Bingola", "Rio", "Candomblé", "Comuna", "Goleiro", "Bruto", "Colorido", "Roberval",
      			  "Tuca", "Viagra", "Grego", "Atleta", "Neto", "Cacique", "Eva", "Nordeste", "Pelé", "Dadinho", "Zé Pequeno", "Bigodão", "Safadão",
      			  "Capivara", "Fósforo", "Isqueirão", "Máquina", "Dunga", "Mestre dos Magos", "Tijolinho", "Bigorna", "Martelo", "Motoserra",
      			  "Rocambole", "Feijoada", "Bananão", "Cabra", "Surfistinha", "Bola de neve", "Chavoso", "Bola de fogo", "Morango do Nordeste",
      			  "Champinho", "Maracanã", "Lasanha", "Zica", "Aedes Egípcio", "Bolovo", "Vice-Cônsul de Honduras", "Rogérinho",
      			  "Boquetitos", "Franguinho", "Beija-Flor"];

  $scope.nome = jQuery.rand(list);
  $scope.generateNew = function() {
    $scope.nome = jQuery.rand(list);
  }


  //Send Quote to Twitter
	//Original Script by Dhananjay Kumar
	//http://debugmode.net/2012/06/27/how-to-post-a-tweet-using-javascript/
  $scope.sendTweet = function() {
    var nome = $scope.nome;
    var meunomee = 'Meu apelido da Odebrecht é "'
    var textToTweet = meunomee.concat(nome, '" - Ache o seu em http://goo.gl/Nzf2UR');

    var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
    window.open(twtLink,'_blank');
  }

});

(function($) {
    $.rand = function(arg) {
        if ($.isArray(arg)) {
            return arg[$.rand(arg.length)];
        } else if (typeof arg === "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
})(jQuery);
