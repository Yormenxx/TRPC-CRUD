import { trpc } from './trpc'
import "./index.css"
import { useState } from 'react'
import { httpBatchLink } from '@trpc/client'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import AppContext from './AppContext'
function App() {

  const [queryClient] = useState(()=>new QueryClient())
  const [trpcClient ]= useState(()=>
    trpc.createClient({
      links:[
        httpBatchLink({
          url:"http://localhost:3000/trpc"
        })
      ]
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
      <AppContext/>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App