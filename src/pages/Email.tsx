import { IFormComponentProps } from "../App";
import { FC } from "react";

export const Email: FC<IFormComponentProps> = ({
  formData,
  setFormData,
  onNext,
}) => {
  return (
    <form onSubmit={onNext}>
      <h1 className="text-2xl font-bold mb-4">What is your email?</h1>
      <input
        name={"email"}
        type="email"
        className="border p-1"
        autoFocus
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <div className="flex justify-between mt-4">
        <button className="border p-1">Next</button>
      </div>
    </form>
  );
};
