import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Todo from './pages/Todo';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={SignIn} path="/user/signin" exact />
        <Route component={SignUp} path="/user/signup" exact />
        <Route component={Forgot} path="/user/forgot" exact />
        <Route component={Todo} path="/todo/lists" exact />
      </Switch>
      <Route path="*" >
        <Redirect to="/user/signin"/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
