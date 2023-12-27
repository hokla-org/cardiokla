import { PatientMedicalData } from "../types/MedicalData";
import { usePatientsMedicalData } from "./usePatientsMedicalData";

export const usePatientMedicalData = (
  patientId: string,
): PatientMedicalData | null => {
  const patientsMedicalData = usePatientsMedicalData();

  return patientId in patientsMedicalData
    ? patientsMedicalData[patientId]
    : null;
};
