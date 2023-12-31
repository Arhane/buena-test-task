import React, { useState } from "react";
import {
  Route,
  Navigate,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Name } from "./pages/Name";
import { Email } from "./pages/Email";
import { Phone } from "./pages/Phone";
import { Salary } from "./pages/Salary";
import { Summary } from "./pages/Summary";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useForm } from "./hooks/useForm";

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
  Summary = "summary",
}

function App() {
  const { setFormData, formData } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="p-4 max-w-md mx-auto relative">
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
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
            <Route
              path={`/${FormStep.Salary}`}
              element={
                <Salary
                  formData={formData}
                  setFormData={setFormData}
                  onNext={() => navigate(FormStep.Summary)}
                />
              }
            />
            <Route
              path={`/${FormStep.Summary}`}
              element={<Summary formData={formData} />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
