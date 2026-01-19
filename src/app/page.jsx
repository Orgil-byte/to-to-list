"use client";
import { useState } from "react";

export default function Main() {
  return (
    <div>
      <Page />
    </div>
  );
}

const Page = () => {
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
    setRenderInput(renderInput.filter((item) => item.id !== id));
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
    const base = "py-1 px-3 h-8  text-[12px] rounded-sm";
    const normal = "bg-[#F3F4F6] text-[#363636]";
    const active = "bg-[#3c82f6] text-white";
    return `${base} ${filtered === buttonType ? active : normal}`;
  };

  const itemIsComplete = renderInput.filter((item) => item.isComplete);

  const clearCompleted = (isComplete) => {
    setRenderInput((prev) =>
      prev.filter((task) => task.isComplete !== isComplete),
    );
  };

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div>
        <div className="mt-20  py-6 px-4 w-94.25 min-h-72.5 flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Header add={add} getInput={getInput} input={input} />
          <CategoryBtn
            setFiltered={setFiltered}
            btnColorChange={btnColorChange}
          />
          <RenderTasks
            deleteItem={deleteItem}
            filteredTasks={filteredTasks}
            toggleComplete={toggleComplete}
          />
          <TaskInfo
            clearCompleted={clearCompleted}
            itemIsComplete={itemIsComplete}
            renderInput={renderInput}
          />
        </div>
      </div>
    </div>
  );
};
const Header = ({ input, getInput, add }) => {
  return (
    <div>
      <h1 className="text-[20px] font-semibold">To-Do list</h1>
      <div className="flex gap-1.5 mb-5 mt-5">
        <input
          placeholder="Add a new task..."
          value={input}
          onChange={getInput}
          className="w-70 h-10 py-2 px-4 rounded-sm border border-[#E4E4E7]"
        />
        <button
          onClick={add}
          className="w-14.75 h-10 text-[13.3px] py-2 px-4 text-white bg-[#3C82F6] rounded-sm tracking-wider shadow-2xs cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
};

const CategoryBtn = ({ setFiltered, btnColorChange }) => {
  return (
    <div className="flex w-86.25 gap-1.5 mb-5">
      <button
        onClick={() => setFiltered("all")}
        className={btnColorChange("all")}
      >
        All
      </button>
      <button
        onClick={() => setFiltered("active")}
        className={btnColorChange("active")}
      >
        Active
      </button>
      <button
        onClick={() => setFiltered("completed")}
        className={btnColorChange("completed")}
      >
        Completed
      </button>
    </div>
  );
};

const RenderTasks = ({ filteredTasks, toggleComplete, deleteItem }) => {
  return (
    <div className="flex flex-col gap-4">
      {filteredTasks.map((item) => (
        <UserInput
          item={item}
          text={item.text}
          key={item.id}
          id={item.id}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

const UserInput = ({ toggleComplete, id, item, text, deleteItem }) => {
  return (
    <div className="w-86.25 h-15.5 flex items-center gap-5 p-4 bg-[#F9FAFB]">
      <input
        onChange={() => toggleComplete(id)}
        checked={item.isComplete}
        type="checkbox"
        className="w-5 h-5 rounded-xs border border-gray-500 cursor-pointer"
      />
      <p
        className={`w-[322.31px] text-gray-900 text-[16px] ${
          item.isComplete ? `line-through` : ``
        }`}
      >
        {text}
      </p>
      {item.isComplete ? (
        <button
          onClick={() => deleteItem(id)}
          className="text-[14px] py-1.5 px-4 bg-[#FEF2F2] text-[#EF4444] rounded-sm cursor-pointer"
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

const TaskInfo = ({ itemIsComplete, clearCompleted, renderInput }) => {
  return (
    <div>
      {renderInput.length === 0 ? (
        <div className="text-[#6B7280]  text-[14px] mt-3">
          No Tasks yet. Add one above!
        </div>
      ) : (
        <div
          className={`flex w-86.25 h-9.25 pt-4 pb-1 justify-between border-t border-[#E4E4E7] mt-5`}
        >
          <p className="text-[14px] text-[#6B7280]">
            {itemIsComplete.length} of {renderInput.length} is complete.
          </p>
          <button
            onClick={() => clearCompleted(true)}
            className="text-[14px] text-[#EF4444] cursor-pointer"
          >
            Clear Completed
          </button>
        </div>
      )}
      <p className="text-[12px] mt-10 text-[#6B7280]">
        Powered by <span className="text-[#3B73ED]"> Pinecone academy</span>
      </p>
    </div>
  );
};
