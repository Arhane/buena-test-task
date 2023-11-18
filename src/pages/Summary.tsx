import { IFormComponentProps } from "../App";
import { FC, useState } from "react";

export const Summary: FC<Pick<IFormComponentProps, "formData">> = ({
  formData,
}) => {
  const [isAnimationShown, setIsAnimationShown] = useState(true);

  if (isAnimationShown) {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full progress-bar-animation"
          onAnimationEnd={() => setIsAnimationShown(false)}
        ></div>
      </div>
    );
  }
  return (
    <form>
      <h1 className="text-2xl font-bold mb-4">Summary</h1>
      <div className="border p-2 w-full">
        <div className="flex justify-between">
          <div className="font-bold">Name</div>
          <div>{formData.fullName}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Email</div>
          <div>{formData.email}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Phone</div>
          <div>{formData.phoneNumber}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Salary</div>
          <div>{formData.salary}</div>
        </div>
      </div>
    </form>
  );
};
