import PropTypes from 'prop-types';

export function Button({text, name}) {
    if(!text) {
        alert("Text is required in button ");
    }
    
    return <button onClick={function() {
        alert("Hola Mundo");
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'John Doe'
}