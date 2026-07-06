"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: any) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div style={{ display: "flex", fontFamily: "Arial" }}>
      
      {/* SIDEBAR */}
      <div style={sidebarStyle}>
        <h2>🏢 مشيرف</h2>

        <Link href="/admin/dashboard">📊 Dashboard</Link><br />
        <Link href="/admin">👩 العاملات</Link><br />
        <Link href="/admin">➕ إدارة</Link><br />

        <button onClick={logout} style={logoutBtn}>
          تسجيل خروج
        </button>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, padding: 20, background: "#f5f5f5" }}>
        {children}
      </div>
    </div>
  );
}

const sidebarStyle = {
  width: 220,
  height: "100vh",
  background: "#0f172a",
  color: "white",
  padding: 20,
};

const logoutBtn = {
  marginTop: 20,
  width: "100%",
  background: "red",
  color: "white",
  padding: 10,
};