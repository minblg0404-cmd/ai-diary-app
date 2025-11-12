// src/components/DiaryModal.jsx
import React, { useState } from "react";

function DiaryModal({ diary, onClose, onSubmit }) {
  const [title, setTitle] = useState(diary?.title || "");
  const [content, setContent] = useState(diary?.content || "");
  const [error, setError] = useState("");

  const isViewMode = !!diary; // 閲覧モードかどうか

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("タイトルを入力してください");
      return;
    }
    if (!content.trim()) {
      setError("内容を入力してください");
      return;
    }
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">
          {isViewMode ? "日記の内容" : "日記を書く"}
        </h2>

        {isViewMode ? (
          <>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="whitespace-pre-wrap mb-4">{content}</p>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                閉じる
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full p-2 mb-3 border rounded focus:outline-none"
              placeholder="タイトル"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full h-40 p-2 border rounded focus:outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="今日の気持ちを書いてみましょう..."
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
            <div className="flex justify-end mt-4 gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                投稿
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default DiaryModal;