import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Name } from "./pages/Name";

export interface IFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

export interface IFormComponentProps {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}

function App() {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    salary: "",
  });

  return (
    <Router>
      <div className="p-4 max-w-md mx-auto">
        <Routes>
          <Route path="/" element={<Navigate replace to="/page1" />} />
          <Route
            path="/page1"
            element={<Name formData={formData} setFormData={setFormData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
