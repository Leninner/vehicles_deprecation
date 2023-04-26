import { useState } from "react"
import { ButtonComponent } from "../../components/Button"
import { InputComponent } from "../../components/Input"
import { SelectComponent } from "../../components/Select"
import { useForm } from "../../hooks/useForm"
import { ResultModal } from "../../modals/showResultModal"

export const FormView = () => {
  const [values, handleInputChange, reset] = useForm()
  const [visible, setVisible] = useState<boolean>(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setVisible(true)
  }

  const options: string[] = ['higher', 'medium', 'lower'];

  return (
    <form onSubmit={handleSubmit} className="grid place-content-center gap-10">
      <InputComponent id="username" value={values?.username || ''} onChange={handleInputChange} label="Tu nombre" />
      <InputComponent id="purchaseValue" value={values?.purchaseValue || ''} onChange={handleInputChange} label="Valor de compra de tu auto" />
      <InputComponent id="time" value={values?.time || ''} onChange={handleInputChange} label="Años de tu auto" />
      <SelectComponent id='depreciationRate' onChange={handleInputChange} options={options} value={values?.depreciationRate || ''} />
      
      <div className="flex my-2">
        <ButtonComponent label="Submit" disabled={false} />
        <ButtonComponent label="Cancel" disabled={false} outlined onClick={() => reset()} />
      </div>

      <ResultModal visible={visible} onChange={setVisible} {...values} />
    </form>
  )
}