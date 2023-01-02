import {BrowserRouter, Navigate, Route, Routes, Outlet} from "react-router-dom";
import Welcome from "../screens/Welcome";
import SignInForm from "../screens/SignIn/SignInForm";
import SignUpForm from "../screens/SignUp/SignUpForm";
import Activities from "../screens/Activities/Activities";
import Page404 from "../screens/404 Page/Page404";
import isUserAuth from "./userAuth";

const PrivateRoutes = () => {
  const getUser = isUserAuth();

  return (
    getUser ? <Outlet/> : <Navigate to='/sign-in'/>  
  )
}

const IsSignedIn = () => {
  const getUser = isUserAuth();

  return (
    getUser ?  <Navigate to='/activities'/> : <Outlet/>  
  )
}

export default function RoutesApp () {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />

        <Route element={<IsSignedIn/>}>
          <Route path="/sign-in" element={<SignInForm/>}/>
        </Route>

        <Route  element={<PrivateRoutes/>}>
          <Route path="/activities" element={<Activities />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
        <Route exact path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
};


