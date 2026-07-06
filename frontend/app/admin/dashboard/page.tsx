"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [workers, setWorkers] = useState<any[]>([]);

  const fetchWorkers = async () => {
    const res = await fetch("http://localhost:5000/api/workers");
    const data = await res.json();
    setWorkers(data);
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  const total = workers.length;
  const available = workers.filter(w => w.status === "available").length;
  const unavailable = total - available;

  return (
    <div>
      <h2>📊 Dashboard</h2>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        
        <div style={cardStyle}>
          <h3>إجمالي العاملات</h3>
          <h1>{total}</h1>
        </div>

        <div style={cardStyle}>
          <h3>المتاحات</h3>
          <h1>{available}</h1>
        </div>

        <div style={cardStyle}>
          <h3>غير المتاح</h3>
          <h1>{unavailable}</h1>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: 20,
  borderRadius: 10,
  width: 200,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};