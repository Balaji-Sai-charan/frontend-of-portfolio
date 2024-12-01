import React, { useEffect, useState } from 'react';
import './Greetings.css';

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
                
                let displayDuration = 100;
                if (greetings[index] === "నమస్కారం 🙏") {
                    displayDuration = 1000;
                } else if (greetings[index] === "Hello, Hope you are doing well") {
                    displayDuration = 1000;
                }

                timeoutId = setTimeout(() => {
                    setIndex(prevIndex => prevIndex + 1);
                }, displayDuration);
            } else {
                timeoutId = setTimeout(() => {
                    // Add transition effect before calling onComplete
                    setCurrentGreeting('');
                    onComplete();
                }, 300); 
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
