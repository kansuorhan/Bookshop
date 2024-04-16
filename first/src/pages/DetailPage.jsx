import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const [book, setBook] = useState(null);
  // useNavigate fonksiyonu çağırıp yönlendirme görevini yapacak olan fonksiyona erişme
  const navigate = useNavigate();

  //1) urldeki id parametresini al
  // useParams url'e eklenmiş olan pathParams'a erişim sağlar
  const { id } = useParams();

  //2) id'sini bildiğimiz kitabın bilgilerini api'den al
  useEffect(() => {
    axios
      .get('http://localhost:3060/books/${id}')
      .then((res) => setBook(res.data))
      .catch((err) =>
        // ürünün bilgisini api'den gelmediyse
        // kullanıcıyı 404 sayfasına yönlendir
        // hata mesajını 404 sayfasına aktar
        navigate("/undefined", { state: err.message })
      );
  }, []);

  return (
    <div>
      {/* kitap verisi gelmediyse yükleniyor bas */}
      {!book && <p>Yükleniyor...</p>}
      {/* kitap verisi geldiyse içieriği ekrana bas */}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow"
              style={{ maxWidth: "400px" }}
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-content-center my-3">
            <h1>{book.title}</h1>
            <div>
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklma" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

// 2.component
const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{label}:</span>
      <span>{value}</span>
    </p>
  );
};
