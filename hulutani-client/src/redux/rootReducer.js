import { combineReducers } from "redux";
// user
import userRegisterReducer from "./user/register/userRegisterReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userProfileReducer from "./user/profile/userProfileReducer";
//public
import catalogReducer from "./public/catalog/catalogReducer";
import detailProductReducer from "./public/detailProduct/detailProductReducer";
import landingProductReducer from "./public/landing/landingProductReducer";
//admin
import addCategoryReducer from "./admin/category/add/adminAddCategoryReducer";
import showCategoryReducer from "./admin/category/show/adminShowCategoryReducer";
import editCategoryReducer from "./admin/category/edit/adminEditCategoryReducer";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userProfile: userProfileReducer,
    catalogProduct: catalogReducer,
    detailProduct: detailProductReducer,
    landingProduct: landingProductReducer,
    adminAddCategory: addCategoryReducer,
    adminShowCategory: showCategoryReducer,
    adminEditCategory: editCategoryReducer
})

export default rootReducer;