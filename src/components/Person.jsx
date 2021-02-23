export default function Person(props) {
    const{
       name,
       email
    } = props;
     return ( 
     <div style={{width:'70%', border:'1px solid black', margin:'20px'}}> 
          <p style={{margin:'20px'}}>{name}</p>
          <p style={{margin:'20px'}}>{email}</p>
     </div>
     );
     }