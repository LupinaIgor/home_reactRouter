import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React,{Component} from "react";


import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
    <div className="App">
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contacts" element={<ContactsPage />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>

            <ToastContainer/>

    </div>
            </BrowserRouter>
        );
    }
}

export default App;
