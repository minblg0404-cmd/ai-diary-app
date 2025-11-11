// src/auth/signOut.js
import { signOut } from "aws-amplify/auth";

export const handleSignOut = async () => {
  try {
    await signOut();
    window.location.href = "/login"; // サインアウト後にログインページへ遷移
  } catch (error) {
    console.error("サインアウトエラー:", error);
    alert("サインアウトに失敗しました。");
  }
};