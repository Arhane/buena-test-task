import { IFormComponentProps } from "../App";
import { FC } from "react";

export const Name: FC<IFormComponentProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">What is your name?</h1>
      <input
        name={"fullName"}
        type="text"
        className="border p-1"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <div className="flex justify-between mt-4">
        <button className="border p-1">Next</button>
      </div>
    </div>
  );
};