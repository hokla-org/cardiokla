type BloodPressureData = { datetime: string; value1: number; value2: number };
type BloodPressureUnit = "mmHg";
type BloodPressureName = "🩸 Pression sanguine";
type BloodPressure = {
  unit: BloodPressureUnit;
  name: BloodPressureName;
  data: BloodPressureData[];
};

export type CardiacFrequencyData = { datetime: string; value: number };
type CardiacFrequencyUnit = "bpm";
type CardiacFrequencyName = "🫀 Fréquence cardiaque";
type CardiacFrequency = {
  unit: CardiacFrequencyUnit;
  name: CardiacFrequencyName;
  data: CardiacFrequencyData[];
};

type GlycaemiaData = { datetime: string; value: number };
type GlycaemiaUnit = "g/L";
type GlycaemiaName = "🍪 Taux de glycémie";
type Glycaemia = {
  unit: GlycaemiaUnit;
  name: GlycaemiaName;
  data: GlycaemiaData[];
};

export type PatientMedicalData = {
  bloodPressure: BloodPressure;
  cardiacFrequency: CardiacFrequency;
  glycaemia: Glycaemia;
};

export type PatientsMedicalData = {
  [patientID: string]: PatientMedicalData;
};
