export const UserInput = ({ toggleComplete, id, item, text, deleteItem }) => {
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

      <button
        onClick={() => deleteItem(id)}
        className="text-[14px] py-1.5 px-4 bg-[#FEF2F2] text-[#EF4444] rounded-sm cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};
