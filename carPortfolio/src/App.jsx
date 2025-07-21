// import { RouterProvider } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Services from './pages/Services.jsx';
// import Cars from './pages/Cars.jsx';
// import Layout from './Layout.jsx';
// import Register from './pages/Register.jsx';
// // import Forms from './components/Login/Forms.jsx'
// import Login from './pages/Login.jsx';
// import ProtectedRoute from './components/Login/ProtectedRoute.jsx';
// import CarNews from './components/CarNews/Carnews.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
//       <Route path="Cars" element={<Cars />} />
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//       <Route path="news" element={<CarNews />} />
//     </Route>
//   )
// );

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   );
// };

// export default App;
import { RouterProvider } from "react-router-dom";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Cars from "./pages/Cars.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import CarNews from "./components/CarNews/Carnews.jsx";
import ProtectedRoute from "./components/Login/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="services"
        element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        }
      />
      <Route path="cars" element={<Cars />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="news"
        element={
          <ProtectedRoute>
            <CarNews />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
