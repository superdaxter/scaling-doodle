import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (

        <header className='header'>
            <h1>{title}</h1>
            <Button  text={showAdd ? 'Close' : 'Add'} btnFunc={onAdd} color={showAdd ? 'Red' : 'Green'} />
        </header >
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// 
// CSS IN JS
// const headingStyle = {
//     color: 'blue'
// }

export default Header