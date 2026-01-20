import { Button } from "./Buttons";

export const CategoryBtn = ({ setFiltered, btnColorChange }) => {
  return (
    <div className="flex w-86.25 gap-1.5 mb-5">
      <Button
        onClick={() => setFiltered("all")}
        className={btnColorChange("all")}
        text={"All"}
      />
      <Button
        onClick={() => setFiltered("active")}
        className={btnColorChange("active")}
        text={"Active"}
      />
      <Button
        onClick={() => setFiltered("completed")}
        className={btnColorChange("completed")}
        text={"Completed"}
      />
    </div>
  );
};
