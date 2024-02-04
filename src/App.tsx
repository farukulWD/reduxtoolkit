
import { Button } from '@/components/ui/button'
function App() {
  return (
    <div className='h-screen flex justify-center items-center'>
     <div className='flex gap-6 items-center p-10 border-2 border-green-400 rounded-sm'>
      <Button className='bg-green-400 text-white hover:bg-green-500'>Increment</Button>
      <h1>0</h1>
      <Button className='bg-red-400 text-white hover:bg-red-500'>Decrement</Button>
     </div>
    </div>
  )
}

export default App
