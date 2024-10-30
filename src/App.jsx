import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./blog/Blog";
import Mail from "./mail/Mail";
import CreateArticle from "./blog/CreateArticle";
import EditArticle from "./blog/EditArticle";
import ArticleLayout from "./layout/ArticleLayout";
import CreateMail from "./mail/CreateMail";
import EditMail from "./mail/EditMail";
import Settings from "./settings/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes avec MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/createarticle" element={<CreateArticle />} />
          <Route path="/createmail" element={<CreateMail />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Route avec ArticleLayout spécifique pour la page article */}
        <Route element={<ArticleLayout />}>
          <Route path="/editarticle" element={<EditArticle />} />
          <Route path="/editmail" element={<EditMail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
