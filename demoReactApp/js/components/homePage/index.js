'use strict';

import HomePage from './HomePage';
import {connect} from 'react-redux';
import {getHomePageState} from '../../reducers/rootReducer';
import * as actions from './actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({
    ...getHomePageState(state)
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
