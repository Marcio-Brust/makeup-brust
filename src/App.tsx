import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Porduto } from "./Components/Produto/Produto";
import { ProductContextProvider } from "./Context/ContextProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Porduto />} />
          </Routes>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
