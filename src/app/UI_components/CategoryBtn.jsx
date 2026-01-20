export const CategoryBtn = ({ setFiltered, btnColorChange }) => {
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
