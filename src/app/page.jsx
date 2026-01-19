"use client";

import { useLogicFuncs } from "./logic_and_functions/page";
import Header from "./UI_components/header/page";
import CategoryBtn from "./UI_components/categoryBtn/page";
import RenderTasks from "./UI_components/renderTasks/page";
import TaskInfo from "./UI_components/taskInfo/page";

export default function Main() {
  return (
    <div>
      <Page />
    </div>
  );
}

const Page = () => {
  const {
    input,
    renderInput,
    filtered,
    setFiltered,
    add,
    getInput,
    toggleComplete,
    deleteItem,
    filteredTasks,
    btnColorChange,
    itemIsComplete,
    clearCompleted,
  } = useLogicFuncs();
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
