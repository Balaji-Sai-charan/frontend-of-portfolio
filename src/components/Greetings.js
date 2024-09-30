import React, { useEffect, useState } from 'react';

const greetings = [
    "Hello",              // English
    "नमस्ते",             // Hindi
    "வணக்கம்",            // Tamil
    "ഹലോ",               // Malayalam
    "ಹಲೋ",               // Kannada
    "Bonjour",            // French
    "Hola",               // Spanish
    "Ciao",               // Italian
    "Howdy",              // American English
    "Привет",             // Russian (Privet)
    "你好",                // Chinese (Nǐ hǎo)
    "안녕하세요",           // Korean (Annyeonghaseyo)
    "こんにちは",          // Japanese (Konnichiwa)
    "Merhaba",            // Turkish
    "Salam",              // Arabic (سلام)
    "Zdravo",             // Serbian
    "నమస్కారం 🙏"       // Telugu (with hands emoji)
];

const Greeting = ({ onComplete }) => {
    const [currentGreeting, setCurrentGreeting] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const showGreeting = () => {
            if (index < greetings.length) {
                setCurrentGreeting(greetings[index]);
                let displayDuration = 80;

                if (greetings[index] === "Hello") {
                    displayDuration = 400;
                } else if (greetings[index] === "నమస్కారం 🙏") {
                    displayDuration = 500;
                }

                setIndex(index + 1);
                setTimeout(showGreeting, displayDuration);
            } else {
                setTimeout(onComplete, 100); // Call onComplete after all greetings are shown
            }
        };

        showGreeting();
    }, [index, onComplete]);

    return (
        <div id="greeting">
            <h1>{currentGreeting}</h1>
        </div>
    );
};

export default Greeting;
