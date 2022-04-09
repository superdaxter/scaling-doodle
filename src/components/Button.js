import React from "react"
import PropTypes from 'prop-types'

function Button({ color, text, btnFunc }) {
    return (
        <button className='btn' style={{ backgroundColor: color }} onClick={btnFunc}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button