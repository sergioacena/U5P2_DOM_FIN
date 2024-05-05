import { Coordinate } from "./entities.js";

const MODEL = Symbol("RestaurantModel");
const VIEW = Symbol("RestaurantView");
const LOAD_RESTAURANT_OBJECTS = Symbol("Load Restaurant Objects");

class RestaurantController {
  constructor(model, view) {
    this[MODEL] = model;
    this[VIEW] = view;

    this.onLoad();
    this.onInit();

    this[VIEW].bindInit(this.handleInit);
  }

  [LOAD_RESTAURANT_OBJECTS]() {
    const category1 = this[MODEL].createCategory(
      "Entrantes",
      "Para todos los gustos"
    );
    const category2 = this[MODEL].createCategory(
      "Carnes",
      "La especialidad de la casa"
    );
    const category3 = this[MODEL].createCategory(
      "Postres",
      "Un toque dulce para tu comida"
    );

    category1.url = "imgs/entrantes.avif";
    category2.url = "imgs/carnes.webp";
    category3.url = "imgs/postres.webp";

    this[MODEL].addCategory(category1, category2, category3);

    const dish1 = this[MODEL].createDish(
      "Ensalada césar",
      "Con pollo a la parrilla",
      ["Lechuga", "Pollo", "Salsa Cesar"],
      "img/menu/enscesar.jpg"
    );
    const dish2 = this[MODEL].createDish(
      "Puré de patata gratinado",
      "Dorado y burbujeante",
      ["Patatas", "Queso", "Leche"],
      "img/menu/purepatata.jpeg"
    );
    const dish3 = this[MODEL].createDish(
      "Carpaccio de res",
      "Con rúcula",
      ["Carne de res", "Rúcula", "Aceite de oliva"],
      "img/menu/carpaccio.webp"
    );
    const dish4 = this[MODEL].createDish(
      "Risotto de hongos",
      "Arroz cremoso cocido en vino blanco",
      ["Arroz", "Hongos", "Vino blanco"],
      "img/menu/risotto.jpg"
    );
    const dish5 = this[MODEL].createDish(
      "Churrasco de ternera",
      "Marinado en especias",
      ["Churrasco", "Especias", "Chimichurri"],
      "img/menu/churrasco.jpg"
    );

    const dish6 = this[MODEL].createDish(
      "Entrecot a la pimienta",
      "Con patatas gratinadas",
      ["Entrecot de res", "Pimienta", "Sal"],
      "img/menu/entrecot2.jpg"
    );

    const dish7 = this[MODEL].createDish(
      "Parrillada mixta",
      "Seleccion de carnes a la parrilla",
      ["Bistec", "Chuleta de cerdo", "Pechuga de pollo"],
      "img/menu/parrillada.jpg"
    );

    const dish8 = this[MODEL].createDish(
      "Pollo al Curry",
      "Con arroz basmati",
      ["Pollo", "Pasta de curry", "Arroz"],
      "img/menu/pollocurry.webp"
    );
    const dish9 = this[MODEL].createDish(
      "Tarta de manzana",
      "Con helado de canela",
      ["Manzana", "Azúcar", "Canela"],
      "img/menu/tartamanzana.webp"
    );
    const dish10 = this[MODEL].createDish(
      "Profiteroles",
      "Rellenos de crema",
      ["Crema pastelera", "Masa profiteroles", "Azucar"],
      "img/menu/profi.jpg"
    );
    const dish11 = this[MODEL].createDish(
      "Tarta de queso",
      "Con frutos rojos",
      ["Queso", "Crema", "Mermelada"],
      "img/menu/tartqueso.webp"
    );
    const dish12 = this[MODEL].createDish(
      "Mousse de chocolate",
      "Con frambuesas",
      ["Chocolate negro", "Frambuesas", "Azúcar"],
      "img/menu/mousse.jpeg"
    );

    this[MODEL].addDish(
      dish1,
      dish2,
      dish3,
      dish4,
      dish5,
      dish6,
      dish7,
      dish8,
      dish9,
      dish10,
      dish11,
      dish12
    );

    //no puedo concatenar ya que no se puede según la forma que se hizo en la 4.2 - asignar X categorías a 1 plato
    this[MODEL].assignCategoryToDish(dish1, category1);
    this[MODEL].assignCategoryToDish(dish2, category1);
    this[MODEL].assignCategoryToDish(dish3, category1);
    this[MODEL].assignCategoryToDish(dish4, category1);
    this[MODEL].assignCategoryToDish(dish5, category2);
    this[MODEL].assignCategoryToDish(dish6, category2);
    this[MODEL].assignCategoryToDish(dish7, category2);
    this[MODEL].assignCategoryToDish(dish8, category2);
    this[MODEL].assignCategoryToDish(dish9, category3);
    this[MODEL].assignCategoryToDish(dish10, category3);
    this[MODEL].assignCategoryToDish(dish11, category3);
    this[MODEL].assignCategoryToDish(dish12, category3);

    const allergen1 = this[MODEL].createAllergen(
      "Gluten",
      "Alergias al gluten"
    );
    const allergen2 = this[MODEL].createAllergen(
      "Lácteos",
      "Alergias a los lácteos"
    );
    const allergen3 = this[MODEL].createAllergen("Huevos", "Alergias al huevo");
    const allergen4 = this[MODEL].createAllergen("Ninguno", "Sin alérgenos");

    this[MODEL].addAllergen(allergen1, allergen2, allergen3, allergen4);

    this[MODEL].assignAllergenToDish(dish1, allergen2);
    this[MODEL].assignAllergenToDish(dish2, allergen2);
    this[MODEL].assignAllergenToDish(dish3, allergen2);
    this[MODEL].assignAllergenToDish(dish4, allergen2);
    this[MODEL].assignAllergenToDish(dish5, allergen4);
    this[MODEL].assignAllergenToDish(dish6, allergen2);
    this[MODEL].assignAllergenToDish(dish7, allergen4);
    this[MODEL].assignAllergenToDish(dish8, allergen1);
    this[MODEL].assignAllergenToDish(dish9, allergen1);
    this[MODEL].assignAllergenToDish(dish10, allergen1, allergen2);
    this[MODEL].assignAllergenToDish(dish11, allergen2, allergen3);
    this[MODEL].assignAllergenToDish(dish12, allergen3);

    const menu1 = this[MODEL].createMenu(
      "Sabor de la parrilla",
      "La especialidad de la casa"
    );
    const menu2 = this[MODEL].createMenu(
      "Experiencia gourmet",
      "Come como un rey"
    );
    const menu3 = this[MODEL].createMenu(
      "Sabores de la granja",
      "La granja, en tu mesa"
    );

    this[MODEL].addMenu(menu1, menu2, menu3);

    this[MODEL].assignDishToMenu(menu1, dish1, dish5, dish9);
    this[MODEL].assignDishToMenu(menu2, dish2, dish6, dish10);
    this[MODEL].assignDishToMenu(menu3, dish3, dish7, dish11);

    const coor1 = new Coordinate(41.4034, 2.1741);
    const coor2 = new Coordinate(-33.8688, 151.2093);
    const coor3 = new Coordinate(51.5074, -0.1278);

    const rest1 = this[MODEL].createRestaurant(
      "El Asador",
      "Donde todo empezó",
      coor1
    );
    const rest2 = this[MODEL].createRestaurant(
      "El Asador Gourmet",
      "Una experiencia VIP",
      coor2
    );
    const rest3 = this[MODEL].createRestaurant(
      "ElAsador Eats",
      "De la parrilla a tu puerta",
      coor3
    );

    this[MODEL].addRestaurant(rest1, rest2, rest3);
  }

  onLoad = () => {
    this[LOAD_RESTAURANT_OBJECTS]();
    this.onAddCategory();
  };

  onInit = () => {
    this[VIEW].showCategories(this[MODEL].getterCategories());
  };

  handleInit = () => {
    this.onInit();
  };

  onAddCategory = () => {
    this[VIEW].showCategoriesInMenu(this[MODEL].getterCategories());
  };
}

export default RestaurantController;
