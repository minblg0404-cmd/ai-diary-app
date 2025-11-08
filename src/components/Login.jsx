import React, { useState } from "react";
import "./AuthForm.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }
    console.log("ログイン情報:", { email, password });
    // → ここに後で Cognito ログイン処理を追加
  };

  return (
    <div className="auth-container">
      <h2>ログイン</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ログイン</button>
      </form>
      <p>
        アカウントがありませんか？ <a href="/signup">新規登録</a>
      </p>
    </div>
  );
};

export default Login;