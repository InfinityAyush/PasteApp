import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewPaste() {

  const{id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes)
  const paste = allPastes.filter((p)=>p._id===id)[0]
  
  return (
    <div >
        {/* input and submit button */}
        <div className='flex flex-row gap-7'>

        <input 
        className='p-2 rounded-2xl mt-2 border-2 w-[60%]'
        type="text"
        placeholder='Enter title here'
        value={paste.title}
        disabled
        />

        
        </div>

        {/* content */}
        <div className='pt-2'>
            <textarea 
            value={paste.content}
            placeholder='Enter content'
            rows={20}
            disabled
            className='border-2 rounded-2xl min-w-[500px] p-4'
            
            />
            
        </div>
      
    </div>
  )
}

export default ViewPaste
