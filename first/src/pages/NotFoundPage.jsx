import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Aradığınız sayfa bulunamadı.</h1>
      <p>
        Böyle bir sayfa bulunamıyor.Anasayfaya dönüp başka bir şey
        arayabilirsiniz.
      </p>
      <Link to={"/"}>Anasayafaya dön</Link>
    </div>
  );
};

export default NotFoundPage;
