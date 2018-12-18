import React from 'react';

const searchbox = ({ changed }) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="Search your Robots"
				onChange={changed}/>
		</div>
	)
}

export default searchbox;