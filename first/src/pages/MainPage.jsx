import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column">
      <h1>Hoşgeldiniz!</h1>
      <img
        src="./../../public/welcome.jpg"
        className="w-100 rounded-3"
        alt=""
      />
      <p>
        <Link to={"/ürünler"}>Ürünler sayfasında</Link> yeni çıkan bütün
        kitaplara ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
