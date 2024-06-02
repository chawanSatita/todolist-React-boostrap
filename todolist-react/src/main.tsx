import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodoList from './components/TodoList'
import TodolistOld from './components/TodolistOld.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
