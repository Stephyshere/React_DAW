export default function App() {
  //App renderiza a ParentComponent
  return <ParentComponent />;
}

function ParentComponent() {
  //ParentComponent renderiza los tres en orden
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  );
}
function UserComponent() {
  return (
    <div>
      <h2>Nombre: Estefania Castellanos</h2>
      <p>Estado: En línea</p>
    </div>
  );
}

function ProfileComponent() {
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Bio: Hola Buenos dias.</p>
    </div>
  );
}

function FeedComponent() {
  return (
    <div>
      <h2>Últimas publicaciones</h2>
      <ul>
        <li>Aprendiendo componentes en React</li>
        <li>Mi primer proyecto con Vite</li>
        <li>Holi klara</li>
      </ul>
    </div>
  );
}
