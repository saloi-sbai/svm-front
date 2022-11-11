const api_url =
  "http://localhost/SVM-back/controllers/produits/getProducts.php";

const articles = document.querySelector(".section-center");

async function getapi(url) {
  // je mets le resultat dans la variable response
  const response = await fetch(url);

  // je convertis le resultat en forma json
  const resultat = await response.json();
  console.log(resultat);
  afficher(resultat);
}

// j'appelle la fonction getapi avec l'url de mon back
getapi(api_url);

function afficher(data) {
  let article = data
    .map((item) => {
      return `
          <article class="menu-item">
          <img
            src="${item.img}"
            class="photo"
            alt=""
          />
          <div class="item-info">
            <header>
              <h4>"${item.nom}"</h4>
              <h4 class="${item.prix}">14€</h4>
              <button class="filter-btn" type="button">
                <a href="#"><i class="fa-solid fa-cart-plus"></i></a>
              </button>
            </header>
            <p class="item-text">
              "${item.description}"
            </p>
          </div>
        </article>
  `;
    })
    .join("");

  articles.innerHTML = article;
}
