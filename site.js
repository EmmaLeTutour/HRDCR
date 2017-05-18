function main() {


    var sliderQuotes = function (){
      var quotesSlider = document.getElementsByClassName("quotes");
      var teller = 0;
      var teller1 = 0;
      var arrayQuotes = [];

            while (teller < quotesSlider.length){
              arrayQuotes.push(quotesSlider[teller].innerHTML);
              teller++;
            }

            arrayQuotes.push(arrayQuotes.shift());

            while (teller1 < quotesSlider.length){
              quotesSlider[teller1].innerHTML = arrayQuotes[teller1];
              teller1++;
            }

            console.log(arrayQuotes.join());

    }

    setInterval(sliderQuotes,10000);


var krant = function (){
  var krantSlider = document.getElementsByClassName("krant");
  var teller = 0;
  var teller1 = 0;
  var arrayKrant = [];

        while (teller < krantSlider.length){
          arrayKrant.push(krantSlider[teller].getAttribute("src"));
          teller++;
        }

        arrayKrant.push(arrayKrant.shift());

        while (teller1 < krantSlider.length){
          krantSlider[teller1].setAttribute("src",arrayKrant[teller1]);
          teller1++;
        }

        console.log(arrayKrant.join());

}

setInterval(krant,5000);











}

window.onload = function() {
       main();
}
