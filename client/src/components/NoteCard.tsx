import {trpc} from "../trpc"

interface Props{
    note:{
        _id:string,
        title:string,
        description:string
        done:boolean
    }
}

function NoteCard({note}:Props) {

    const deleteNote = trpc.note.delete.useMutation()
    const toggleDoneNote = trpc.note.toggleDone.useMutation()
    // const utils = trpc.useContext;
    const utils = trpc.useUtils()

  return (

    <div className="bg-zinc-800 p-2 mb-2 flex rounded-lg">

        <div className="text-white">
            <h1 className="capitalize text-2xl">{note.title}</h1>
            <p>{note.description}</p>
        </div>

        <button className="bg-red-500 px-3 py-2 rounded-md text-white ml-auto" onClick={()=>{
            deleteNote.mutate(note._id,{
                onSuccess:(data)=>{
                    if(data){
                        utils.note.get.invalidate()
                    }
                },
                onError:(error)=>{
                    console.log(error);
                }
            })
            
        }}>
            Delete
        </button>

        <button className={`px-3 py-2 rounded-md text-white ml-2 ${
          note.done ? "bg-zinc-500" : "bg-green-500"
        }`} onClick={
            async ()=>{
                await toggleDoneNote.mutate(note._id,{
                    onSuccess(data) {
                            if(data)
                            {
                                utils.note.get.invalidate()
                            }
                    },
                })
            }
        }>
            {note.done ? "Undone" : "Done"}
        </button>
    </div>

  )
}

export default NoteCard