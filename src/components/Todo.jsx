export default function Todo({ todo, handleCheck, handleEdit, handleDelete }){
    return (
        <div className="todo flex justify-between gap-2 m-3">
            <div className="task flex items-baseline gap-2 w-3/4">
                <input name="isCompleted" onChange={()=>{handleCheck(todo.id)}} checked={todo.isDone} type="checkbox" />
                <span className={todo.isDone ? "line-through text-[#000000C2] dark:text-[#FFFFFFC2] text-sm sm:text-lg" : "text-sm sm:text-lg"}>{todo.task}</span>
            </div>
            <div className="buttons flex gap-4">
                <button onClick={()=>{handleEdit(todo.id)}} className="
                flex justify-between items-center h-7.5 w-7.5 sm:h-11 sm:w-11 gap-2
                rounded-lg sm:rounded-xl
                border border-[#6D28D9]
                bg-[#6D28D9]
                px-1.5 py-1.5
                sm:px-2.5 sm:py-2.5
                text-sm font-medium text-white
                shadow-sm shadow-violet-500/20
                transition-all duration-200
                hover:-translate-y-px
                hover:border-[#5B21B6]
                hover:bg-[#5B21B6]
                hover:shadow-lg
                hover:shadow-violet-500/25
                active:translate-y-0
                active:bg-[#4C1D95]
                active:shadow-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        aria-hidden="true"
                    >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                </button>
                <button onClick={()=>{handleDelete(todo.id)}} className="
                flex justify-between items-center h-7.5 w-7.5 sm:h-11 sm:w-11 gap-2
                rounded-lg sm:rounded-xl
                border border-[#6D28D9]
                bg-[#6D28D9]
                px-1.5 py-1.5
                sm:px-2.5 sm:py-2.5
                text-sm font-medium text-white
                shadow-sm shadow-violet-500/20
                transition-all duration-200
                hover:-translate-y-px
                hover:border-[#5B21B6]
                hover:bg-[#5B21B6]
                hover:shadow-lg
                hover:shadow-violet-500/25
                active:translate-y-0
                active:bg-[#4C1D95]
                active:shadow-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        aria-hidden="true"
                    >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v5" />
                        <path d="M14 11v5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}