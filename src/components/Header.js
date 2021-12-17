import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = ({ title , setTitle, toggleShowAddTask, toggleHideButton, showAddTask}) => {
    const location = useLocation()
    let history = useHistory();
    const onClick = () => {
        console.log('click');
        toggleShowAddTask();
        toggleHideButton();
        setTitle('DB Assignment');
        history.goBack();
    };

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            {showAddTask && <Button colour='red' text='Back' onClick={onClick}/>}
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
