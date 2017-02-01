import React from 'react';

class TextInput extends React.Component {
	handleChange(event) {
		event.preventDefault();
		let userInput = this.textInput.value;

		this.props.updateInput(userInput);
	}

	render() {
		return (
			<form>
				<textarea className="text-input" onChange={this.handleChange.bind(this)} ref={(textarea) => {this.textInput = textarea}}></textarea>
			</form>
		)
	}
}




export default TextInput;