import {useState, useEffect} from 'react'
import List from './components/List';
import Doctor from './components/Doctor'

const API_URL = 'https://doctor.cloudoc.kz/api/users';
function App() {
    const [doctor, setDoctor] = useState([]);
    const [show, setShow] = useState(false)
    const [exists,setExists] = useState(false);

    useEffect(() => {
       loadInfo();
       },[show]);

    const loadInfo =()=>{
        fetch(API_URL)
        .then((response)=>response.json())
        .then(receivedData => setDoctor(receivedData));
    }
  
    const handleAdd =(userName,userEmail)=>{
       fetch(API_URL,{
           method:'POST',
           headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
            },
           body: {
            name:userName,
            email:userEmail
           }
         }).then((result)=>{
            result.json().then((resp)=>{
                doctor.map((el)=>{
                    if(el.email!==userEmail){
                       setExists(false);
                    }else{
                        setExists(true)    
                    }
                })
                if(exists===false){
                    addDoctor(userName,userEmail);
                    console.log('Added data: ',resp);
                }else{
                    alert('email is exists');
                }
            })
        })
    }
    const addDoctor = (userName,userEmail)=>{
            setExists(true)
            setDoctor([...doctor,{
                name:userName,
                email:userEmail
            }])
            console.log(doctor);   
    }
    return ( 
    <div className='container'> 
        <button className='btn' onClick={()=> setShow(!show)} style={{margin:'20px 0px 20px 45%'}}>Show</button>
        <div style={{marginLeft:'30%'}}>
            <Doctor cb={handleAdd}/>
        </div>
        {<List doctor={doctor}/>}
    </div>
    );
    }

    export default App;