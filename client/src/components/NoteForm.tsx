import { ChangeEvent, FormEvent, useState } from "react"
import { trpc } from "../trpc"


function NoteForm() {

    const[note,setNote ] = useState({
        title:"",
        description:""
    })

    const addNote = trpc.note.create.useMutation()
    const utils = trpc.useContext()

    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
   
        addNote.mutate(note, {
            onSuccess:()=>{
                console.log("Note added")
                utils.note.get.invalidate()
            }
        }
          
        )
    }
    const handleChange =(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }

  return (
    <form action="" onSubmit={handleSubmit} className="bg-neutral-800 p-10 rounded-lg m-5">
        <input type="text" name="title" autoFocus placeholder="title" onChange={handleChange}  className="bg-neutral-800 px-3 py-2 block w-full rounded-md mb-3 border border-white text-white"/>
        <textarea name="description" placeholder="description" id="" onChange={handleChange} className="bg-neutral-800 px-3 py-2 block w-full rounded-md mb-3  border border-white text-white " rows={3}></textarea>
        <button  className="bg-blue-500 px-3 py-2 rounded-md text-white"
        >save</button>
    </form>
  )
}

export default NoteForm