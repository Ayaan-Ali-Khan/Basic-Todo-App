import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Todo from "./components/Todo.jsx";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

export default function App() {
    // State Variables
    const [todo, setTodo] = useState({ id: '', task: '', isDone: false });
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [editMode, setEditMode] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [showCompleted, setShowCompleted] = useState(true);

    // Log when todos are updated
    useEffect(() => {
        console.log("Todos Updated:", todos)
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode])


    //Saving todos to localStorage
    const saveToLS = () => {

    }

    // Handling CRUD operations
    const handleAdd = () => {
        if (todo.task.trim()) {
            let newTodo = { ...todo, id: uuidv4(), task: todo.task.trim() }
            setTodos(prevTodos => [...prevTodos, newTodo])
            console.log("New Todo:", newTodo)
            setTodo({ id: '', task: '', isDone: false })
        }
    }
    const handleChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }
    const handleCheck = (id) => {
        console.log("Current Todo:", todos.find(item => item.id === id))
        setTodos(prevTodos => prevTodos.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item))
    }
    const handleEdit = (id) => {
        setEditMode(true)
        let todoToEdit = todos.find(item => item.id === id)
        if (!todoToEdit) return
        console.log("Todo to be edited:", todoToEdit.task)
        setTodo(todoToEdit)
    }
    const handleUpdate = () => {
        if (todo.task.trim()) {
            console.log("New Todo:", todo)
            setTodos(prevTodos => prevTodos.map(item => item.id === todo.id ? { ...todo, task: todo.task.trim() } : item))
            setTodo({ id: '', task: '', isDone: false })
            setEditMode(false)
        }
    }
    const handleDelete = (id) => {
        // If a task is being edited and it is deleted
        if (editMode && id === todo.id) {
            setEditMode(false)
            setTodo({ id: '', task: '', isDone: false })
        }
        console.log("Deleted Todo:", todos.find(item => item.id === id))
        setTodos(prevTodos => prevTodos.filter(item => item.id !== id))
    }
    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') return
        if (editMode) {
            handleUpdate()
        } else {
            handleAdd()
        }
    }

    const visibleTodos = todos.filter(item => showCompleted || !item.isDone);

    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-col gap-6 md:container min-h-[80vh] max-h-full max-w-[80vw] overflow-auto mx-auto my-5 rounded-2xl bg-[#F7F5FF] border border-violet-100 p-7 dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <span className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white">
                        All Tasks
                    </span>
                </div>
                {/* Add Task - input and button */}
                <div className="add-task flex items-center justify-center gap-3 ">
                    <input
                        name="task"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        value={todo.task}
                        type="text"
                        className="
                        w-[50vw]
                        rounded-lg
                        border-2 border-[#C4B5FD]
                        bg-white
                        px-3 py-2
                        text-[#111827]
                        outline-none
                        transition-all duration-200
                        placeholder:text-[#94A3B8]
                        hover:border-[#A78BFA]
                        focus:border-[#7C3AED]
                        focus:ring-2 focus:ring-violet-200
                        dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    />

                    {editMode ?
                        <button
                            onClick={handleUpdate}
                            disabled={todo.task.length <= 3}
                            className="
                                disabled:bg-gray-300
                                disabled:border-gray-300
                                dark:disabled:bg-gray-500
                                dark:disabled:border-gray-500
                                inline-flex items-center gap-2
                                rounded-xl
                                border border-[#6D28D9]
                                bg-[#6D28D9]
                                px-2.5 py-2.5
                                font-medium text-white
                                shadow-sm shadow-violet-500/20
                                transition-all duration-200
                                hover:-translate-y-px
                                hover:border-[#5B21B6]
                                hover:bg-[#5B21B6]
                                hover:shadow-lg
                                hover:shadow-violet-500/25
                                active:translate-y-0
                                active:bg-[#4C1D95]
                                active:shadow-sm
                                focus:outline-none
                                focus:ring-2
                                focus:ring-violet-400
                                focus:ring-offset-2"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        :
                        <button
                            onClick={handleAdd}
                            disabled={todo.task.length <= 3}
                            className="
                                disabled:bg-gray-300
                                disabled:border-gray-300
                                dark:disabled:bg-gray-500
                                dark:disabled:border-gray-500
                                inline-flex items-center gap-2
                                rounded-xl
                                border border-[#6D28D9]
                                bg-[#6D28D9]
                                px-2.5 py-2.5
                                font-medium text-white
                                shadow-sm shadow-violet-500/20
                                transition-all duration-200
                                hover:-translate-y-px
                                hover:border-[#5B21B6]
                                hover:bg-[#5B21B6]
                                hover:shadow-lg
                                hover:shadow-violet-500/25
                                active:translate-y-0
                                active:bg-[#4C1D95]
                                active:shadow-sm
                                focus:outline-none
                                focus:ring-2
                                focus:ring-violet-400
                                focus:ring-offset-2"
                        >
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12H18M12 6V18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    }
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-[12px] sm:text-sm font-medium">Show completed</span>
                    <button type="button" onClick={() => setShowCompleted(prev => !prev)}
                        className={`relative h-4 w-9 sm:h-6 sm:w-11 rounded-full transition-colors ${showCompleted ? "bg-violet-600" : "bg-gray-300 dark:bg-gray-600"}`}>
                        <span className={`absolute top-[2.25px] sm:top-0.5 left-0.5 h-3 w-3 sm:h-5 sm:w-5 rounded-full bg-white transition-transform ${showCompleted ? "translate-x-5" : "translate-x-0"}`} />
                    </button>
                </div>
                {/* Tasks */}
                <div className="todos space-y-3">

                    {visibleTodos.length === 0 && todos.length !== 0 ? <div className="min-h-[40vh] font-medium text-xl flex justify-center items-center">{todos.length} completed tasks.</div> : null}
                    {todos.length === 0 && <div className="min-h-[40vh] font-medium text-xl flex justify-center items-center">No Tasks added.</div>}
                    {visibleTodos.map((item) => {
                        return <Todo key={item.id} todo={item} handleCheck={handleCheck} handleEdit={handleEdit} handleDelete={handleDelete} />
                    })}
                    {(!showCompleted && visibleTodos.length !== todos.length && visibleTodos.length) ? <div>{todos.length - visibleTodos.length} completed tasks.</div> : null}
                </div>
            </div>
        </>
    )
}

