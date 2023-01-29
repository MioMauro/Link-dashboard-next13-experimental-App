'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ToggleBtn() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {currentTheme === 'dark' ? (
            <button
                className = "mr-6 rounded-full hover:bg-black"
                onClick={() => setTheme('light')}
            >{' '} 🌚</button>
        ) : (
            <button
                className="mr-6 rounded-full hover:bg-white"
                onClick={() => setTheme('dark')}
            >🌞</button>
            )}
        </div>
);
}