// Mutable Data And Immutable Data
// 1. An Object whose value can be changed is called as Mutable Data
// 2. An Object whose value cannot be changed is called as Immutable Data


// State are Mutable Data -> Data can be changed  -> Use in Container Components/ Parent Components
// Props are Immutable Data -> Data that cannot be changed -> Used in child Components

import React from 'react'

// Container Component
class PropsExample extends React.Component{
    constructor(){
        super()
        this.state={
            headerContent: "Header Content for the props",
            footerContent: "Footer Content for the props"
        }
    }

    render(){
        return (
            <div>
                <Header headerProp = {this.state.headerContent} />
                <Footer footerProp = {this.state.footerContent} />
            </div>
        )
    }
}

// Child Component Header
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        )
    }
}

// Child Component Footer
class Footer extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.footerProp}</h1>
            </div>
        )
    }
}

export default PropsExample
