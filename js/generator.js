var app = angular.module('o-generator', []);
app.controller('generatorController', function($scope) {
  var list = [
              "Passivo", "Mandrake", "Cortininha", "Avião", "Manicure", "Carangueijo", "Zé Ruela", "Lindinho",
              "Pastor", "Aspirador", "Escritor", "Metralhadora", "Gatuno", "Mandioca", "Catarro", "Nervosinho", "Correria",
              "Padeiro", "Peteca", "Malote", "Nervosinho", "Havaiana", "Caroço", "Xaninha", "Drácula", "Carniça",
              "Uninove", "Carniça", "Motorista", "Leite com Pêra", "Bingola"];

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
    var textToTweet = meunomee.concat(nome, '" - Ache o seu em goo.gl/12345');

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
