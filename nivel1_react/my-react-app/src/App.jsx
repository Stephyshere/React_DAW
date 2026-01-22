import { useState } from 'react';

function App() {
  // 1. Estados para los valores de los inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Estados para los mensajes de error
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // --- Funciones de Gestión y Validación ---

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    // Validación: más de 6 caracteres
    if (value.length > 0 && value.length <= 6) {
      setUsernameError('El username debe tener más de 6 caracteres');
    } else {
      setUsernameError('');
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Validación simple: debe contener '@' y '.'
    const isValid = value.includes('@') && value.includes('.');
    if (value.length > 0 && !isValid) {
      setEmailError('Email inválido (debe contener @ y .)');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Validación: mínimo 8 caracteres
    if (value.length > 0 && value.length < 8) {
      passwordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  // 3. Lógica para deshabilitar el botón Submit
  // El formulario es inválido si hay algún error activo O si algún campo está vacío
  const isFormInvalid = 
    usernameError || emailError || passwordError || 
    !username || !email || !password;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Registro completado para ${username}!`);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#333' }}>Formulario de Registro</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px' }}>
        
        {/* Campo Username */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={handleUsername}
            style={{ width: '100%', padding: '8px', border: usernameError ? '2px solid red' : '1px solid #ccc' }}
          />
          {usernameError && <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>{usernameError}</p>}
        </div>

        {/* Campo Email */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmail}
            style={{ width: '100%', padding: '8px', border: emailError ? '2px solid red' : '1px solid #ccc' }}
          />
          {emailError && <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>{emailError}</p>}
        </div>

        {/* Campo Password */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePassword}
            style={{ width: '100%', padding: '8px', border: passwordError ? '2px solid red' : '1px solid #ccc' }}
          />
          {passwordError && <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>{passwordError}</p>}
        </div>

        {/* Botón Submit con estado deshabilitado */}
        <button 
          type="submit" 
          disabled={isFormInvalid}
          style={{ 
            padding: '10px', 
            backgroundColor: isFormInvalid ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: isFormInvalid ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default App;