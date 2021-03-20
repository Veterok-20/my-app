
export default function ListPatients(props) {
    return (
<ul>
          {props.inputPatients.map((ptn) => {               
            return props.children(ptn)          
          })}  
        </ul>
    )
}   