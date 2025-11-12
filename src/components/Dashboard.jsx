// src/components/Dashboard.jsx
import React, { useState } from "react";
import { signOut } from "@aws-amplify/auth";
import DiaryModal from "./DiaryModal";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDiary, setSelectedDiary] = useState(null);
  const [diaries, setDiaries] = useState([]);

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/login";
    } catch (err) {
      alert(err.message);
    }
  };

  const handleNewDiary = ({ title, content }) => {
    const newDiary = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString("ja-JP"),
    };
    setDiaries([newDiary, ...diaries]);
    setShowModal(false);
  };

  const handleDiaryClick = (diary) => {
    setSelectedDiary(diary);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDiary(null);
  };

  return (
    <div className="min-h-screen bg-softCream flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-softBlue mb-6">ようこそ！</h1>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-softPink text-white font-semibold py-2 px-4 rounded hover:bg-pink-300 transition-colors"
        >
          日記を書く
        </button>
        <button
          onClick={handleLogout}
          className="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-500 transition-colors"
        >
          ログアウト
        </button>
      </div>

      <div className="w-full max-w-md">
        {diaries.length === 0 ? (
          <p className="text-gray-600 text-center">まだ日記がありません。</p>
        ) : (
          diaries.map((d) => (
            <div
              key={d.id}
              onClick={() => handleDiaryClick(d)}
              className="bg-white rounded-xl shadow p-4 mb-3 cursor-pointer hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg text-softBlue mb-1">
                {d.title}
              </h3>
              <p className="text-gray-800 line-clamp-2 overflow-hidden">
                {d.content}
              </p>
              <p className="text-sm text-gray-500 text-right mt-2">{d.date}</p>
            </div>
          ))
        )}
      </div>

      {/* 新規投稿モーダル */}
      {showModal && (
        <DiaryModal onClose={handleCloseModal} onSubmit={handleNewDiary} />
      )}

      {/* 日記詳細モーダル */}
      {selectedDiary && (
        <DiaryModal diary={selectedDiary} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Dashboard;