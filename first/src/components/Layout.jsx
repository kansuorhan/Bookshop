import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

/*
    * Layout ekstra ayarlar ve kategoriler sayfasını kapsayan route'a verdiğimi bir bileşendir.
    * Kapsayıcı route'a bileşen verdiğimiz zaman alt route'lardan hangisine gidersek gidelim kapsayıcı route'un bileşeni
    * ile karşılaşırız.
    * Nested Route

*/

const Layout = () => {
  const navigate = useNavigate();
  // apiden alındığını varsayalım
  const user = {
    name: "Ahmet",
    type: "admin",
  };

  // eğerki kullanıcı tipi admin değilse alt routelara erişme izni verme
  if (user.type !== "admin") {
    //? 1) hook kullanımı
    // navigate("/");
    //? 2)Bileşen ile yönlendirme
    return <Navigate to={"/"} />;
  }
  return (
    <div className="d-flex gap-5 p-4">
      <aside className="d-flex flex-column bg-light p-3 rounded gap-3">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>
      <div>
        {/*
         * Asıl Sayfa İçeriği
         * Alt route'un kapsayıcı route içerisinde hangi noktada ekrana basılacağını belirler
         */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
