import RegistrationForm from './components/RegistrationForm.jsx'
import StudentDirectory from './components/StudentDirectory.jsx'
import SessionTimer from './components/SessionTimer.jsx'
import StudentList from './features/students/StudentList.jsx'

function App() {
  return (
    <div>
      <h1>School Frontend</h1>
      <RegistrationForm />
      {/* <StudentDirectory /> */}
      <SessionTimer />
      <StudentList />
    </div>
  )
}

export default App