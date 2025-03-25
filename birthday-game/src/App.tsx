import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/next" element={<div>Next Scene Placeholder</div>} />
            </Routes>
        </Router>
    );
};

export default App;
