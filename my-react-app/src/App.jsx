import Student from './Student.jsx'

function App() {

  return (
    <>
      <div>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrik" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student name="Sandy" age={10} isStudent={true}/>
      </div>
    </>
  )
}

export default App
