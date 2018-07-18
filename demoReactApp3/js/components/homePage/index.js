'use strict';

import HomePage from './HomePage';
import {connect} from 'react-redux';
import {getHomePageState} from '../../reducers/rootReducer';
import * as actions from './actions';

const mapStateToProps = (state) => ({
    ...getHomePageState(state)
});

const mapDispatchToProps = {
    ...actions
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
