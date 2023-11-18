import React, { useState } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Name } from "./pages/Name";
import { Email } from "./pages/Email";
import { Phone } from "./pages/Phone";

export interface IFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

export interface IFormComponentProps {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  onNext: () => void;
}

export enum FormStep {
  Name = "name",
  Email = "email",
  Phone = "phone",
  Salary = "salary",
}

function App() {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    salary: "",
  });

  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-md mx-auto">
      <Routes>
        <Route
          path="*"
          element={<Navigate replace to={`/${FormStep.Name}`} />}
        />
        <Route
          path={`/${FormStep.Name}`}
          element={
            <Name
              formData={formData}
              setFormData={setFormData}
              onNext={() => navigate(FormStep.Email)}
            />
          }
        />
        <Route
          path={`/${FormStep.Email}`}
          element={
            <Email
              formData={formData}
              setFormData={setFormData}
              onNext={() => navigate(FormStep.Phone)}
            />
          }
        />
        <Route
          path={`/${FormStep.Phone}`}
          element={
            <Phone
              formData={formData}
              setFormData={setFormData}
              onNext={() => navigate(FormStep.Salary)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
