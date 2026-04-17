import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <h2 className="font-bold text-lg">{book.title}</h2>
      <p className="text-sm">{book.author}</p>
      <Link to={`/book/${book.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
}
