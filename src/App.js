import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <NavBar></NavBar>
                </header>
                
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
    
                    <Route path="/detail/:itemid" element={<ItemDetailContainer/>}/>
    
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}    

export default App;