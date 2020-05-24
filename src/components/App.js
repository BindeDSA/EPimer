import React from 'react';
import Timer from './Timer';
import Display from './Display'
import Controls from './Controls';

const App = () => (
    <div style={{fontFamily: 'monospace'}}>
        <Timer />
        <Display />
        <Controls />
    </div>
);

export default App;
