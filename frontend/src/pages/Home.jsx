import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get("books/")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {books.map((book) => (
        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="font-bold text-lg">{book.title}</h2>
          <p>{book.author}</p>
          <p className="text-sm">{book.description}</p>
        </div>
      ))}
    </div>
  );
}
