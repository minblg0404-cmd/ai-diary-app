// src/components/ConfirmSignUp.jsx
import React, { useState } from "react";
import { confirmSignUp } from "@aws-amplify/auth";

function ConfirmSignUp() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      await confirmSignUp({
        username: email,
        confirmationCode: code,
      });
      alert("確認が完了しました。ログインできます。");
      window.location.href = "/login";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-softCream">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-softPink text-center">
          確認コード入力
        </h2>
        <form onSubmit={handleConfirm} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="登録したメールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="確認コード"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="mt-4 bg-softPink text-white font-semibold py-2 rounded hover:bg-pink-300 transition-colors"
          >
            確認
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmSignUp;