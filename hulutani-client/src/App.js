import "./App.css";
import CartProvider from "./redux/user/cart/cartReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/route/PrivateRoute";

//Public
import LandingPage from "./pages/user/landing";
import ProdukList from "./pages/user/produklist";
import ProdukDetail from "./pages/user/produkdetail"
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import RegisterNext from "./pages/user/registernext"

//User
import UserEdit from "./pages/user/useredit";
import UserTransaksi from "./pages/user/usertransaksi";
import UserAlamat from "./pages/user/useralamat";
import KantongBelanja from "./pages/user/kantongbelanja"

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
    <CartProvider>
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
        <Route path="/products">
          <ProdukList />
        </Route>
        <Route path="/product/:id">
          <ProdukDetail />
        </Route>
        <Route path="/cart">
          <KantongBelanja />
        </Route>
        {/* Private */}
        <PrivateRoute path="/user-edit" component={UserEdit}/>
        <PrivateRoute path="/user-transaction" component={UserTransaksi}/>
        <PrivateRoute path="/user-address" component={UserAlamat}/>
        <PrivateRoute path="/cart" component={KantongBelanja}/>
        {/* Private */}

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
    </CartProvider>
  );
}

export default App;