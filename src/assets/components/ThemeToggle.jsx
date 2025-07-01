import React, { useEffect, useState } from "react"

import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("theme")
        if (saved === "dark") {
        document.body.classList.add("dark-theme")
        setDarkMode(true)
        }
    }, [])

    const toggleTheme = () => {
        if (darkMode) {
        document.body.classList.remove("dark-theme")
        localStorage.setItem("theme", "light")
        } else {
        document.body.classList.add("dark-theme")
        localStorage.setItem("theme", "dark")
        }
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={toggleTheme} className="text-xl p-2 hover:text-violet-500 transition">
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default ThemeToggle
