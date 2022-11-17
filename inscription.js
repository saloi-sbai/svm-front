let username = document.getElementById("username");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let cancel = document.getElementById("cancel");
let submit = document.getElementById("submit");
let body = "";
const apiUrl = "http://localhost/SVM-back/controllers/user/addUser.php";

submit.addEventListener("click", (e) => {
  if (username.value && password1.value && password2.value) {
    if (password1.value === password2.value) {
      //Todo verfier la longueur du mot de passe
      console.log("1");
      body = {
        username: username.value,
        password: password1.value,
      };
      register(body);
    } else {
      console.log("les deux mots de passe sont differents");
    }
  } else {
    console.log("il faut remplir tous les champs");
  }
});

//le job est d'envoyer à l'API les informations pour créer un utilisateur.
async function register(body) {
  console.log("2");
  const rawResponse = await fetch(apiUrl, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const content = await rawResponse.json();
  console.log(content);
}
//CORS : chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
