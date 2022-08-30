import { Icon } from '@iconify/react'
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/task'

export default function Add() {
  const [data, setData] = useState<string | undefined>()
  const dispatch = useDispatch()

  const handleButtonClick = (input: MouseEvent<HTMLButtonElement | MouseEvent>) => {
    if (!data) return
    dispatch(addTask(data))
  }

  const handleInputChange = (input: ChangeEvent<HTMLInputElement>) => {
    setData(input.target.value)
  }

  const handleInputSubmit = (input: KeyboardEvent<HTMLInputElement>) => {
    if (input.key != 'Enter' || !data) return
    dispatch(addTask(data))
  }

  return (
    <div className='flex justify-between gap-4 border border-black/50 rounded-md px-5 py-4'>
      <button onClick={(input) => handleButtonClick(input)}>
        <Icon width='25px' icon='ant-design:plus-circle-outlined' />
      </button>
      <input
        type='text'
        id='add'
        name='add'
        onChange={(input) => handleInputChange(input)}
        onKeyUp={(input) => handleInputSubmit(input)}
        className='basis-full border-b border-black/50 focus:outline-0'
      />
    </div>
  )
}