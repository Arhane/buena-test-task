import { IFormComponentProps } from "../App";
import { FC, FormEvent, useCallback } from "react";

export const Phone: FC<IFormComponentProps> = ({
  formData,
  setFormData,
  onNext,
}) => {
  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onNext();
    },
    [onNext],
  );
  return (
    <form onSubmit={onSubmit}>
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
