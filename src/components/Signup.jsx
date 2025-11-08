import React, { useState } from "react";
import "./AuthForm.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      alert("全ての項目を入力してください");
      return;
    }
    if (password !== confirm) {
      alert("パスワードが一致しません");
      return;
    }
    console.log("新規登録情報:", { email, password });
    // → 後で Cognito サインアップ処理を追加
  };

  return (
    <div className="auth-container">
      <h2>新規登録</h2>
      <form onSubmit={handleSignup}>
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
        <input
          type="password"
          placeholder="パスワード（確認用）"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">登録</button>
      </form>
      <p>
        すでにアカウントをお持ちですか？ <a href="/login">ログイン</a>
      </p>
    </div>
  );
};

export default Signup;