'use strict';

import SessionPage from './SessionPage';
import {connect} from 'react-redux';
import {getSessionPageState} from '../../reducers/rootReducer';
import * as actions from './actions';

const mapStateToProps = (state) => ({
    ...getSessionPageState(state)
});

const mapDispatchToProps = {
    ...actions
  }

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);