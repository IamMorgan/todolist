import React from 'react';
import c from './header.module.css';



const Header = (props) => {
	return (
		<header className={c.header}>
			<img src="http://pngimg.com/uploads/sticky_note/sticky_note_PNG18932.png"/>
			<p className={c.title}>To Do List</p>
			<p className={c.ver}>v 0.01</p>
		</header>
	)
}

export default Header;