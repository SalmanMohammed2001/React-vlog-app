import './App.css'
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/footer.tsx";
import Home from "./views/home.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {


    return (
        <div>
            {/*header*/}

         <Header/>

            {/*main*/}
            <section>
                <Home/>
            {/*    <div className={'grid 2xl:grid-cols-5   xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 w-fit relative m-auto'}>

                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                </div>*/}



            </section>

            {/*footer*/}
            <Footer/>

            <BrowserRouter>
            </BrowserRouter>

        </div>
    )
}

export default App
