let username = document.getElementById("username");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let cancel = document.getElementById("cancel");
let submit = document.getElementById("submit");
let message = document.getElementById("message");
let rediriger = document.getElementById("rediriger");
let body = "";
const apiUrl = "http://localhost/SVM-back/controllers/user/addUser.php";

submit.addEventListener("click", (e) => {
  if (username.value && password1.value && password2.value) {
    if (password1.value === password2.value) {
      //Todo verfier la longueur du mot de passe
      body = {
        username: username.value,
        password: password1.value,
      };
      register(body);
    } else {
      message.innerHTML = "les deux mots de passe sont differents";
      message.classList.add("error");
      message.classList.remove("succes");
    }
  } else {
    message.innerHTML = "il faut remplir tous les champs";
    message.classList.add("error");
    message.classList.remove("succes");
  }
});

// on envoie à l'API les informations pour créer un utilisateur.
async function register(body) {
  const rawResponse = await fetch(apiUrl, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const response = await rawResponse.json();
console.log(response);
  if (response.code == 201) {
    
    message.innerHTML = "le profil a bien été crée";
    message.classList.add("success");
    message.classList.remove("error");
    rediriger.innerHTML =
      "Vous allez etre rediriger vers la page de login dans 5 secondes";

    // redirection vers la page de login aprés 5 s
    setTimeout(function () {
      window.location.href = "./login.html";
    }, 5000);
  } else {
    message.innerHTML = response.message;
    message.classList.add("error");
    message.classList.remove("success");
  }
}
