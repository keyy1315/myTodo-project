import "./App.css";
import Header from "./component/Header";
import { TodoProvider } from "./context/TodoContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeftTodo from "./pages/todopages/LeftTodo";
import TodayTodo from "./pages/todopages/TodayTodo";
import ExpiredTodo from "./pages/todopages/ExpiredTodo";
import CompletedTodo from "./pages/todopages/CompletedTodo";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <TodoProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/left" element={<LeftTodo />} />
          <Route path="/today" element={<TodayTodo />} />
          <Route path="/expired" element={<ExpiredTodo />} />
          <Route path="/completed" element={<CompletedTodo />} />
        </Routes> 
        <Footer />
      </TodoProvider>
    </div>
  );
}

export default App;
