import "./App.css";
import Header from "./components/component/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeftTodo from "./pages/todopages/LeftTodo";
import TodayTodo from "./pages/todopages/TodayTodo";
import ExpiredTodo from "./pages/todopages/ExpiredTodo";
import CompletedTodo from "./pages/todopages/CompletedTodo";
import Footer from "./components/component/Footer";

// react lib - "import from react"
// 주변 lib - "dom"
// third
// custom - "사용자가 직접 구현한 컴포넌트"
// hooks - "함수묶음"
// css

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/left" element={<LeftTodo />} />
        <Route path="/today" element={<TodayTodo />} />
        <Route path="/expired" element={<ExpiredTodo />} />
        <Route path="/completed" element={<CompletedTodo />} />
      </Routes> 
      <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
