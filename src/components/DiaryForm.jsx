import React, { useState } from "react";

const DiaryForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 入力チェック
    if (!text.trim()) {
      setError("日記の内容を入力してください。");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      // 後で Lambda や API に送信する部分（今はテスト）
      console.log("送信データ:", text);

      alert("日記を送信しました！");
      setText(""); // 入力リセット
    } catch (err) {
      console.error("送信エラー:", err);
      setError("送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-2xl mt-10">
      <h2 className="text-xl font-bold mb-4 text-gray-700">日記を入力</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="5"
          placeholder="今日の出来事や気持ちを書いてみましょう..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

        <button
          type="submit"
          className="mt-4 w-full bg-softPink text-white py-2 rounded-lg hover:bg-pink-300 disabled:opacity-50"
            // className="mt-4 bg-softPink text-white font-semibold py-2 rounded hover:bg-pink-300 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "送信中..." : "送信"}
        </button>
      </form>
    </div>
  );
};

export default DiaryForm;