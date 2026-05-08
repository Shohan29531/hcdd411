function CourseCard({ name, instructor, credits }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Instructor: {instructor}</p>
      <p>Credits: {credits}</p>
    </div>
  )
}

export default CourseCard