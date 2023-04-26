import { useState } from "react";

export const useForm = (initialState: any = {}) => {
  const [values, setValues] = useState(initialState);
  
  const reset = () => setValues(initialState);
  
  const handleInputChange = (id: string, value: string) => {
    setValues({
      ...values,
      [id]: value,
    });
  }

  return [values, handleInputChange, reset];
}