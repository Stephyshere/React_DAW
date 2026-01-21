import { useState } from 'react'

function App() {
  // 1. Estado para el toggle (booleano)
  const [showInfo, setShowInfo] = useState(true)
  
  // 2. Estado para el contador (numérico)
  const [count, setCount] = useState(0)
  
  // 3. Estado para el modo (string)
  const [mode, setMode] = useState('')

  // Lógica del contador (mínimo 0)
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Panel de Control</h1>

      {/* REQUISITO 1 y 4: Toggle con texto dinámico */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 'Ocultar' : 'Mostrar'} Detalles
        </button>

        {showInfo && (
          <p style={{ background: '#f0f0f0', padding: '10px' }}>
            Este es el contenido secreto que aparece y desaparece.
          </p>
        )}
      </div>

      {/* REQUISITO 2: Contador con límite 0 */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h3>Contador: {count}</h3>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={() => setCount(count + 1)} style={{ marginLeft: '5px' }}>
          +1
        </button>
      </div>

      {/* REQUISITO 3: Input en tiempo real */}
      <div>
        <h3>Selector de Modo</h3>
        <input 
          type="text" 
          placeholder="Ej: turbo, stealth..." 
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        />
        <p>Modo actual: <strong>{mode || 'Esperando...'}</strong></p>
      </div>
    </div>
  )
}

export default App