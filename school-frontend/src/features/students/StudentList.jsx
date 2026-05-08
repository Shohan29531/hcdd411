import { useDispatch, useSelector } from 'react-redux'
import { clearSelection, selectStudent } from './studentsSlice.js'

function StudentList() {
  const students = useSelector((state) => state.students.list)
  const selected = useSelector((state) => state.students.selected)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <button onClick={() => dispatch(selectStudent(student))}>
              {student.name} — {student.major}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch(clearSelection())}>Clear selection</button>

      <p>
        {selected
          ? `Selected: ${selected.name} (${selected.major})`
          : 'Selected: none'}
      </p>
    </div>
  )
}

export default StudentList