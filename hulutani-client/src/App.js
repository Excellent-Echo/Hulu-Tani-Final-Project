import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/user/landing';
import Login from './pages/user/login';
import Register from './pages/user/register';
import UserEdit from './pages/user/useredit';
import AdminLogin from './pages/admin/AdminLoginPage';

function App() {
  return (
      <Router>
        <Switch>
          {/* User Routes */}
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/user-detail">
            <UserEdit />
          </Route>
          {/* Admin Routes */}
          <Route path="/tpanel">
            <AdminLogin/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
