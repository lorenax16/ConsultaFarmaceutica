import React, { useState, useEffect }  from "react";
// import PropTypes from "prop-types";
const url = "http://localhost:3001/Product"


function Input() {
  const [ info, setInfo ] = useState({})
  const [ busca, setBusca ] = useState('')
  

    useEffect(() => {
      if(busca) {
        fetch(`${url}`)
        .then((response) => response.json())
        .then((response) => {
           setInfo(response)
        });
      }
    }, [busca]);
    
  
    return (      
    <div className="container">
      <div> 
        <label htmlFor="search">
          Buscar Medicametos
          <input
            type = "text"
            value = { busca } 
            onChange={ ( event) => setBusca(event.target.value)}
          />
        </label>
        <div>
          <ul>
            {<li key={info}>
              {info}
              </li>}
          </ul>
        </div>
      </div>
    </div> 
  )}

// Input.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Input;
