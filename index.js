function tellmejokes(response) {
  let joke = response.data.answer;
  document.querySelector("#joke-display").innerHTML = joke;
}

let apiKey = "3t4aaf46b1o5b1534f3e944eb00eb10d";
let context = "provide a short answer and make sure to pick one";
let prompt = "tell me a good ethical joke";

document.querySelector("#joke-button").addEventListener("click", function () {
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(tellmejokes);
});
