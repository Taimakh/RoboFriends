import React,{Component} from 'react';
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import scroll from '../components/scroll'
import {robots} from '../robots';
import '../containers/app.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
 	searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots:users}));
	}


	onSearchChange = (event) =>{
		
	}

	render(){
		const filteredrobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return(
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchchange={this.onSearchChange}/>
		<scroll>
		<Cardlist robots={filteredrobots}/>
		</scroll>
		</div>
		);
}
}
export default App;