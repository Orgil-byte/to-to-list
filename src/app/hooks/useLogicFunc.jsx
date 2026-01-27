"use client";
import { useState } from "react";

export const useLogicFuncs = () => {
  const [input, setInput] = useState("");
  const [renderInput, setRenderInput] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [filtered, setFiltered] = useState("all");

  const add = () => {
    if (input === "") {
      window.alert("add task");
      return;
    }

    const task = {
      id: nextId,
      text: input,
      isComplete: false,
    };

    setRenderInput([...renderInput, task]);
    setInput("");
    setNextId(nextId + 1);
  };
  console.log(renderInput);

  const getInput = (e) => {
    return setInput(e.target.value);
  };

  const toggleComplete = (id) => {
    setRenderInput(
      renderInput.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item,
      ),
    );
  };
  const deleteItem = (id) => {
    const confirmed = window.confirm("Do you want to delete this task?");
    if (confirmed === true) {
      return setRenderInput(renderInput.filter((item) => item.id !== id));
    } else {
      return null;
    }
  };

  const getFilteredTasks = () => {
    if (filtered === "active") {
      return renderInput.filter((item) => !item.isComplete);
    }
    if (filtered === "completed") {
      return renderInput.filter((item) => item.isComplete);
    }
    return renderInput;
  };

  const filteredTasks = getFilteredTasks();

  const btnColorChange = (buttonType) => {
    const base = "py-1 px-3 h-8  text-[12px] rounded-sm cursor-pointer";
    const normal = "bg-[#F3F4F6] text-[#363636]";
    const active = "bg-[#3c82f6] text-white";
    return `${base} ${filtered === buttonType ? active : normal}`;
  };

  const itemIsComplete = renderInput.filter((item) => item.isComplete);

  const clearCompleted = (isComplete) => {
    const confirmed = window.confirm("Do you wanna clear all completed tasks?");
    if (confirmed === true) {
      return setRenderInput((prev) =>
        prev.filter((task) => task.isComplete !== isComplete),
      );
    } else {
      return null;
    }
  };
  return {
    input,
    renderInput,
    setFiltered,
    add,
    getInput,
    toggleComplete,
    deleteItem,
    filteredTasks,
    btnColorChange,
    itemIsComplete,
    clearCompleted,
  };
};
