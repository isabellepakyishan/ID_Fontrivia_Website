setTimeout(myFunction, 2000);

function myFunction(){
  window.location.href = "#";
}

let url = 'https://uselessfacts.jsph.pl//random.json?language=en';

let newprofile = function(){
  fetch(url)
  .then(response => response.json())
  .then(function(data){
    console.log(data)
    $(".loading-text").html(data.text)
  });
}
newprofile();