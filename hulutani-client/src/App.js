import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Public
import LandingPage from "./pages/user/landing";
import ProdukList from "./pages/user/produklist";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import RegisterNext from "./pages/user/registernext"

//User
import UserEdit from "./pages/user/useredit";
import UserTransaksi from "./pages/user/usertransaksi";
import UserAlamat from "./pages/user/useralamat";

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
import ImageUploadTest from "./pages/ImageUploadTest"

function App() {
  return (
    <Router>
      <Switch>

        {/* User Routes */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/register-2">
          <RegisterNext />
        </Route>
        <Route path="/user-edit">
          <UserEdit />
        </Route>
        <Route path="/user-transaction">
          <UserTransaksi />
        </Route>
        <Route path="/user-address">
          <UserAlamat />
        </Route>
        <Route path="/products">
          <ProdukList />
        </Route>
        {/* User Routes */}

        {/* Admin Routes */}
        <Route component={AdminLogin} exact path="/admin/login" />
        <Route component={AdminHome} exact path="/admin/dash" />
        <Route component={AdminProduct} exact path="/admin/dash/product" />
        <Route
          component={AdminAddProduct}
          exact
          path="/admin/dash/product/add"
        />
        <Route
          component={AdminEditProduct}
          exact
          path="/admin/dash/product/edit/:id"
        />
        <Route component={AdminCategory} exact path="/admin/dash/category" />
        <Route
          component={AdminAddCategory}
          exact
          path="/admin/dash/category/add"
        />
        <Route
          component={AdminEditCategory}
          exact
          path="/admin/dash/category/edit/:id"
        />
        <Route
          component={AdminTransaction}
          exact
          path="/admin/dash/transaction"
        />
        <Route
          component={AdminTransactionDetail}
          exact
          path="/admin/dash/transaction/detail"
        />
        <Route component={AdminContact} exact path="/admin/dash/contact" />
        {/* Admin Routes */}

        <Route path="/test">
          <ImageUploadTest />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;