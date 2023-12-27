import { useMemo } from "react";
import { Patient } from "../types/Patient";

export const usePatients = (): Patient[] => {
  const stringifiedPatients = localStorage.getItem("patients");
  const patients = useMemo(
    () => (stringifiedPatients !== null ? JSON.parse(stringifiedPatients) : []),
    [stringifiedPatients],
  );
  return patients;
};
