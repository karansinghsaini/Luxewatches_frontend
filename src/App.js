import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/login/login';
import Register from './Components/login/register';
// import {Menu} from './Components/navbar';
import Home from './Components/Home/home';
import {Admin} from './Components/Admin/index';
import {Addwatches} from './Components/Admin/addwatches';
import {Profile} from './Components/Profile/index';
import {Password} from './Components/Profile/password';
import ResponsiveAppBar from './Components/appbar';
import {Address} from './Components/Profile/address';
import {ProductDetails} from './Components/Product/index';
import {Review} from './Components/Product/review';
function App() {
  var isAdmin = true
  return (
    <div className="App">
      <ResponsiveAppBar/ >
       <BrowserRouter>
                  <Switch>
                    {/* {/* { !check && <Route exact path='/' component={Register} /> } */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route path='/register' component={Register} />
                    { isAdmin && <Route path='/network' render={ () => <Admin dashboard="users" />} />}
                    { isAdmin && <Route path='/products' render={ () => <Admin dashboard="watches" />} />}
                    <Route path='/add_watches/:watch_id' component={Addwatches} />
                    <Route path='/login' component={Login} />  
                    <Route path='/profile' component={Profile} />
                    <Route path='/address' component={Address} />
                    <Route path='/write_review' component={Review} />
                    <Route path='/change_password' component={Password} />
                    <Route path='/product_detail/:watch_id' component={ProductDetails} />
                  </Switch>

          </BrowserRouter>
    </div>
  );
}

export default App;
