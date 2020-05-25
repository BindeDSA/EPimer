import React from 'react';
import Timer from './Timer';
import Display from './Display'
import Controls from './Controls';
import Settings from './Settings';

const App = () => (
    <div style={{fontFamily: 'monospace'}}>
        <Timer />
        <Display />
        <Controls />
        <Settings />
    </div>
);

export default App;
