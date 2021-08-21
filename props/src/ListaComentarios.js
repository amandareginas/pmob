import React from 'react'

const ListaComentarios = (props) => {
    return (
        <div className={styles.principal}>
            {props.children}
        </div>
    )
}

const styles = {
    principal: 'container border border-warning rounded mt-3 p-3'
}

export default ListaComentarios
