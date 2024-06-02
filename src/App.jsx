
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Portfolio from './components/Portfolio/Portfolio';

 

export default function App() {

 let router = createBrowserRouter([
 {path:'', element: <Layout />,children:[
  {index: true, element: <Home />},
  {path:'about', element: <About />},
  {path:'portfolio', element: <Portfolio />},
  {path:'contact',element: <Contact />},
  {path:'*',element:<NotFound />},
 ]}
])




  return <>
  
  <RouterProvider router={router} ></RouterProvider>
  
  
  </>
}


