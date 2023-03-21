import { useState,useEffect } from 'react';
import CardList from './Components/card-list.componenets';
import SearchBox from './Components/search-box.components';
import './App.css';

const App = ()=>{
	const [searchFeild,setSearchFeild] = useState(' ');
	const [names,setNames] = useState([]);
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=>response.json())
		.then((users)=>setNames(users))
	},[]);

	const onSearchChange =(event)=>{
							const searchFeildString = event.target.value.toLocaleLowerCase();
							// console.log(this.state);
							setSearchFeild(searchFeildString);
	};
	const filteredNames = names.filter((names)=>{
									return names.name.toLocaleLowerCase().includes(searchFeild);
	});

	return (
		<div className="App">
 				<header className="App-header">
					<h1>The Monsters Rodolex App</h1>
 				</header> 
 				<div className='mt-3 App'>
 						<div className='m-2  p-2'>
							
 							<SearchBox onChangeHandler={onSearchChange} classname='form-control mb-5' placeholder='Names...'/>
     						<CardList names={filteredNames}/>
							
 						</div>
 				</div>
 			</div>
	);
}

//Functional components

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			names : [],
// 			searchFeild : '',
// 		}
		
// 	}
// 	componentDidMount(){
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then((response)=>response.json())
// 		.then((users)=>
// 		this.setState(
// 			()=>{
// 				return {names:users};
// 			}
// 		))
// 	}
// 	onSearchChange =(event)=>{
// 					const searchFeild = event.target.value.toLocaleLowerCase();
// 					console.log(this.state);
// 					this.setState(()=>{
// 						return { searchFeild };
// 						});
// 					};

// 	render() {
// 		const { names, searchFeild }  = this.state;
// 		const {onSearchChange} = this;

// 		const filteredNames = names.filter((names)=>{
// 									return names.name.toLocaleLowerCase().includes(searchFeild);
// 								});

// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 				</header> 
// 				<div className='container m-2 p-5'>
// 						<div className='container'>
// 							<SearchBox onChangeHandler={onSearchChange} classname='form-control' placeholder='Names...'/>
// 							<CardList names={filteredNames}/>
							
// 						</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
