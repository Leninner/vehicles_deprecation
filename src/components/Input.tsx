import { InputText } from "primereact/inputtext";

interface FloatLabelDemoProps {
  onChange: (id: string, value: string) => void;
  value: string;
  id: string;
  label: string;
}

export const InputComponent = (props: FloatLabelDemoProps) => {
  const { id, value, onChange, label } = props;

  return (
    <div className="card flex justify-content-center my-2">
      <span className="p-float-label">
        <InputText id={id} value={value} onChange={(e) => onChange(e.target.id, e.target.value)} />
        <label htmlFor={id}>{label}</label>
      </span>
    </div>
  )
}
