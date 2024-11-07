import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 簡單的前端驗證
    if (name.trim().length < 3) {
      setMessage('名字必須至少包含 3 個字元');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('伺服器錯誤，請稍後再試');
    }
  };

  return (
    <div>
      <h2>用戶註冊</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">姓名:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <button type="submit">提交</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;