import {useState, useEffect} from 'react'
export default function Doctor(props) {
    const{cb=Function.prototype} = props;

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

        const handleSubmit=(e)=>{
            e.preventDefault();
            cb(userName,userEmail);
        }
    return ( 
       <form style={{width:'40%'}}>
           <label>Name</label>
           <input 
            type='text'
            name='name'
            onChange={(e)=>
               setUserName(e.target.value)
            } 
            value={userName}
            />
           <label>Email</label>
           <input 
                type='text'
                name='email'
                onChange={(e)=>
                   setUserEmail(e.target.value)
                } 
                value={userEmail}
            />
             <button
           className='btn blue'
           onClick={handleSubmit}
           >Add new employee</button>
       </form>
    );
    }