import React from 'react'
import './App.css'
import TestForm from './TestForm'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <main>
          <TestForm />
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
