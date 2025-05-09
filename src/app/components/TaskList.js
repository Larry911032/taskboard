/**
 * TaskList 元件：用於顯示任務列表
 * @param {Array} tasks - 任務的陣列
 */
'use client'
import default function TaskList(( tasks, onDelete))


export default function TaskList({tasks, onDelete}){
    return(
        <ul className="space-y-2">
            {tasks.map((task,id)=>(
                <li
                    key={task.id}
                    className="border p-2 rounded flex justify-between items-center"
                >
                    <span>{task}</span>
                    <button
                        className="text-red-500"
                        onClick={() => onDelete(task.id)}
                    >
                      Delete  
                    </button>
                </li>
            ))}
        </ul>
    )
}