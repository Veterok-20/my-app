import { useState } from "react"


export default function NewPatient(props) {

       const [inputLastName, setinputLastName] = useState('')
       const [inputName, setinputName] = useState('')
       const [inputPatronymic, setinputPatronymic] = useState('')
       const [inputDiagnosis, setinputDiagnosis] = useState('')

       function submitHandler(event) {
              event.preventDefault();
              // if (!(inputLastName !== '' && inputName !== ''
              //        && inputPatronymic !== '' && inputDiagnosis !== '')) return;

              const newPatient = {
                     LastName: inputLastName,
                     Name: inputName,
                     Patronymic: inputPatronymic,
                     Diagnosis: inputDiagnosis
              };
console.log(newPatient);
              fetch('/api/patient', {
                     method: 'POST',
                     headers: {
                            'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(newPatient)              
              }).then(response => response.json())
                .then(response => { console.log(response)
                                    props.addNewPatient(newPatient)
                                    setinputLastName('')
                                    setinputName('')
                                    setinputPatronymic('')
                                    setinputDiagnosis('')
       }).catch(console.error)
}
return (
       <form onSubmit={(event) => submitHandler(event)}>
              <input value={inputLastName}
                     onChange={(event) => setinputLastName(event.target.value)} type="text" />
              <input value={inputName}
                     onChange={(event) => setinputName(event.target.value)} type="text" />
              <input value={inputPatronymic}
                     onChange={(event) => setinputPatronymic(event.target.value)} type="text" />
              <input value={inputDiagnosis}
                     onChange={(event) => setinputDiagnosis(event.target.value)} type="text" />
              <button type="submit">Submit</button>
       </form>
) 
}