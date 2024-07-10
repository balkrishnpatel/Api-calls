import Posts from './components/user/Posts';
import Comments from './Comments';
import Recipes from './components/recipes/Recipes';
import CartDetails from './components/carts/CartDetails';
import Carts from './components/carts/Carts';
import SingleProduct from './components/product/SingleProduct';
import FetchImage from './components/FetchImage.js';
import { Routes, Route } from 'react-router-dom';
import Login from './components/user/Login';
import SingleUser from './components/user/SingleUser';
import AddNewUser from './components/user/AddNewUser';
import Users from './components/user/Users';
import { Navbar } from './Navbar';
const App = () => { 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="singleuser" element={<SingleUser/>} />
        <Route path="<SingleProduct/>" element={<SingleProduct/>}></Route>
        <Route path="addnewuser" element={<AddNewUser />} />
        <Route path="carts" element={<Carts/>}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="posts" element={<Posts/>}></Route>
        <Route path="comments" element={<Comments/>}></Route>
        <Route path="cartDetails" element={<CartDetails/>}></Route>
        <Route path="recipes" element={<Recipes/>}></Route>
        <Route path="<FetchImage />" element={<FetchImage />}></Route>
      </Routes>
      </>
  );
};
export default App;
