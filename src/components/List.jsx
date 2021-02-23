import Person from './Person'
export default function List({doctor=[]}) {
    return ( 
    <div> 
       {
            doctor.map(element=>(
               <Person key={element.email} {...element}/>
            ))
       }
    </div>
    );
    }