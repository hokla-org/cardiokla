import "antd/dist/reset.css";
import "./Home.css";
import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { usePatients } from "../../hooks/usePatients";
import { Patient } from "../../types/Patient";
import { useNavigate } from "react-router-dom";
import { Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";

export const Home: FunctionComponent = () => {
  const patients = usePatients();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const dataSource: Patient[] = patients
    .filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((patient) => ({ ...patient, key: patient.id }));

  const columns: ColumnsType<Patient> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      sorter: (p1: Patient, p2: Patient) => p1.name.localeCompare(p2.name),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      width: "40%",
      sorter: (p1: Patient, p2: Patient) => p1.email.localeCompare(p2.email),
    },
    {
      title: "Birthdate",
      dataIndex: "birthdate",
      key: "birthdate",
      width: "20%",
      sorter: (p1: Patient, p2: Patient) =>
        p1.birthdate.localeCompare(p2.birthdate),
    },
    {
      title: "General Practitioner",
      dataIndex: "generalPractitioner",
      key: "generalPractitioner",
      width: "20%",
      sorter: (p1: Patient, p2: Patient) =>
        p1.generalPractitioner.localeCompare(p2.generalPractitioner),
    },
  ];

  return (
    <div className="table-container">
      <div className="table-actions-container">
        <Input
          data-testid="search-bar"
          className="search-bar"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.currentTarget.value)
          }
          placeholder="Recherchez un patient"
        />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
