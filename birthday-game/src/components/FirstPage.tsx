import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";

const FirstPage: React.FC = () => {
    const navigate = useNavigate();

    const handleChoice = (choice: string) => {
        console.log(`You chose: ${choice}`);
        navigate("/next");  // 👉 Navigate to the next scene
    };

    return (
        <div className="first-page">
            <div className="narrator-box">
                <p>You awaken in a frozen wasteland. The air is heavy with frost, and your breath crystallizes. 
                A voice echoes in your mind...</p>
                <p><i>"Choose your path, Cryomancer..."</i></p>
            </div>

            <div className="options">
                <button onClick={() => handleChoice("Explore the ruins")}>
                    🏰 Explore the ruins
                </button>
                <button onClick={() => handleChoice("Find a campfire")}>
                    🔥 Find a campfire
                </button>
            </div>
        </div>
    );
};

export default FirstPage;
