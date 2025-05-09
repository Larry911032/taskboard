'use client'

import { Tilt_Neon } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskDetail({params}){
    const router = useRouter();
    const {id} = params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () =>{
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = savedTasks.map((task) =>
            task.id === Number(id) ? {...task, title, description} : task
        );
        localStorage.setItem('task',JSON.stringify(updatedTasks));
        router.push('/')
        
    }
    return (
        <main className="p-4 max-w-x1 mx-auto"> {/* 主容器，包含內邊距 */}
            <h1 className="text-2xl font-bold mb-4">
                Task board
            </h1> {/* 頁面標題 */}
            <input 
              className="border p-2 w-full mb-2" // 輸入框樣式
              value={Title} // 綁定輸入框的值到狀態
              onChange={(e) => setTitle(e.target.value)} // 當輸入框內容改變時更新狀態
              placeholder="Title"
            />
            <testarea 
              className="border p-2 w-full mb-2" // 輸入框樣式
              value={description} // 綁定輸入框的值到狀態
              onChange={(e) => setDescription(e.target.value)} // 當輸入框內容改變時更新狀態
              placeholder="description"
              rows={4}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2" // 按鈕樣式
                onClick={handleSave} // 點擊按鈕時觸發 addTask 函式
            >
                Save
            </button>
        </main>
    )
}