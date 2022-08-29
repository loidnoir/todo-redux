import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface Task {
  id: number
  value: string
  status: boolean
}

export interface State {
  tasks: Array<Task>
}

const initialState: State = {
  tasks: []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        value: action.payload,
        status: false
      })
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer