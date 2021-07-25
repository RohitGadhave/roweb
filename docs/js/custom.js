const chuckNorrisSpan = document.querySelector(".chuck-norris");
$(document).ready(function() {
  fetchFact();
  // setInterval(() => fetchFact(), 10000);
});

const fetchFact = () => {
  console.log("called");

  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data.value);
        chuckNorrisSpan.innerHTML = data.value;
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};

$(window).load(() => {
  setTimeout(() => {
    $(".preloader-rocket").fadeOut();
  }, 700);
  // $(".preloader-rocket").fadeOut();
});
