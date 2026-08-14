export default function Navbar({darkMode, setDarkMode}) {
    return (
        <nav className="bg-slate-300 dark:bg-gray-700 py-2 sm:py-2.8 px-4 flex justify-between items-center">
            <div className="flex gap-8">
                <div className="flex items-center justify-between gap-2 cursor-pointer">
                    <img src="/basic-todo-app/favicon.svg" width={36} alt="logo" />
                    <span className="font-bold text-2xl sm:text-3xl text-[#1F2937] dark:text-[#F3F4F6]">Taskly</span>
                </div>
                <ul className="flex justify-center items-center">
                    <li className="cursor-pointer hover:font-bold text-[#1F2937] dark:text-[#E5E7EB] transition-all w-16 text-center text-lg sm:text-xl">Home</li>
                    <li className="cursor-pointer hover:font-bold text-[#1F2937] dark:text-[#E5E7EB] transition-all w-16 text-center text-lg sm:text-xl">Tasks</li>
                </ul>
            </div>
            <button onClick={() => {setDarkMode(prev => !prev)}} className="rounded-lg p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                {darkMode ? "☀️" : "🌙"}
            </button>
        </nav>
    )
}