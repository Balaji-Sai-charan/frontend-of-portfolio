import React, { useEffect, useState } from 'react';
import './Greetings.css'; // Ensure you import your CSS

const greetings = [
    "నమస్కారం 🙏",
    "नमस्ते",
    "வணக்கம்",
    "ഹലോ",
    "ಹಲೋ",
    "Bonjour",
    "Hola",
    "Ciao",
    "Howdy",
    "Привет",
    "你好",
    "안녕하세요",
    "こんにちは",
    "Merhaba",
    "Salam",
    "Zdravo",
    "Hello, Hope you are doing well"
];

const Greeting = ({ onComplete }) => {
    const [currentGreeting, setCurrentGreeting] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

        const showGreeting = () => {
            if (index < greetings.length) {
                setCurrentGreeting(greetings[index]);
                
                let displayDuration = 100; // Default duration for other greetings
                if (greetings[index] === "నమస్కారం 🙏") {
                    displayDuration = 1000; // Longer duration for "Hello"
                } else if (greetings[index] === "Hello, Hope you are doing well") {
                    displayDuration = 1000; // Longer duration for last Telugu greeting
                }

                timeoutId = setTimeout(() => {
                    setIndex(prevIndex => prevIndex + 1);
                }, displayDuration);
            } else {
                timeoutId = setTimeout(() => {
                    // Add transition effect before calling onComplete
                    setCurrentGreeting(''); // Clear greeting before transitioning
                    onComplete();
                }, 300); // Short delay before transitioning
            }
        };

        showGreeting();

        return () => clearTimeout(timeoutId);
    }, [index, onComplete]);

    return (
        <div id="greeting">
            <h1>{currentGreeting}</h1>
        </div>
    );
};

export default Greeting;
