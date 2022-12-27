const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const apiUrl = "http://localhost/SVM-back/controllers/user/getUser.php";
let message = document.getElementById("message");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let person = null;

  person = {
    username: username.value,
    password: password.value,
  };
  // on envoie les informations à l'api pour faire la vérification
  send(person);
});

async function send(person) {
  const rawResponse = await fetch(apiUrl, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(person),
  });
  const content = await rawResponse.json();

  if (content.code == 401) {
    message.innerHTML = "le username ou le mot de passe est incorrect";
    message.classList.add("error");
    username.value = "";
    password.value = "";
  } else {
    localStorage.setItem("username", content[0].nom);
    localStorage.setItem("username_id", content[0].id);
    location.href = "../index.html";
  }
}
