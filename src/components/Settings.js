import React from 'react';
import { connect } from 'react-redux';
import { switchShowNext } from '../redux/actions';

const ConnectedSettings = ({showNext, switchShowNext}) => {
    return (
        <div style={{fontSize: '5vmin', fontWeight: 'Bold', textAlign: 'center'}}>
            Settings <br />
            <input
                style={{width: '5vmin', height: '5vmin'}}
                type="checkbox"
                onChange={switchShowNext}
                defaultChecked={false}
            /> Show Next
        </div>
    )
}

const mapStateToProps = state => ({ showNext: state.settings.showNext });

const Settings = connect(mapStateToProps, {switchShowNext})(ConnectedSettings);

export default Settings;