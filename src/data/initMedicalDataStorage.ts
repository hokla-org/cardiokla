import patientsMedicalData from "./patientsMedicalData.json";

export default function initMedicalDataStorage() {
  if (localStorage.getItem("patientsMedicalData") === null)
    localStorage.setItem(
      "patientsMedicalData",
      JSON.stringify(patientsMedicalData),
    );
}
