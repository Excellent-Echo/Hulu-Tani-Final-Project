import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/user/landing";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import UserEdit from "./pages/user/useredit";
import AdminLogin from "./pages/admin/AdminLoginPage";
import AdminHome from "./pages/admin/home/AdminHomeDashPage";
import AdminProduct from "./pages/admin/product/AdminProductDashPage";
import AdminAddProduct from "./pages/admin/product/AdminAddProductDashPage";
import AdminEditProduct from "./pages/admin/product/adminEditProductDashPage";
import AdminCategory from "./pages/admin/category/AdminCategoryDashPage";
import AdminAddCategory from "./pages/admin/category/AdminAddCategoryDashPage";
import AdminEditCategory from "./pages/admin/category/AdminEditCategoryDashPage";
import AdminTransaction from "./pages/admin/Transaction/AdminTransactionDashPage";
import AdminTransactionDetail from "./pages/admin/Transaction/AdminTransactionDetailDashPage";
import AdminContact from "./pages/admin/contact/AdminContactDashPage";

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
        <Route path="/user-detail">
          <UserEdit />
        </Route>

        {/* Admin Routes */}
        <Route exact={true} path="/admin/login" component={AdminLogin} />
        <Route exact={true} path="/admin/dash/home" component={AdminHome} />
        <Route
          exact={true}
          path="/admin/dash/product"
          component={AdminProduct}
        />
        <Route
          exact={true}
          path="/admin/dash/product/add"
          component={AdminAddProduct}
        />
        <Route
          exact={true}
          path="/admin/dash/product/edit"
          component={AdminEditProduct}
        />
        <Route
          exact={true}
          path="/admin/dash/category"
          component={AdminCategory}
        />
        <Route
          exact={true}
          path="/admin/dash/category/add"
          component={AdminAddCategory}
        />
        <Route
          exact={true}
          path="/admin/dash/category/edit"
          component={AdminEditCategory}
        />
        <Route
          exact={true}
          path="/admin/dash/transaction"
          component={AdminTransaction}
        />
        <Route
          exact={true}
          path="/admin/dash/transaction/detail"
          component={AdminTransactionDetail}
        />
        <Route
          exact={true}
          path="/admin/dash/contact"
          component={AdminContact}
        />
        {/* Admin Routes */}

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
