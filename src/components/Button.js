import PropTypes from 'prop-types'

const Button = ({colour, text, onClick, cssStyle = 'btn'}) => {
    // const onClick = () => {
    //     console.log('click');
    // };

    return <button onClick={onClick} style={{backgroundColor: colour}} className={cssStyle}>{text}</button>
}

Button.defaultProps = {
    colour: 'steelblue',
    text: 'Hello'
}

Button.prototypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
