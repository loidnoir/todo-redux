import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { removeTask, Task } from '../redux/task'

export default function TaskCard(props: Task) {
  const dispatch = useDispatch()

  return (
    <div className='flex justify-between gap-4 border border-black/50 rounded-md px-5 py-4' key={props.id}>
      <h1 className='font-montserrat font-normal text-2xl'>{props.value}</h1>
      <div className='flex justify-end gap-4'>
        <button onClick={() => dispatch(removeTask(props.id))} className='hover:opacity-50'><Icon width='25px' icon='ant-design:delete-outlined' /></button>
      </div>
    </div>
  )
}