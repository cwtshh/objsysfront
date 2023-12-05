import './GroupCard.css'

interface Group {
    name: String,
    description: String,
    lider: String,
    students: Array<String>
  }

const GroupCard = (props: Group) => {
  return (
    <div className='group-card'>
        <div className='title'>
            <h3>Grupo:</h3>
            <p>{props.name}</p>
        </div>
        <div className='description'>
            <h4>Descrição:</h4>
            <p>{props.description}</p>
        </div>
        {props.lider ? (<p>{props.lider}</p>) : (<p>Grupo sem líder</p>)}
        {props.students.length > 0 ? (<p>{props.students.length} Integrantes</p>) : (<p>Grupo sem integrantes</p>)}
        <button type='button'>Entrar no grupo</button>
    </div>
  )
}

export default GroupCard