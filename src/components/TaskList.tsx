import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import Add from './TaskAdd'
import Card from './TaskCard'

export default function TaskList() {
  const { tasks } = useSelector((state: RootState) => state.task)

  return (
    <div className='flex flex-col gap-4'>
      <Add />
      {tasks.map(task => {
        return (
          <Card id={task.id} value={task.value} status={task.status} key={task.id} />
        )
      })}
    </div>
  )
}