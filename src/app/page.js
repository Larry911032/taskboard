'use client'

import Image from "next/image";
import { useState } from "react";
import TaskList from "./components/TaskList";

// Home 頁面的主要元件
export default function Home() {
  // 管理任務列表的狀態
  const [tasks, setTasks] = useState([]);
  // 管理新任務輸入框的狀態
  const [newTask, setNewTask] = useState(''); 

  // 新增任務到列表的函式
  const addTask = () => {
    console.log("Before:", tasks); // 紀錄目前的任務列表
    console.log("NewTask:", newTask); // 紀錄正在新增的任務
    const updatedTasks = [...tasks, newTask]; // 建立包含新任務的新陣列
    setTasks(updatedTasks); // 更新任務列表的狀態
    console.log("After", updatedTasks); // 紀錄更新後的任務列表
    setNewTask(''); // 重置輸入框
  };

  return (
    <main className="p-10"> {/* 主容器，包含內邊距 */}
      <h1 className="text-2xl font-bold">Task board</h1> {/* 頁面標題 */}

      {/* 新增任務的輸入框與按鈕 */}
      <div className="flex gap-10 mb-20">
        <input 
          className="border p-2 flex-1" // 輸入框樣式
          placeholder="Enter a task" // 輸入框的提示文字
          value={newTask} // 綁定輸入框的值到狀態
          onChange={(e) => setNewTask(e.target.value)} // 當輸入框內容改變時更新狀態
        />
        <button
          className="bg-blue-500 text-white px-10" // 按鈕樣式
          onClick={addTask} // 點擊按鈕時觸發 addTask 函式
        >
          ADD
        </button>
      </div>

      {/* 顯示任務列表的元件 */}
      <TaskList tasks={tasks}/>
    </main>
  );
}
