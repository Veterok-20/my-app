import React, { useEffect } from 'react'
import NewPatient from './components/NewPatient';
import ListPatients from './components/ListPatients';
import { useState } from "react"
import Patient from "./components/Patient"



export default function App() {
  const [inputPatients, setinputPatients] = useState([])
// useEffect(() => {
//   fetch('/api/inputPatients').then(response => {
//     return response.json()}).then(patientsFromServer => {
//       setinputPatients(patientsFromServer).catch(console.error)
//     })
// }, [])


  const ptnDelete = (id) => {
    console.log(id)
    let newinputPatient = [...inputPatients]
    newinputPatient.splice(id, 1)
    setinputPatients(newinputPatient)
    
  }

  const addNewPatient = (newPatient) => {
    setinputPatients([...inputPatients, newPatient])
  }

  const PatientEmbeded = (ptn) => {
    return <Patient
      key={ptn.id}     
      ptnDelete={ptnDelete}
      {...ptn} />
  }



  return (
    <div style={
      { maxWidth: 800, minWidth: 300, margin: "0 auto" }
    }>
      <NewPatient addNewPatient={addNewPatient} />
      <ListPatients inputPatients={inputPatients}>
        {PatientEmbeded}
      </ListPatients>
    </div>
  )
}






