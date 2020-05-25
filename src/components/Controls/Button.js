import React from 'react';

const buttonStyle = {
    backgroundColor: '#fff',
    borderWidth: '1px',
    border: '1px solid #dbdbdb',
    color: '#363636',
    cursor: 'pointer',
    justifyContent: 'center',
    paddingBottom: 'calc(.5em - 1px)',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: 'calc(.5em - 1px)',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontSize: '5vw',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    WebkitAppearance: 'none',
    alignItems: 'center',
    borderRadius: '4px',
    boxShadow: 'none',
    display: 'inline-flex',
    height: '2.5em',
    margin: '0'
}

const Button = (props) => (
    <a onClick={() => document.dispatchEvent(new KeyboardEvent('keypress', { 'key': props.text }))} style={buttonStyle}>
        {props.children}
    </a>);

export default Button;