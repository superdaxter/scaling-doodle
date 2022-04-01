import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, onCheck }) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onAdd={onAdd} />
            <Button color='red' text='chk' onCheck={onCheck} />
        </header >
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//     color: 'blue'
// }

export default Header