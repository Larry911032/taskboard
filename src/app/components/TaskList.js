/**
 * TaskList 元件：用於顯示任務列表
 * @param {Array} tasks - 任務的陣列
 */
export default function TaskList({tasks}){
    return(
        <ul className="space-y-2">
            {tasks.map((task,index)=>(
                <li
                    key={index}
                    className="border p-2 rounded"
                >
                {task}
                </li>
            ))}
        </ul>
    )
}