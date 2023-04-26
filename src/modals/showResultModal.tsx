import { Dialog } from 'primereact/dialog';
import { ICalculateDepreciation, calculateDepreciationAndNewValue } from '../helpers/calculateDeprecation';

interface ResultModalProps extends ICalculateDepreciation {
  visible: boolean;
  onChange: (x: boolean) => void;
  username: string;
}

export const ResultModal = (props: ResultModalProps) => {
  const { visible, onChange, ...deprecationData } = props;
  const deprecation = calculateDepreciationAndNewValue({
    purchaseValue: Number(deprecationData.purchaseValue),
    depreciationRate: deprecationData.depreciationRate,
    time: Number(deprecationData.time),
  });

  return (
    <div className="card flex justify-content-center">
      <Dialog header="Cálculo de la depreciación de autos en Ecuador" visible={visible} style={{ width: '50vw' }} onHide={() => onChange(false)}>
        <p>
          Gracias <span className='font-bold'>{deprecationData.username}</span> por usar el sistema. Tu auto con un valor de compra de ${deprecationData.purchaseValue} y una antiguedad de <span className='font-bold'>{deprecationData.time} años</span>, tiene los siguientes valores
        </p>

        <br />
        <p className="m-0">
          {`El valor de depreciación es: $${deprecation[1]}`}
        </p>

        <p>
          {`El nuevo valor del auto es de: $${deprecation[0]}`}
        </p>
      </Dialog>
    </div>
  )
}
