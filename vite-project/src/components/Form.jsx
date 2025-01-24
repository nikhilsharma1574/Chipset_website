
import React, {useState} from 'react'

function Form() {
    const[text,settext] = useState('')
  
    return (
        <div>
            <form>
                <input onChange={(e)=>settext(e.target.value)} />
            </form>




        </div>








    )
}

export default Form