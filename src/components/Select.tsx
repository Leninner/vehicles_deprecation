import { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface SelectProps {
  onChange: (id:string, e: SelectButtonChangeEvent) => void;
  value: string;
  options: string[];
  id: string;
}

export const SelectComponent = (props: SelectProps) => {
  const { id, value, onChange, options } = props;

  const getValueLabel = (value: string) => {
    switch (value) {
      case 'higher':
        return 'Alto';
      case 'medium':
        return 'Medio';
      case 'lower':
        return 'Bajo';
      default:
        return 'Bajo';
    }
  }

  return (
    <div className="card flex flex-col items-start">
      <h5>Factor de depreciación</h5>
      <SelectButton value={getValueLabel(value)} onChange={(e: SelectButtonChangeEvent) => onChange(id, e.value)} options={options} />
    </div>
  );
}
