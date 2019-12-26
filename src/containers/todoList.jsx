import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoList extends Component {
	render () {
		return (
			<ol>
				{this.props.content.todoData.map(
					i => <li key = {i.id}>
						{i.todo}
					</li>
				)}
			</ol>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		content: state.content
	}
}


export default connect(mapStateToProps)(TodoList)