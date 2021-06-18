import { combineReducers } from "redux";
import userRegisterReducer from "./user/register/userRegisterReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userProfileReducer from "./user/profile/userProfileReducer";

import catalogReducer from "./product/catalog/catalogReducer";
import detailProductReducer from "./product/detailProduct/detailProductReducer";
import landingProductReducer from "./product/landing/landingProductReducer";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userProfile: userProfileReducer,
    catalogProduct: catalogReducer,
    detailProduct: detailProductReducer,
    landingProduct: landingProductReducer,
})

export default rootReducer;