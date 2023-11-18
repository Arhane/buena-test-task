import { useEffect, useState } from "react";
import { IFormData } from "../App";

export const useForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    salary: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (Object.values(formData).some((value) => value !== "")) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return {
    formData,
    setFormData,
  };
};
