import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import d1 from './images/d1.jfif'


//arrow function
const App = () => {
  // expressão JSX: Javascript XML

  const bg = { backgroundColor: '#EEEEEE', borderRadius: 8, margin: 'auto', width: 768, borderColor: 'black', borderStyle: 'solid', borderWidth: 0.5, paddingBottom: 12 };
  const docA = 'José da Silva';
  const docB = 'Maria da Silva';
  const docC = 'Jaqueline Mendes';



  return (

    <div style={bg}>
      <div style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 12, marginBottom: 8 }}>Profissionais de saúde</div>
      <div style={{ borderRadius: 6, border: '1px solid rgba(000, 0, 0, .05)', marginTop: 8, width: 700, margin: 'auto', alignSelf: 'center', justifyContent: 'space-around', alignContent: 'space-between', display: 'flex', paddingLeft: 15, paddingRight: 15 }}>
        <div className="Cards"><img src={d1} alt="doc 1" /><div className="nome">{docA}</div></div>
        <div className="Cards"><img src={`${process.env.PUBLIC_URL}/d2.jfif`} alt="doc 2" /><div className="nome">{docB}</div></div>
        <div className="Cards"><img src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="doc 3" /><div className="nome">{docC}</div></div>
      </div>

    </div>
  )
}

ReactDOM.render(
  <App />,
  //document.querySelector("#root")
  document.getElementById("root")
)