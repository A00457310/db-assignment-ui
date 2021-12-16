import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom";

const Header = ({ title , updateShowSetTask, showAddTask}) => {
    const location = useLocation()
    const onClick = () => {
        console.log('click');
        // updateShowSetTask();
    };

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            {location.pathname==='/' && <Button colour={!showAddTask ? 'green': 'red'} text={!showAddTask ? 'Add': 'Close'} onClick={onClick}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'DB Assignment'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

//CSS in js
// const headerStyle = {color: 'red', backgroundColor: 'black'};

export default Header
