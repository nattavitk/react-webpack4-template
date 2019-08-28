import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

// class Welcome extends Component {
// 	render() {
// 		return <h1>Hello World from React boilerplate</h1>;
// 	}
// }

const Welcome = () => {
	return <h1>Hello World from React boilerplate</h1>;
};

ReactDOM.render(<Welcome />, document.getElementById('root'));
