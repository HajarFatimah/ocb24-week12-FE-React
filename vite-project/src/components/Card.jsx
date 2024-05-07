import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div>
        <p> Hello, {props.user.name}</p>
        <img src={props.user.avatar} alt={props.user.name} />
        
    </div>
  )
}

Card.propTypes = {
    name: PropTypes.string,
}

export default Card
