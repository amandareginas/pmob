import React from 'react'

const Comentario = ({nome, texto, data, foto}) => {
    return (
        <div className="d-flex">
            <img src={foto} alt={nome} style={{height: '8rem'}}/>
            <div className="ms-2 p-0 position-relative justify-content">
               <h2 className="border-bottom">{nome}</h2>
                <p>{texto}</p>
                <p style={{fontsize: '0.8rem'}} className="text-muted position-absolute bottom-0 start-0 m-0">{data}</p>
            </div>
        </div>
    )
}


export default Comentario
