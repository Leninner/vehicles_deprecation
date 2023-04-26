import { Button } from 'primereact/button';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  onClick?: () => void;
}

export const ButtonComponent = (props: ButtonProps) => {
  const { label, disabled, outlined, onClick } = props;

  return (
    <div className="card flex justify-content-center mt-2 mr-4">
      <Button label={label} disabled={disabled} outlined={outlined} onClick={onClick}/>
    </div>
  )
}
