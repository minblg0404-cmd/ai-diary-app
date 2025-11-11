import React, { useState } from "react";
import { signIn } from "@aws-amplify/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn({
        username: email, // ← emailをusernameとして指定
        password,
      });
      console.log("ログイン成功:", user);
      alert("ログインしました！");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-softCream">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-softPink text-center">
          ログイン
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="mt-4 bg-softPink text-white font-semibold py-2 rounded hover:bg-pink-300 transition-colors"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;