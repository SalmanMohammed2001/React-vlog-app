import './App.css'
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/footer.tsx";
import Home from "./views/home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/login.tsx";

function App() {


    return (
        <div>
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                    </Routes>

                <Footer/>
            </BrowserRouter>

        </div>
    )
}

export default App
