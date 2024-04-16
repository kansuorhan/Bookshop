import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import FilterArea from "../components/FilterArea";
import Card from "../components/Card";
const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");
  // Bileşenin ekrana basılma anında çalışır
  useEffect(() => {
    const params = {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query,
    };

    axios
      .get("http://localhost:3060/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div className="my-5 p-5">
      <h3>{books?.length} kitap bulundu.</h3>
      <FilterArea />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 mt-3">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
