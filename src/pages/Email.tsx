import { IFormComponentProps } from "../App";
import { FC, FormEvent, useCallback } from "react";

export const Email: FC<IFormComponentProps> = ({
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
