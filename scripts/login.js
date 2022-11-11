const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let person = null;

  person = {
    nom: username.value,
    password: password.value,
  };

  console.log("person : ", person.nom);
});

/*
{
    "nom" : valeur,
    "password" : valeur
}

login: function() {
    console.log('utilisateur connecté');
}
person.login();


*/
