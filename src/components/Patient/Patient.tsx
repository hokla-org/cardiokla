import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";
import "./Patient.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { usePatients } from "../../hooks/usePatients";
import { usePatientMedicalData } from "../../hooks/usePatientMedicalData";
import {
  CardiacFrequencyData,
  PatientMedicalData,
} from "../../types/MedicalData";

export const Patient = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const patients = usePatients();

  const patient = patients.find((patient) => patient.id === id);

  if (patient === undefined) {
    return <h1>Patient not found</h1>;
  }

  const medicalData = usePatientMedicalData(patient.id);

  const getDisplayedDate = (dataPoint: CardiacFrequencyData) => {
    const date = new Date(dataPoint.datetime);

    return new Intl.DateTimeFormat().format(date);
  };

  return (
    <>
      <>
        <div className="header">
          <div onClick={() => navigate(-1)}>
            <ArrowLeftOutlined className="back-icon" />
          </div>
          <div className="info-container">
            <h1>{patient.name}</h1>
            <div className="email-birthdate-container">
              <h2>E-mail: {patient.email}</h2>
              <div className="spacer"></div>
              <h2>Birthdate: {patient.birthdate}</h2>
            </div>
          </div>
        </div>
        {medicalData !== null && (
          <div className="chart-container">
            <LineChart
              width={1000}
              height={500}
              data={medicalData.cardiacFrequency.data}
            >
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey={getDisplayedDate}>
                <Label value="Date" position="bottom" offset={0} />
              </XAxis>
              <YAxis>
                <Label value={`Cardiac frequency (bpm)`} position="left" />
              </YAxis>
            </LineChart>
          </div>
        )}
      </>
    </>
  );
};

export default Patient;
