import CourseCard       from './components/CourseCard.jsx'
import LikeButton       from './components/LikeButton.jsx'
import StudentDirectory from './components/StudentDirectory.jsx'

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Lab</h1>

      <h2>Task 1 — CourseCard</h2>
      <CourseCard
        name="Distributed Object Computing"
        instructor="Md Touhidul Islam"
        credits="3"
      />

      <h2 style={{ marginTop: '40px' }}>Task 2 — LikeButton</h2>
      <LikeButton />

      <h2 style={{ marginTop: '40px' }}>Task 3 — StudentDirectory</h2>
      <StudentDirectory />
    </div>
  )
}

export default App