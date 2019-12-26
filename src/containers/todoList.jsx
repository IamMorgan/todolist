import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoList extends Component {
	
	render () {
		return (
			<div>
				{this.props.content}
			</div>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		content: state.content
	}
}


export default connect(mapStateToProps, null)(TodoList);