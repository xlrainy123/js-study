import React, {Component} from "react"

class Form extends Component{
    constructor(props){
        super(props);
        this.initialState = {
            name:"",
            job:"",
        }
        this.state = this.initialState;
    }

    handleChange = event =>{
        const {name, value} = event.target;
        console.log({name},{value})
        this.setState({
                [name]:value,
            })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, job} = this.state;
        return (
            <form>
                <label>姓名</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>
                <label>职业</label>
                <input type="text" name="job" value={job} onChange={this.handleChange}/>
                <input type="button" value="submit" onClick={this.submitForm}/>
            </form>

        );
    }
}
export default Form