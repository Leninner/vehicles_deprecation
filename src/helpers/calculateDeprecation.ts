type TDeprecationType = 'lower' | 'medium' | 'higher';

export interface ICalculateDepreciation {
  purchaseValue: number;
  time: number;
  depreciationRate: TDeprecationType;
  isYears?: boolean;
}

const DEPRECIATION_RATES: {
  [key in TDeprecationType]: {
    firstYear: number;
    afterFirstYear: number;
  }
} = {
  'lower': {
    'firstYear': 0.16,
    'afterFirstYear': 0.1,
  },
  'medium': {
    'firstYear': 0.24,
    'afterFirstYear': 0.15,
  },
  'higher': {
    'firstYear': 0.32,
    'afterFirstYear': 0.2,
  },
}

export const calculateDepreciationAndNewValue = (props: ICalculateDepreciation): number[] => {
  const { purchaseValue, time, depreciationRate = 'higher', isYears = false } = props;
  const years = isYears ? time : time / 12;
  const firstYearDepreciation = (1 - DEPRECIATION_RATES[depreciationRate].firstYear) * purchaseValue;
  const newValue = Math.pow(1 - DEPRECIATION_RATES[depreciationRate].afterFirstYear, years) * firstYearDepreciation;
  
  return [newValue, purchaseValue - newValue].map((value) => Math.round(value * 100) / 100);
}
