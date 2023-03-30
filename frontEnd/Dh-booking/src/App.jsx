import { MainLayout } from "./pages/MainLayout";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Routes } from "./routes";

export function App() {
  return(
    <Routes />
  )
}
