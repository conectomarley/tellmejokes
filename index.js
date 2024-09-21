function tellmejokes(response) {
  console.log(response.data.answer);

  new Typewriter("#joke-display", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "3t4aaf46b1o5b1534f3e944eb00eb10d";
  let context = "provide a short answer and make sure to pick one";
  let prompt = "tell me a good ethical joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke-display");
  jokeElement.innerHTML = "Generating a joke for you.. please wait";

  axios.get(apiUrl).then(tellmejokes);
}

let jokebuttonElement = document.querySelector("#joke-button");
jokebuttonElement.addEventListener("click", generateJoke);
