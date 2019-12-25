import React from 'react';
import c from './content.module.css';
import { sendTextAction } from '../../redux/contentReducer';
import TodoList from '../../containers/todoList';





const Content = (props) => {
	
	
	
	let newText = React.createRef();
	let sendText = () => {
		props.dispatch(sendTextAction());
	}
	
	return (
		<div className={c.content}>
			<p className={c.title}>Enter your business</p>
			<textarea className={c.text} ref={newText} placeholder='Enter here'/>
			<button className={c.btn} onClick={sendText}>Add business</button>
			<div className={c.business}>
				<TodoList />
			</div>
		</div>
	)
}


export default Content;