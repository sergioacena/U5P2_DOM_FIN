class RestaurantView {
  constructor() {
    this.main = document.getElementsByTagName("main")[0];
    this.categories = document.getElementById("categories");
    this.dishes = document.getElementById("dishes");
    this.menu = document.querySelector(".navbar-nav");
  }

  bindInit(handler) {
    document.getElementById("init").addEventListener("click", (event) => {
      handler();
    });
  }

  showCategories(categories) {
    if (this.categories.children.length > 1)
      this.categories.children[1].remove();
    const container = document.createElement("div");
    container.id = "category-list";
    container.classList.add("row");
    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="col-lg-3 col-md-6"><a data-category="${category.name}" href="#product-list">
        <div class="cat-list-image"><img alt="${category.name}" src="${category.url}" />
        </div>
        <div class="cat-list-text">
          <h3>${category.name}</h3>
          <div>${category.description}</div>
        </div>
      </a>
    </div>`
      );
    }
    container.insertAdjacentHTML(
      "afterbegin",
      `<h1 class="title" >Categorías</h1><br>`
    );
    this.categories.append(container);
  }

  showCategoriesInMenu(categories) {
    console.log("añadiendo categorías al menú", categories); //testeo
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.classList.add("dropdown");
    li.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button"
			data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>`
    );
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");

    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<li><a data-category="${category.name}" class="dropdown-item" href="#product-list">${category.name}</a></li>`
      );
    }
    li.append(container);
    this.menu.append(li);
  }

  showDishes(dishes) {
    //copiamos los datos del iterador en un nuevo array
    const allDishes = [...dishes];
    const randomDishes = [];

    //se cogen 3 platos que no tengan duplicados
    while (randomDishes.length < 3 && allDishes.length > 0) {
      const randomIndex = Math.floor(Math.random() * (allDishes.length - 1));
      randomDishes.push(allDishes[randomIndex]);
      //se elimina el plato que se ha elegido para evitar que vuelva a salir
      allDishes.splice(randomIndex, 1);
    }

    //Limpia cualquier plato existente en el contenedor this.dishes
    this.dishes.replaceChildren();
    //Si hay más de un hijo en this.dishes elimina el segundo hijo (para evitar duplicados)
    if (this.dishes.children.length > 1) this.dishes.children[1].remove();
    const container = document.createElement("div");
    container.id = "rand-list";
    container.classList.add("container");
    container.classList.add("my-3");
    container.insertAdjacentHTML("beforeend", '<div class="row"> </div>');

    for (const product of randomDishes) {
      const div = document.createElement("div");
      div.classList.add("col-md-4");
      div.insertAdjacentHTML(
        "beforeend",
        `<figure class="card card-product-grid card-lg"> <a data-serial="${product.dish.name}" href="#single-product" class="img-wrap"><img class="${product.dish.constructor.name}-style" src="${product.dish.image}"></a>
          <figcaption class="info-wrap">
            <div class="row">
              <div class="col-md-8"> <a data-serial="${product.dish.name}" href="#single-product" class="title">${product.dish.name}</a> </div>
              <div class="col-md-4">
                <div class="rating text-right"> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> </div>
              </div>
            </div>
          </figcaption>
        </figure>`
      );
      // Agrega el div creado al contenedor de platos
      container.children[0].append(div);
    }

    // Agrega un título al contenedor de platos
    container.insertAdjacentHTML(
      "afterbegin",
      `<h1 class= "title">Platos aleatorios</h1><br>`
    );

    // Agrega el contenedor completo al elemento this.dishes
    this.dishes.append(container);
  }

  //   bindProductsCategoryList(handler) {
  //     const categoryList = document.getElementById("category-list");
  //     const links = categoryList.querySelectorAll("a");
  //     for (const link of links) {
  //       link.addEventListener("click", (event) => {
  //         handler(event.currentTarget.dataset.category);
  //       });
  //     }
  //   }
}

export default RestaurantView;
