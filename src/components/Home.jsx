import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom'
import { updateToPastes, addToPastes} from '../redux/pasteSlice';
import { toast } from 'react-toastify';


function Home() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const[searchParams, setSearchParams]=useSearchParams();
    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=> state.paste.pastes)



    function createPaste(){

        if(title.length==0 || value.length==0){
            toast.error("Empty Title and Content can't be created")
            return
        }

        const paste= {
            title : title,
            content : value,
            _id: pasteId||Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        
        if (pasteId){
        //update
            dispatch(updateToPastes(paste))
        }
        else{
        //create
            dispatch(addToPastes(paste))
        }

        //after creation or updation  
        setTitle('');
        setValue('')
        setSearchParams({})
    }

    useEffect(()=>{
        if(pasteId){
            const paste = allPastes.find((p)=> 
            p._id===pasteId)
            setTitle(paste.title)
            setValue(paste.content)
        }
        
    },[pasteId])
    

  return (
    <div >
        {/* input and submit button */}
        <div className='flex flex-row gap-7'>

        <input 
        className='p-2 rounded-2xl mt-2 border-2 w-[60%]'
        type="text"
        placeholder='Enter title here'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />

        <button className='p-2 rounded-2xl mt-2 bg-sky-400 text-sky-400'
        onClick={createPaste}>
            {pasteId ? 'Update' : 'Create my Paste'}
        </button>
        </div>

        {/* content */}
        <div className='pt-2'>
            <textarea 
            value={value}
            placeholder='Enter content'
            onChange={(e)=>{setValue(e.target.value)}}
            rows={20}
            className='border-2 rounded-2xl min-w-[500px] p-4'
            />
            
        </div>
      
    </div>
  )
}

export default Home
