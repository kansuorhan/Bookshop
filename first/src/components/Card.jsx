import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-1 my-3">
      <img src={book.image} alt="" style={{ maxWidth: "400px" }} />
      <div className="my-3">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>
      <Link to={`ürün/${book.id}`} className="btn btn-primary">
        Kitap Detayı İçin Tıklanıyız
      </Link>
    </div>
  );
};

export default Card;
