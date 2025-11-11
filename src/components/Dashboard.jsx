// src/components/Dashboard.jsx
import React from "react";
import { signOut } from "@aws-amplify/auth";

function Dashboard() {
  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/login";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-softCream flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-softBlue mb-6">ようこそ！</h1>
      <p className="text-gray-700 text-lg mb-6">ここがダッシュボードです。</p>
      <button
        onClick={handleLogout}
        className="bg-softPink text-white font-semibold py-2 px-4 rounded hover:bg-pink-300 transition-colors"
      >
        ログアウト
      </button>
    </div>
  );
}

export default Dashboard;