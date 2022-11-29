const user = document.getElementById("bonjour");
const visiteur = document.getElementById("visiteur");
const inscrit = document.getElementById("inscrit");
const logout = document.getElementById("logout");

if (localStorage.getItem("username")) {
  visiteur.classList.add("hide");
  inscrit.classList.remove("hide");
  user.innerHTML = "Bonjour " + localStorage.getItem("username");
} else {
  location.href = "./login.html";
}

logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("username");
  location.href = "./index.html";
});
