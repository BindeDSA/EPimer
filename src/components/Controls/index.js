import React from 'react';
import { connect } from 'react-redux';
import Button from './Button'

const ConnectedControls = ({running}) => (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
        <div>
            <Button text='7'>7</Button>
            <Button text='8'>8</Button>
            <Button text='9'>9</Button> <br />
            <Button text='4'>4</Button>
            <Button text='5'>5</Button>
            <Button text='6'>6</Button> <br />
            <Button text='1'>1</Button>
            <Button text='2'>2</Button>
            <Button text='3'>3</Button><br />
            <Button text='r'>reset</Button>
            <Button text='0'>0</Button>
            <Button text=' '>{running ? 'pause' : 'start'}</Button>
        </div>
    </div>
);

const mapStateToProps = state => ({running: state.timer.running});

const Controls = connect(mapStateToProps, {})(ConnectedControls);

export default Controls;