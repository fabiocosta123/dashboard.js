import "./App.css";
import { useState } from "react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const clodeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <h1>Fábio</h1>
    </div>
  );
};

export default App;
