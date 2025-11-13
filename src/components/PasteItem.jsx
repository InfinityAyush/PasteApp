import { useDispatch } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice'
import { toast } from 'react-toastify'
import { Link, Route } from 'react-router-dom'

// image imports
import copy from '../assets/copy.png';
import deleted from '../assets/delete.png';
import edit from '../assets/edit.png'
import view from '../assets/eye.png'
import share from '../assets/share.png'





function PasteItem(props) {

    const dispatch = useDispatch()

    //handle edit
    function handleEdit(){

    }
    // handle delete
    function handleDelete(){
        dispatch(removeFromPastes(props.paste))
    }
    // handle share
    function handleShare(){

    }
    // handle copy
    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.paste.content);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy:", err);
    }
    }

    function handleDate(dateStr){

        const date = new Date(dateStr);
        const formatted = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        });
        return(formatted)
    }

  return (
    <div className='flex flex-row justify-between max-w-200'>
        <div className='flex flex-col'>
            <div>
                <p className='text-2xl'>{props.paste.title}</p>
            </div>
            <div className='flex max-w-100'>
                {props.paste.content}
            </div>
        </div>

        <div className='flex flex-col justify-end'>
            {/* utility buttons */}
            <div className='flex flex-row justify-between'>
                <button className='m-0 p-0 w-14 h-10 '
                ><a href={`/?pasteId=${props.paste._id}`}><img src={edit} alt="edit" className='w-4 m-0 ' /></a></button>
                <button className='m-0 p-0 w-14 h-10 '
                onClick={handleDelete}><img src={deleted} alt="deleted" className='w-4 m-0 '/></button>
                <button className='m-0 p-0 w-14 h-10 '
                onClick={handleShare}><img src={share} alt="share" className='w-4 m-0 '/></button>
                <button className='m-0 p-0 w-14 h-10 '
                ><a href={`/pastes/${props.paste._id}`}><img src={view} alt="view" className='w-4 m-0 '/></a></button>
                <button className='m-0 p-0 w-14 h-10 '
                onClick={handleCopy}><img src={copy} alt="copy" className='w-4 m-0 '/></button>
            </div>
            {/* date */}
            <div className='flex justify-end' >
                <div>
                    {handleDate(props.paste.createdAt)}
                </div>
                
            </div>      
        </div>
    </div>
  )
}

export default PasteItem
