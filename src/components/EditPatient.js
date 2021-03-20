
export default function EditPatient(props) {

       const [inputLastName, setinputLastName] = useState(inputPatients[props.index].LastName)
       const [inputName, setinputName] = useState(inputPatients[props.index].Name)
       const [inputPatronymic, setinputPatronymic] = useState(inputPatients[props.index].Patronymic)
       const [inputDiagnosis, setinputDiagnosis] = useState(inputPatients[props.index].Diagnosis)



       const newPatient = {
              LastName: inputLastName,
              Name: inputName,
              Patronymic: inputPatronymic,
              Diagnosis: inputDiagnosis
       }



       return (
              <form onSubmit={() => { inputPatients[props.index] = newPatient }}>
                     <input value={inputLastName}
                            onChange={(event) => setinputLastName(event.target.value)} type="text" />
                     <input value={inputName}
                            onChange={(event) => setinputName(event.target.value)} type="text" />
                     <input value={inputPatronymic}
                            onChange={(event) => setinputPatronymic(event.target.value)} type="text" />
                     <input value={inputDiagnosis}
                            onChange={(event) => setinputDiagnosis(event.target.value)} type="text" />
                     <button type="submit" onClick={() => setclickEdit(!(clickEdit))}>Save</button>
              </form>
       )
}
