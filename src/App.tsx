import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";

import { ProductContextProvider } from "./Context/ContextProduct";

import { Blush } from "./Components/Products/Pages/Blush";
import { Lip_liner } from "./Components/Products/Pages/Lip_liner";
import { Lipstick } from "./Components/Products/Pages/Lipstick";
import { Foundation } from "./Components/Products/Pages/Foundation";
import { Eyeliner } from "./Components/Products/Pages/Eyeliner";
import { Eyeshadow } from "./Components/Products/Pages/Eyeshadow";
import { Bronzer } from "./Components/Products/Pages/Bronzer";
import { Mascara } from "./Components/Products/Pages/Mascara";
import { Eyebrow } from "./Components/Products/Pages/Eyebrow";
import { Nail_polish } from "./Components/Products/Pages/Nail_polish";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lip_liner" element={<Lip_liner />} />
            <Route path="/lipstick" element={<Lipstick />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/eyeliner" element={<Eyeliner />} />
            <Route path="/eyeshadow" element={<Eyeshadow />} />
            <Route path="/blush" element={<Blush />} />
            <Route path="/bronzer" element={<Bronzer />} />
            <Route path="/mascara" element={<Mascara />} />
            <Route path="/eyebrow" element={<Eyebrow />} />
            <Route path="/nail_polish" element={<Nail_polish />} />
          </Routes>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
