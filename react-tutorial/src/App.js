import React, {Component} from "react"
import Table from "./Table"
import TableWithProps from "./TableWithProps"

class App extends Component{
    render() {
        // const name = "zhangsy";
        // return(
        //     <div className="container">
        //         <h1>Hello, {name}</h1>
        //         <Table />
        //     </div>
        // )
        /**
         * 使用props来操作数据
         */
        const persons = [
            {
                "name":"张三",
                "job":"快递员"
            },
            {
                "name":"李四",
                "job":"教授"
            },
            {
                "name":"张苏豫",
                "job":"程序员"
            }
        ];
        const team = "hello world"
        return (
            <div className="container">
                <h1>Hello World</h1>
                <TableWithProps personInfo={persons} say={team}/>
            </div>
        )
    }
}

export default App