import NotesList from './components/NotesList'
import NoteForm from './components/NoteForm'


function AppContext() {
  return (
    <div className='bg-neutral-900   p-40'>
        <h1 className='text-5xl font-bold text-center uppercase text-white'>Notes</h1>
           <NoteForm/>
           <NotesList/>
    </div>
  )
}

export default AppContext