import { Button } from "./Buttons";

export const TaskInfo = ({ itemIsComplete, clearCompleted, renderInput }) => {
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
          <Button
            onClick={() => clearCompleted(true)}
            className={"text-[14px] text-[#EF4444] cursor-pointer"}
            text={"Clear completed"}
          />
        </div>
      )}
      <p className="text-[12px] mt-10 text-[#6B7280]">
        Powered by <span className="text-[#3B73ED]"> Pinecone academy</span>
      </p>
    </div>
  );
};
