"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      router.push("/admin");
    } else {
      alert("بيانات خاطئة ❌");
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>تسجيل الدخول</h1>

      <input
        placeholder="اسم المستخدم"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="كلمة المرور"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>دخول</button>
    </div>
  );
}