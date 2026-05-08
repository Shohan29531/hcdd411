import { useEffect, useState } from 'react'

function StudentDirectory() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadStudents() {
      try {
        const response = await fetch('http://localhost:3000/students')
        if (!response.ok) {
          throw new Error('Request failed')
        }
        const data = await response.json()
        setStudents(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadStudents()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {students.map((student) => (
        <li key={student._id}>{student.name} — {student.major}</li>
      ))}
    </ul>
  )
}

export default StudentDirectory