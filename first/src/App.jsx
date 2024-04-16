import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./components/Layout";

function App() {
  /*
   * Tarayıcıdaki url'e göre ekrana hangi bileşenin basılacağını belirler
   * react-router-dom tarayıcıdaki url'e window nesnesi ile erişir.
   */
  return (
    <>
      <BrowserRouter>
        {/* browserrouter:routes dışında bütün sayfalar için ortak */}
        <Header />
        {/* Projedeki sayfaları tanımladığımız bir kapsayıcıdır */}
        <Routes>
          {/*
           * Route:Projedeki her bir sayfa için tanımlanır.
           * Route'a yol ve o yol için ekrana basılacak olan bileşen verilir
           */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />
          {/* Dynamic Route */}
          <Route path="/ürünler/ürün/:id" element={<DetailPage />} />
          {/* Nested Routes: İç İçe Yollar */}
          <Route path="/ekstra" element={<Layout />}>
            <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
            <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
            <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
          </Route>

          {/* Undefined Route: Tanımsız bir routea yönlenirse */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* Routes dışında:Bütün  sayfalar için ortak */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
