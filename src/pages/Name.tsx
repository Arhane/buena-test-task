import { IFormComponentProps } from "../App";
import { FC, FormEvent, useCallback } from "react";

export const Name: FC<IFormComponentProps> = ({
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
      <h1 className="text-2xl font-bold mb-4">What is your name?</h1>
      <input
        name={"fullName"}
        type="text"
        className="border p-1"
        value={formData.fullName}
        autoFocus
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <div className="flex justify-between mt-4">
        <button className="border p-1">Next</button>
      </div>
    </form>
  );
};
