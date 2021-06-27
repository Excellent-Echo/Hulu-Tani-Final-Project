import React,{useEffect} from "react"
import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/route/PrivateRoute";

// Action 
import adminShowCategoryAction from "./redux/admin/category/show/adminShowCategoryAction";

//Public
import LandingPage from "./pages/user/landing";
import ProdukList from "./pages/user/produklist";
import ProdukDetail from "./pages/user/produkdetail";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import RegisterNext from "./pages/user/registernext";

//User
import UserEdit from "./pages/user/useredit";
import UserTransaksi from "./pages/user/usertransaksi";
import UserAlamat from "./pages/user/useralamat";
// import KantongBelanja from "./pages/user/kantongbelanja";
import Checkout from "./pages/user/checkout"
//Admin
import AdminLogin from "./pages/admin/AdminLoginPage";
import AdminHome from "./pages/admin/home/AdminHomeDashPage";
import AdminProduct from "./pages/admin/product/AdminProductDashPage";
import AdminAddProduct from "./pages/admin/product/AdminAddProductDashPage";
import AdminEditProduct from "./pages/admin/product/adminEditProductDashPage";
import AdminCategory from "./pages/admin/category/AdminCategoryDashPage";
import AdminAddCategory from "./pages/admin/category/AdminAddCategoryDashPage";
import AdminEditCategory from "./pages/admin/category/AdminEditCategoryDashPage";
import AdminTransaction from "./pages/admin/transaction/AdminTransactionDashPage";
import AdminTransactionDetail from "./pages/admin/transaction/AdminTransactionDetailDashPage";
import AdminContact from "./pages/admin/contact/AdminContactDashPage";

//test
import ImageUploadTest from "./pages/ImageUploadTest";
import NoPage from "./pages/user/status/nopage";

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(adminShowCategoryAction.getCategories());
  }, []);
  
  return (
    <Router>
      <Switch>
        {/* User Routes */}
        <Route path="/login"><Login/></Route>
        <Route path="/register" component={Register} />
        <Route path="/register-2" component={RegisterNext} />
        <Route path="/products" component={ProdukList} />
        <Route path="/product/:id" component={ProdukDetail} />
        {/* <Route path="/cart" component={KantongBelanja} /> */}

        {/* Private */}
        <PrivateRoute path="/user-edit" component={UserEdit} />
        <PrivateRoute path="/user-transaction" component={UserTransaksi} />
        <PrivateRoute path="/user-address" component={UserAlamat} />
        <PrivateRoute path="/checkout" component={Checkout}/>
        {/* <PrivateRoute path="/cart" component={KantongBelanja} /> */}
        {/* Private */}
        {/* User Routes */}

        {/* Admin Routes */}
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route exact path="/admin/dash" component={AdminHome} />
        <Route exact path="/admin/dash/product" component={AdminProduct} />
        <Route
          exact
          path="/admin/dash/product/add"
          component={AdminAddProduct}
        />
        <Route
          exact
          path="/admin/dash/product/edit/:id"
          component={AdminEditProduct}
        />
        <Route exact path="/admin/dash/category" component={AdminCategory} />
        <Route
          exact
          path="/admin/dash/category/add"
          component={AdminAddCategory}
        />
        <Route
          exact
          path="/admin/dash/category/edit/:id"
          component={AdminEditCategory}
        />
        <Route
          exact
          path="/admin/dash/transaction"
          component={AdminTransaction}
        />
        <Route
          exact
          path="/admin/dash/transaction/detail"
          component={AdminTransactionDetail}
        />
        <Route exact path="/admin/dash/contact" component={AdminContact} />
        {/* Admin Routes */}

        {/* <Route path="/test" component={ImageUploadTest} /> */}

        <Route path="/" component={LandingPage} />
        <Route component={NoPage} />
      </Switch>
    </Router>
  );
}

export default App;