/* your code should go in this file */

/*
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution hidden">SOLUTION</h3>'+
           ' </li> ';

var points = 0;
var currentWord = 0;

$(document).ready(function(){

    var wordList = "";
    var tempItem;


    for (var i=0; i<data.length; i++) {
        tempItem = tmpl.replace("WORD", data[i].word_en)
            .replace("SOLUTION", data[i].word_de);

        if (i === 0) {
            tempItem = tempItem.replace("ID", i + "\" class=\"current\"");
        } else {
            tempItem = tempItem.replace("ID", i);
        }

        wordList += tempItem;
    }

    $('.cards').html (wordList);

    $('.cards').on ('click', 'h3', function (event) {
        $('.solution').toggleClass ('hidden');
        $('.options').toggleClass ('hidden');
    });

    $('.opt-incorrect').click (function (event) {

        nextWord ();
    });

    $('.opt-correct').click (function (event) {

        points++;
        nextWord ();
    });

    function nextWord () {

        $('.solution').toggleClass ('hidden');
        $('.options').toggleClass ('hidden');

        $('#' + currentWord).toggleClass ('current');
        currentWord++;

        if (currentWord < data.length) {
            $('#' + currentWord).toggleClass ('current');
        } else {

            $('#tot-good').text (points);
            $('#tot').text (data.length);

            $('.practice').toggleClass ('hidden');
            $('.final').toggleClass ('hidden');
        }


    }

});
