import React from 'react';
import c from './content.module.css';
import Business from './business/business';





const Content = (props) => {
	console.log(props)
	let sendText = () => {
		props.dispatch();
	}
	
	return (
		<div className={c.content}>
			<p className={c.title}>Enter your business</p>
			<textarea className={c.text} placeholder='Enter here'/>
			<button className={c.btn} onClick={sendText}>Add business</button>
			<div className={c.business}>
				<Business />
			</div>
		</div>
	)
}


export default Content;