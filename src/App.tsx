import Navbar from './components/Navbar'
import TaskList from './components/TaskList'

export default function App() {

  return (
    <main className='flex flex-col gap-2 md:gap-6 px-4 md:px-20 lg:px-40 py-5'>
      <Navbar />
      <TaskList />
    </main>
  )
}