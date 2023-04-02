import { upload } from '@testing-library/user-event/dist/upload';
import axios from 'axios';
import React, { Component } from 'react'

export default class ComponentA extends Component {
  constructor(){
    console.log("initialization");
    super();
    this.state={
      name : "Manojit",
      id : 1,
      userdata : null,
    }
    this.BASE_URL = "https://jsonplaceholder.typicode.com/users/";
  }
  updateName(e){
    const {value} = e.target;
    console.log(value);
    this.setState({name : value})
  }
  render() {
    const {id} = this.state;
    console.log("render", id);
    //arrow function decleration
    const updateName = (e)=>{
        //const {target : {value}} = e;
        const {value} = e.target;
        console.log(value);
        this.setState({name : value})
      }
      const {msg} = this.props;
      const {name} = this.state;
      return (
        <>
        <h1>{msg}</h1>
        <input type="text" placeholder='Enter name' onChange={this.updateName.bind(this)}/><br />
        <input type="number" placeholder='Enter Id' onChange={({target : {value}})=>this.setState({id : value})}/>
        <h1>Hello {name}, {this.id}</h1>
      </>  
    )
  }
  
  
  async componentDidMount(){
    console.log("componentDidMount")
    document.title = "Learning React";
    const {id} = this.state;
    const {data} = await axios.get(this.BASE_URL + id);
    console.log(data);
    this.setState({userdata : data});
  };

  componentWillMount(){
    console.log("componentWillMount");
  }
  shouldComponentUpdate(nexrProps,nextState){
    console.log("componentShouldUpdate");
    console.log({nexrProps});
    console.log({nextState});
    return this.state.id !== nextState.id || this.props.msg !== nexrProps.msg;
  }
  
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  async componentDidUpdate(){
    const {id} = this.state;
    console.log("componentDidUpdate", id);
    const {data}= await axios.get(this.BASE_URL + id);
    //console.log(data);
    this.setState({userdata : data, name: data.name });
  }

  componentWillUnmount(){
    console.log("unmounting stage");
  }

}
