import { IFormComponentProps } from "../App";
import { FC } from "react";

export const Phone: FC<IFormComponentProps> = ({
  formData,
  setFormData,
  onNext,
}) => {
  return (
    <form onSubmit={onNext}>
      <h1 className="text-2xl font-bold mb-4">What is your phone number?</h1>
      <input
        name={"phoneNumber"}
        type="tel"
        className="border p-1"
        autoFocus
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />
      <div className="flex justify-between mt-4">
        <button className="border p-1">Next</button>
      </div>
    </form>
  );
};
