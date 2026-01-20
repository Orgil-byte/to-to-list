import { UserInput } from "./UserInput";

export const RenderTasks = ({ filteredTasks, toggleComplete, deleteItem }) => {
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
