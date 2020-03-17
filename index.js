'use strict';

function dogPicNum(){ 
  $("#submit").click(function(event){
  event.preventDefault();
  const str = $("#breed").val();
  const newStr = str.toLowerCase().split(" ").join("-");
  console.log(newStr);
  return getDogImages(newStr);
});
}

function getDogImages(input) {
  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson)
    )
    .catch(error => alert('Something went wrong. Try again later.'))
    }

function displayResults(responseJson) {
  $('.results').removeClass('hidden');
  $('.image-container').empty();
  if (responseJson.status === 'error') {
    const badResult =  `<p>Sorry, pick another breed</p>`;
  $('.results').append(badResult);
} else{
  const result =  `<img src="${responseJson.message}" class="results-img">`;
  $('.image-container').append(result);
}
};


dogPicNum();

