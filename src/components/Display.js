import React from 'react';
import { connect } from 'react-redux';
import GetDigit from '../services/getDigit';

const ConnectedDisplay = ({ depth, error, showNext }) => {
    const numString = depth === 0 ? 'Start typing pi' : '3.' + GetDigit.getDigits(1, depth - 1);
    const numStringStyle = {
        textAlign: depth === 0 ? 'center' : 'left',
        padding: '',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        direction: 'rtl',
        color: error ? 'red' : '',
    }

    return (
        <div style={{ width: '80vw', margin: 'auto', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '5vw' }} >
            {
                depth === 1 ?
                    <div>3.</div> :
                    <div style={numStringStyle}>{numString}</div>
            }

            {depth && showNext ? "Next: " + GetDigit.getDigits(depth, 5) : (<span style={{color: 'white'}}>empty</span>)}
        </div>
    );
};

const mapStateToProps = state => ({ depth: state.depth, error: state.error, showNext: state.settings.showNext });

const Display = connect(mapStateToProps)(ConnectedDisplay);

export default Display;