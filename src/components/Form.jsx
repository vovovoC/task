import React from 'react'

export default function Form() {
    return ( 
    <div> 
        <form>
            <label>Name:</label>
            <input type='text'/>
            <label>Occupation:</label>
            <input type='text'/>
            <button 
                className='btn'
            >Submit</button>
        </form>
    </div>
    );
    }