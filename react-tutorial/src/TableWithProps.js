import React, {Component} from "react"

const TableHeader = () =>{
    return (
        <thead>
            <tr>
                <th>姓名</th>
                <th>职业</th>
            </tr>
        </thead>
    )
}

const TableBody = props =>{
    const infos = props.personInfo.map((info, index)=>{
        return (
            <tr key={index}>
                <td>{info.name}</td>
                <td>{info.job}</td>
                <td>
                    <button onClick={() => props.removePerson(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{infos}</tbody>
}


class TableWithProps extends Component {
    render(){
        const {personInfo} = this.props;
        const {remove} = this.props;
        for (var i = 0; i < personInfo.length; i++){
            if (personInfo[i].hasOwnProperty("name")) {
                alert(personInfo[i].name);
            }
        }
        const {say} = this.props;   //这个地方的say要和上级传入的属性名称一致，不然undefined
        alert(say);
        return (
            <table>
                <TableHeader/>
                <TableBody personInfo={personInfo} removePerson={remove}/>
            </table>
        )
    }
}


export default TableWithProps