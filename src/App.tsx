import Navbar from './components/Navbar'
import TaskList from './components/TaskList'

export default function App() {

  return (
    <main className='flex flex-col gap-6 px-40 py-8'>
      <Navbar />
      <TaskList />
    </main>
  )
}