import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import './style/main.less';

const Welcome = () => {
	return <Home />;
};

ReactDOM.render(<Welcome />, document.getElementById('root'));
