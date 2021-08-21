import React from 'react'

const Cartao = ({children}) => {
    return (
        <div className={styles.principal}>
            {children}
        </div>
    )
}

const styles = {
    principal: 'card border rounded m-2 p-2 shadow'
}

export default Cartao
