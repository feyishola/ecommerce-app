import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './pages/layout/layout';
import Login from './pages/login/login';
import Register from './pages/register/register';
import AdminLayout from './pages/adminlayout/adminlayout';
import Cart from './pages/cart/cart';
import AdminProduct from './pages/adminproducts/adminproduct';
import Order from './pages/adminorder/order';
import Users from './pages/users/users';
import AddProduct from './pages/addproduct/addproduct';
import AddUser from './pages/adduser/adduser';
import ItemDetail from './pages/item-detail/itemdetails';


function Test(props){
  
  return(

    <div>
      <h1>Test drive</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Homepage/>}/>
              <Route path='detail/:id' element={<ItemDetail/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path='order' element={<Order/>}/>
              <Route path='logout' element={<Login/>}/>
            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<AdminProduct/>}/>
              <Route path='order' element={<Order/>}/>
              <Route path='user' element={<Users/>}/>
              <Route path='logout' element={<Login/>}/>
              <Route path='addproduct' element={<AddProduct/>}/>
              <Route path='adduser' element={<AddUser/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
