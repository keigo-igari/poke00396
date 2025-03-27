//import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // React Router v6に合わせて修正
import reactLogo from "./assets/pokemon.png";
import "./App.css";
import NewComponent from "./newTest"; // 新しいコンポーネントをインポート

function App() {
  return (
    <Router> {/* Routerでアプリ全体を囲む */}
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="logo react" alt="React logo" />

          <h1>Hello</h1>
          
          {/* ボタンをクリックしたときにNewComponentに遷移 */}
          <Link to="/new-page">
            <button>ボタン</button>
          </Link>
        </header>
        
        {/* Routesに変更 */}
        <Routes>
          <Route path="/new-page" element={<NewComponent />} />
          {/* 他のルートを必要に応じて追加 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;