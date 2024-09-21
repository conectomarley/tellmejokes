function tellmejokes(response) {
  let joke = response.data.generated_text;
  document.querySelector("#joke-display").innerHTML = joke;
}

let apiKey = "3t4aaf46b1o5b1534f3e944eb00eb10d";
let context = "tell me a good ethical joke";

document.querySelector("#joke-button").addEventListener("click", function () {
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(tellmejokes);
});
