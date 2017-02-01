import React from 'react';
import marked from 'marked';
import Parser from 'html-react-parser';

class Preview extends React.Component {
	render() {
		return(
			<div className="preview">
				{Parser(marked(this.props.markdown))}				
			</div>
		)
	}
}

export default Preview;

// {Parser(marked(this.props.markdown))}