import React from 'react';
import { connect } from 'react-redux';

function getElapsedTime(start, stop = new Date().getTime()) {
    if (!start) {
        return 0;
    } else {
        return stop - start;
    }
}

class ConnectedTimer extends React.Component {
    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { start, stop, depth } = this.props;
        const elapsed = getElapsedTime(start, stop);

        return (
            <div style={{fontWeight: 'bold', fontFamily: 'monospace', fontSize: '5vmin', textAlign: 'center'}}>
                <span style={{display: 'inline-block', width: '40vmin', textAlign: 'left' }}>Time: {elapsed / 1000}</span>
                <span>Digits: {depth}</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({start: state.timer.start, stop: state.timer.stop,depth: state.depth });

const Timer = connect(mapStateToProps)(ConnectedTimer);

export default Timer;