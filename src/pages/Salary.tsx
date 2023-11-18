import { IFormComponentProps } from "../App";
import { FC, FormEvent, useCallback } from "react";

export const Salary: FC<IFormComponentProps> = ({
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
  const salaryRanges = [
    "0 - 1.000",
    "1.000 - 2.000",
    "2.000 - 3.000",
    "3.000 - 4.000",
    "More than 4.000",
  ];

  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-2xl font-bold mb-4">What is your salary?</h1>
      {salaryRanges.map((range, index) => (
        <div key={index} className="flex items-center">
          <input
            id={`salary-${index}`}
            name="salary"
            type="radio"
            value={range}
            checked={formData.salary === range}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor={`salary-${index}`}
            className="ml-2 block text-sm text-gray-700"
          >
            {range}
          </label>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <button className="border p-1">Next</button>
      </div>
    </form>
  );
};
