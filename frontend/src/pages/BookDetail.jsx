import { useEffect, useState } from "react";
import API from "../api";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    API.get(`books/${id}/`).then((res) => setBook(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}
