function App() {
  const users = [
    { id: 1, name: 'Jose', role: 'Web Developer' },
    { id: 2, name: 'Estefanía', role: 'Web Designer' },
    { id: 3, name: 'Rubén', role: 'Team Leader' },
  ]

  return (
    <>
      <p>Lista de usuarios activos:</p>
      <ul>
        {users.map(function (user) {
          // Asignamos una clase según el rol
          let roleClass = ''
          if (user.role === 'Team Leader') {
            roleClass = 'admin-style'
          } else {
            roleClass = 'user-style'
          }

          return (
            <li key={user.id} className={roleClass}>
              {user.name} — {user.role}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App;