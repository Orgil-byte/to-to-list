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
export default Header;
