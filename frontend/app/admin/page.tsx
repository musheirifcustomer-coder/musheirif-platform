<div
  style={{
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  }}
>
  <h2>لوحة تحكم مركز مشيرف</h2>
  <p>إدارة العاملات بسهولة واحترافية</p>
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 15,
  }}
>
  {workers.map((w) => (
    <div
      key={w.id}
      style={{
        background: "white",
        borderRadius: 15,
        padding: 15,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
      }}
    >
      {/* IMAGE */}
      <div style={{ textAlign: "center" }}>
        {w.image ? (
          <img
            src={w.image}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "#ddd",
              margin: "auto",
            }}
          />
        )}
      </div>

      {/* INFO */}
      <h3 style={{ marginTop: 10 }}>{w.name}</h3>
      <p>🌍 {w.nationality}</p>
      <p>🎂 {w.age} سنة</p>
      <p>💰 {w.salary} AED</p>

      {/* STATUS */}
      <span
        style={{
          padding: "5px 10px",
          background: w.status === "available" ? "green" : "red",
          color: "white",
          borderRadius: 10,
          fontSize: 12,
        }}
      >
        {w.status}
      </span>

      {/* BUTTONS */}
      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        <button
          onClick={() => deleteWorker(w.id)}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: 5,
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          حذف
        </button>
      </div>
    </div>
  ))}
</div>
background: "linear-gradient(180deg, #0f172a, #111827)",
boxShadow: "2px 0 10px rgba(0,0,0,0.3)",
button {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
}
background: "#2563eb",
color: "white"
useEffect(() => {
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
    return;
  }

  checkAuth();
}, []);
const checkAuth = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/workers", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401 || res.status === 403) {
    localStorage.removeItem("token");
    router.push("/login");
    return;
  }

  const data = await res.json();
  setWorkers(data);
};