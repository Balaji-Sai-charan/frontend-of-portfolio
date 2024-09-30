import React, { useEffect, useState } from 'react';
import './Greetings.css'; 
const greetings = [
    "Hello",
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
    "నమస్కారం 🙏"
];

const Greeting = ({ onComplete }) => {
    const [currentGreeting, setCurrentGreeting] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

        const showGreeting = () => {
            if (index < greetings.length) {
                setCurrentGreeting(greetings[index]);
                
                let displayDuration = 80;
                if (greetings[index] === "Hello") {
                    displayDuration = 400;
                } else if (greetings[index] === "నమస్కారం 🙏") {
                    displayDuration = 500;
                }

                timeoutId = setTimeout(() => {
                    setIndex(prevIndex => prevIndex + 1);
                }, displayDuration);
            } else {
                timeoutId = setTimeout(onComplete, 100);
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
