"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000")  // Make sure FastAPI is running
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-bold">Message from Backend:</h1>
      <p className="mt-2">{message || "Loading..."}</p>
    </main>
  );
}
