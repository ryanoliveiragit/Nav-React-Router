import React from 'react'
import { useParams } from 'react-router-dom'
const Param = props => {
    const { id } = useParams()
    return(
        <div className='Param'>
            Param
            <p>Valor:{id}</p>
        </div>
    )
}

export default Param;