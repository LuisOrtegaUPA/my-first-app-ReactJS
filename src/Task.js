import './task.css'

export function TaskCard({ready}) {
  return (
    <div className='card'>
      <h1>Mi primer tarea</h1>
      <span className={ready ? 'bg-blue' : 'bg-green'}> 
        {
          ready ? 'Tarea completada' : 'Tarea pendiente'
        }
      </span>
    </div>
  );
}
