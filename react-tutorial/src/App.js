import React, {Component} from "react"
import Table from "./Table"
import TableWithProps from "./TableWithProps"
import Form from "./Form"

class App extends Component{
    state = {
        persons:[],
    }
    removePerson = index => {
        const {persons} = this.state;

        this.setState({
            persons: persons.filter((person, i)=>{
                return i !== index;
            }),     // here可以加一个逗号
        })
        console.log(persons)
    }

    handleSubmit = person =>{
        this.setState({
            persons:[... this.state.persons, person]
        });
    }
    render() {
        /**
         * 使用props来操作数据
         */
        const team = "hello world"
        return (
            <div className="container">
                <h1>Hello World</h1>
                <TableWithProps remove={this.removePerson} personInfo={this.state.persons} say={team}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App