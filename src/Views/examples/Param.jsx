import React from 'react'
import { useParams } from 'react-router-dom'
const Param = props => {
    const { id } = useParams()
    return(
        <div className='Param'>
            <h1>Parametro</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam sed ut, exercitationem labore suscipit nemo facere. Suscipit, corporis pariatur a fugiat ut itaque quas quidem quibusdam harum ea quia!</p>
            <p><b>Parametro</b>:{id}</p>
        </div>
    )
}

export default Param;