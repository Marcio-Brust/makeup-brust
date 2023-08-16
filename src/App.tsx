import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Porduto } from "./Components/Produto/Produto";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Porduto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
