import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// App
class App extends Component{
	
	
	//https://codepen.io/gregh/pen/NdVvbm
	//handleFileChosen(){
	//	console.log('A File Was Chosen');
	//}
	
	//handleFileUpload(){
	//	console.log('A File Is Being Uploaded');
	//}
	
	//handleFilePlayed(){
	//	console.log('A File Is Being Uploaded');
	//}
	
				     //<ChooseFileComponent handleFileChosen = {this.handleFileChosen}/>
				 //<UploadFileComponent handleFileUpload = {this.handleFileUpload}/>
				//<PlayFileComponent handleFilePlayed = {this.handleFilePlayed}/>
	
	render(){
		return (
			<div className="App">
				<button>Choose File</button>
 			    <button >Upload</button>
                <button >Play File</button>

			</div>
		);
	}
}

//class ChooseFileComponent extends Component{
	
//	constructor(props){
//		super(props)
//		this.handleFileChosen = this.handleFileChosen.bind(this);
//	}
	
//	render(){
//		return (
//			<button onClick = "this.handleFileChosen">Choose File</button>
//		);
//	}
	
//}

//class UploadFileComponent extends Component{
	
//	constructor(props){
//		super(props)
//		this.handleFileUpload = this.handleFileUpload.bind(this);
//	}
	
//	render(){
//		return (
//			<button onClick = "this.handleFileUpload">Upload</button>
//		);
//	}
//}

//class PlayFileComponent extends Component{
	
	//constructor(props){
	//	super(props)
	//	this.handleFilePlayed = this.handleFilePlayed.bind(this);
	//}
	

	//render(){
	//	return (
	//		<button onClick = "this.handleFilePlayed">Choose File</button>
	//	);
	//}
//}


export default App;
