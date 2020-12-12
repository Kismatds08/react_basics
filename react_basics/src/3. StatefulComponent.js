import React from 'react'

// StateFul Component

// Container Component/ Parent Component
class StateFulExample extends React.Component{

    // Custom Constructor
    constructor(){
        super() // it talks to super class => getting me super constructo of React.Component Class

        this.state = {
            data: [
                {
                    "id":"1",
                    "name":"Foo",
                    "age":"20"
                },
                {
                    "id":"2",
                    "name":"Bar",
                    "age":"21"
                },
                {
                    "id":"3",
                    "name":"Bazz",
                    "age":"28"
                }
            ]
        }
    }

    render(){
        // Return JSX based Elements to Render Function
        return (
            <div>
                {/** Child Component */}
                <Header />
                <table>
                    <tbody>
                        {
                            
                            this.state.data.map(
                                // Table Row Child Component 
                                (Person, i) => <TableRow key = {i} datasd ={Person} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// Header Class Component
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Dynamic Content</h1>
            </div>
        )
    }
}

// Table Row Class Component
class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.datasd.id}</td>
                <td>{this.props.datasd.name}</td>
                <td>{this.props.datasd.age}</td>
            </tr>
        )
    }
}

export default StateFulExample