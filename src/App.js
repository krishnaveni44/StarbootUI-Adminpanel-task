import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/fontawesome-free/css/all.min.css";
import { Cards } from "./Cards";
import { FirstRow } from "./FirstRow";
import { Charts } from "./Charts";
import { UtilitiesAnimation } from "./UtilitiesAnimation";
import { UtilitiesBorders } from "./UtilitiesBorders";
import { UtilitiesColors } from "./UtilitiesColors";
import { Tables } from "./Tables";
import { Register } from "./Register";
import { Login } from "./Login";
import { ForgotPassword } from "./ForgotPassword";
import { Error404 } from "./Error404";
import { Blank } from "./Blank";
import { UserProvider } from "./UserContext";
import { LeftSide } from "./LeftSide";
import Dashboard from "./Dashboard";



export default function App() {
 
 return (
<div className="App" id="wrapper">
<LeftSide />
<div id="content-wrapper" className="d-flex flex-column">
<div id="content">
  <Navigation />
<Switch>
        <Route path="/" component={Dashboard} exact />
             
    <Route path="/buttons" exact>
        <UserProvider>
            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
           <FirstRow /> 
        </UserProvider>
    </Route>

   <Route path="/colors" exact>
        <UtilitiesColors />
  </Route>
  <Route path="/borders" exact>
        <UtilitiesBorders />
  </Route>
  <Route path="/animations" exact>
        <UtilitiesAnimation />
  </Route>


   <Route path="/login" exact>
        <Login />
  </Route>
  <Route path="/register" exact>
         <Register />
</Route>
<Route path="/forgotpassword" exact>
       <ForgotPassword />
</Route>
  <Route exact path="/404">
  <Error404 />
  <Route path="/blank-page" exact>
        <Blank />
</Route>
  </Route>
   <Route path="/charts" exact>
         <UserProvider>
           <Charts />
         </UserProvider>
   </Route>
   <Route path="/tables" exact>
         <UserProvider>
           <Tables />
         </UserProvider>
   </Route>

</Switch>

</div>
</div>
</div>
  );
  }


  function Navigation() {
    return (
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul class="navbar-nav ml-auto">

                <li class="nav-item dropdown no-arrow d-sm-none">
                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-search fa-fw"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form class="form-inline mr-auto w-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bell fa-fw"></i>
                        <span class="badge badge-danger badge-counter">3+</span>
                    </a>
                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                        <h6 class="dropdown-header">
                            Alerts Center
                        </h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                    <i class="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 12, 2019</div>
                                <span class="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="mr-3">
                                <div class="icon-circle bg-success">
                                    <i class="fas fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="mr-3">
                                <div class="icon-circle bg-warning">
                                    <i class="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-envelope fa-fw"></i>
                        <span class="badge badge-danger badge-counter">7</span>
                    </a>
                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                        <h6 class="dropdown-header">
                            Message Center
                        </h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="font-weight-bold">
                                <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                                <div class="status-indicator"></div>
                            </div>
                            <div>
                                <div class="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                <div class="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                                <div class="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div class="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <img class="img-profile rounded-circle" src="img/undraw_profile.svg" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
  }




























{/* 

  // import React, { createContext, useContext, useState } from 'react';
// import './App.css';
// import Card from './components/Card';
// import Form from './components/Card';
// //import StoreProvider from './store';

// const Store = createContext();
// export const useStore = () => useContext(Store);

// const InputComponent = ( */}
//   {
//   action, value
//   }
//   ) => {
//   return(
//     <form>
//     <input type={'text'} onChange = {action} value={value} />
    
//     </form>
    
//   )
// }

// const initialState = {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: '',
//   email: '',
//   mobileno: ''
// }

// export default function App() {

//       const [firstName, setFirstName] = useState('Krishna');
//       const [lastName, setLastName] =useState('Veni');
//       const [email, setEmail] = useState('krishnaveni44@gmail.com');
//       const [mobileno, setMobileno] =useState('9566209664');
      

//   return(
    
//     <Store.Provider>
//       <div>
//       <img src={initialState.imgUrl} alt="Avatar" style={{width: "20%"}} />
//       </div>
//       <div>
//       <InputComponent value = {firstName} action={(e)=>setFirstName(e.target.value)}/>
//       <InputComponent value = {lastName} action={(e)=>setLastName(e.target.value)}/>
//       <InputComponent value = {email} action={(e)=>setEmail(e.target.value)}/>
//       <InputComponent value = {mobileno} action={(e)=>setMobileno(e.target.value)}/>
//       </div>
//     </Store.Provider>
//   )
// }


// <button onClick={action}>Change</button> 




// const data = [{
//     imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//     name: 'Krishnaveni',
//     email: 'krishnaveni44@gmail.com',
//     number: '9566209664'
//   },
//    {
//     imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//     name: 'Krishnaveni',
//     email: 'krishnaveni44@gmail.com',
//     number: '9566209664'
//   },
//   {
//     imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//     name: 'Krishnaveni',
//     email: 'krishnaveni44@gmail.com',
//     number: '9566209664'
//   }]

//   const InputComponent = ({
//     action,value
//   }) => {
//     return(
//       <input type={'text'} onChange={action} value={value} />
//     )
//   }


//   export default function App() {
//     let [name, setValue] = useState("");
//     let [email, setEmail] = useState("");
//     let [mobileno, setMobileno] = useState("");
  
//     const action = () => {
      
//       setValue(name)
//       setEmail(email)
//       setMobileno(mobileno)
//     }
//   // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_multiple
//      return (
      
//       <div>
        
//         <div className="container">

//           <div className="image">
//             <Form imgUrl="https://www.w3schools.com/howto/img_avatar.png"
//             name={name} email={email} number={mobileno} action={action} />
//           </div>

//            <div>
//            <InputComponent value={name} action={(e) => { 
//              setValue(e.target.value)
//             }}/>  <br/>
            
//             <InputComponent value={email} action={(e) => { 
//              setEmail(e.target.value)
//             }}/>    <br/>

//             <InputComponent value={mobileno} action={(e) => { 
//              setMobileno(e.target.value)
//             }}/>    <br/>

// <input type="checkbox" name="text"/>Send me my trip updates on Whatsapp<br/>
//   <br/>

//            </div> 
          
//         </div>
        
//       </div>
//     )
//   }


{/* <label type="email" id="email" name ="email">Email</label><br/>
        <input type="text" onChange={(e) => {setEmail(e.target.value)
        }} value={email} placeholder= "Email"/> 
        
<input type="text" onChange={(e) => {setValue(e.target.value)
             }} value={name}  placeholder="Your Name"/> 

<input type="checkbox" name="text"/>Send me my trip updates on Whatsapp<br/>

        <label type="number" name ="">Mobile Number</label><br/>
        <input type="number" onChange={(e) => { setNumber(e.target.value)
        }} value={number} placeholder="Mobile Number" /> <br/><br/> */}




// const data = [{
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }, {
//   imgUrl: 'https://www.w3schools.com/howto/img_avatar.png',
//   name: 'John',
//   title: 'Engineer'
// }]
// export default function App() {
//   let [name, setValue] = useState("John");
//   let [title, setTitle] = useState("Engineer");

//   const action = () => {
//     setTitle(name)
//   }

//   return (
//     <div>
//       <input type="text" onChange={(e) => {
//         setValue(e.target.value)
//       }} value={name} /> 
//       <br/>
//       <Card imgUrl="https://www.w3schools.com/howto/img_avatar.png"
//        name={name} title={title} action={action} />
//     </div>
//   )
// }

