import { IFormComponentProps } from "../App";
import { FC } from "react";

export const Summary: FC<Pick<IFormComponentProps, "formData">> = ({
  formData,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Summary</h1>
      <div className="border p-2">
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
    </div>
  );
};
