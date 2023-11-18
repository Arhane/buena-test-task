import React, { useState } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Name } from "./pages/Name";
import { Email } from "./pages/Email";

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
        <Route path="*" element={<Navigate replace to="/name" />} />
        <Route
          path="/name"
          element={
            <Name
              formData={formData}
              setFormData={setFormData}
              onNext={() => navigate("email")}
            />
          }
        />
        <Route
          path={"/email"}
          element={
            <Email
              formData={formData}
              setFormData={setFormData}
              onNext={() => navigate("phone")}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
