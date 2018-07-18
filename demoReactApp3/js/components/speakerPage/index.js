'use strict';

import SpeakerPage from './SpeakerPage';
import {connect} from 'react-redux';
import {getSpeakerPageState} from '../../reducers/rootReducer';
import * as actions from './actions';

const mapStateToProps = (state) => ({
    ...getSpeakerPageState(state)
});

const mapDispatchToProps = {
    ...actions
  }

export default connect(mapStateToProps, mapDispatchToProps)(SpeakerPage);