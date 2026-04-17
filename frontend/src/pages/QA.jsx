import { useState } from "react";
import API from "../api";

export default function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await API.post("ask/", { question });
    setAnswer(res.data.answer);
  };

  return (
    <div className="p-6">
      <input
        className="border p-2 w-full"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about books..."
      />
      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white p-2 mt-2 rounded"
      >
        Ask
      </button>

      <div className="mt-4">{answer}</div>
    </div>
  );
}
