
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


import Home from './components/Home'
import Health from './comp/Health'
import Term from './comp/Term'
import Fire from './comp/Fire'
import Bike from './comp/Bike'
import Car from './comp/Car'
import House from './comp/House'
import Travell from './comp/Travell'
import Life from './comp/Life'
import About from './components/About'
import Contact from './components/Contact'
import LoginUser from './components/LoginUser'
import LoginAs from './LoginAs'
import UserProfile from './components/UserProfile'
import UpdateUser from './Admin/UpdateUser'
import AdminLogin from './Admin/AdminLogin'
import UserDetails from './Admin/UserDetails'
import DashBoard from './Admin/DashBoard'
import PrivateRoute from './PrivateRoute'
import MyPolicy from './components/MyPolicy'
import Password from './components/Password'
import AddUser from './components/AddUser'
import Login from './Login'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<LoginAs/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/userlogin' element={<LoginUser/>}/>
            <Route path={'/adminlogin' } element={<AdminLogin/>}/> */}
            <Route path={'/adduser'} element={<AddUser/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/mypolicy' element={<MyPolicy/>}/>
              <Route path='/register/health'element={<Health/>}/>
              <Route path='/register/term' element={<Term/>}/>
              <Route path='/register/fire' element={<Fire/>}/>
              <Route path='/register/bike' element={<Bike/>}/>
              <Route path='/register/car' element={<Car/>}/>
              <Route path='/register/house' element={<House/>}/>
              <Route path='/register/travell' element={<Travell/>}/>
              <Route path='/register/life' element={<Life/>}/>
              <Route path='/updatePassword' element={<Password/>}/>
              <Route path='/profile' element={<UserProfile/>}/>
              <Route path='/update/:id' element ={<UpdateUser/>}/>
              <Route path='/dashboard/userdetails'element = {<UserDetails/>}/>
              <Route path='/dashboard' element = {<DashBoard/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
