import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Lip_liner } from "./Components/Products/Lip_liner";
import { ProductContextProvider } from "./Context/ContextProduct";
import { Lipstick } from "./Components/Products/Lipstick";
import { Foundation } from "./Components/Products/Foundation";
import { Eyeliner } from "./Components/Products/Eyeliner";
import { Eyeshadow } from "./Components/Products/Eyeshadow";
import { Blush } from "./Components/Products/Blush";
import { Bronzer } from "./Components/Products/Bronzer";
import { Mascara } from "./Components/Products/Mascara";
import { Eyebrow } from "./Components/Products/Eyebrow";
import { Nail_polish } from "./Components/Products/Nail_polish";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Header />
          <Routes>
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
