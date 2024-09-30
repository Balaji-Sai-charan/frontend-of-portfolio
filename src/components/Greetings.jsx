import React, { useEffect, useState } from 'react';

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
        let timeoutId; // Declare a variable to hold the timeout ID

        const showGreeting = () => {
            if (index < greetings.length) {
                setCurrentGreeting(greetings[index]);
                
                let displayDuration = 80;
                if (greetings[index] === "Hello") {
                    displayDuration = 400;
                } else if (greetings[index] === "నమస్కారం 🙏") {
                    displayDuration = 500;
                }

                // Schedule next greeting after current one is displayed
                timeoutId = setTimeout(() => {
                    setIndex(prevIndex => prevIndex + 1);
                }, displayDuration);
            } else {
                // Call onComplete after all greetings are shown
                timeoutId = setTimeout(onComplete, 100);
            }
        };

        showGreeting();

        return () => clearTimeout(timeoutId); // Clean up timeout on unmount
    }, [index, onComplete]); // Add index to dependencies

    return (
        <div id="greeting">
            <h1>{currentGreeting}</h1>
        </div>
    );
};

export default Greeting;
