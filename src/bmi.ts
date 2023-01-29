/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
};

export const WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs
};

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
};

export interface BmiInput {
  weight: number;
  weightUnit: number;
  height: number;
  heightUnit: number;
}

export interface BmiOutput {
  bmi: number;
  status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
  // TODO: implement me
  let status = 0;
  let { weight, weightUnit, height, heightUnit } = input;
  if (weightUnit === 1) {
    weight = weight * 1000;
  }
  if (weightUnit === 2) {
    weight = weight * 0.45;
  }
  if (heightUnit === 0) {
    height = height / 100;
  }
  if (heightUnit === 2) {
    height = (height * 2.54) / 100;
  }
  if (heightUnit === 3) {
    height = (height * 30.48) / 100;
  }
  let userBmi = weight / height ** 2;

  if (userBmi < 18.5) {
    status = 0;
  }
  if (userBmi >= 18.5 && userBmi < 25) {
    status = 1;
  }
  if (userBmi >= 25 && userBmi < 30) {
    status = 2;
  }
  if (userBmi > 30) {
    status = 3;
  }
  return { status: status, bmi: userBmi };
}
