import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/task'

export default function Add() {
  const [changeableData, setChangeableData] = useState<string | undefined>()
  const [data, setData] = useState<string | undefined>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!data) return
    dispatch(addTask(data))
  }, [data])

  return (
    <div className='flex justify-between gap-4 border border-black/50 rounded-md px-5 py-4'>
      <button onClick={() => setData(changeableData)}><Icon width='25px' icon='ant-design:plus-circle-outlined' /></button>
      <input type="text" onChange={(input) => setChangeableData(input.target.value)} onKeyDown={(input) => input.key == 'Enter' && setData(input.currentTarget.value)} className='basis-full border-b border-black/50 focus:outline-0' />
    </div>
  )
}