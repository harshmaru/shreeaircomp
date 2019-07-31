import { Injectable } from "@angular/core";

// export const API_URL = "http://localhost/shreeaircomp";
// export const API_URL = window.location.origin;
export const API_URL = "http://shreeaircompressors.in";


// export declare var GET_Categories_URL = API_URL+"/api/getCategories.php";

@Injectable({
  providedIn: "root"
})

export class Config {
  GET_CATEGORIE_LIST_URL = API_URL + "/api/getCategoriesList.php";
  GET_PRODUCTS_LIST_URL = API_URL + "/api/getProductsList.php";
  GET_PRODUCT_WITH_ID = API_URL + "/api/getProductWithID.php";
  GET_CATEGORY_WITH_ID = API_URL + "/api/getCategoryWithID.php";
  GET_DYNAMIC_CATEGORY_POSTS = API_URL + "/api/getDynamicCategory.php";
  POST_EMAIL_CONTACT_US = API_URL + "/api/sendMail.php";
}

