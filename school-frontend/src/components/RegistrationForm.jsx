import { useState } from 'react'

function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [major, setMajor] = useState('IST')

  const isValid = name.trim() !== '' && email.includes('@')

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ name, email, major })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="PSU email"
      />

      <select value={major} onChange={(e) => setMajor(e.target.value)}>
        <option value="IST">IST</option>
        <option value="CS">CS</option>
        <option value="HCDD">HCDD</option>
      </select>

      <button disabled={!isValid}>Register</button>
    </form>
  )
}

export default RegistrationForm