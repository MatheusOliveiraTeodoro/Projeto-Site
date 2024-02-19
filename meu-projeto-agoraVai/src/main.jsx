import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css";
import App from "./App"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import de rotas
import Home from './routes/Home';
import Profissionais from './routes/Profissionais';
import SobreMim from './routes/SobreMim';
import Portfolios from './routes/Portfolio';

const router = createBrowserRouter([

  {
    path: "/",
    Element: <Home />
  },

  {
    path: "Profissionais",
    Element: <Profissionais />
  },

  {
    path: "SobreMim",
    Element: <SobreMim />
  },

  {
    path: "Portfolios",
    Element: <Portfolios />
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


)