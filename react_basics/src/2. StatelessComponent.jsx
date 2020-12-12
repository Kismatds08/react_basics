import React from 'react'

// Stateless Components 

// 1. Functional Component

const FunctionalComponent = () => {
    return(
        <div>
            <h1> Functional Component</h1>
        </div>
    )
}

// 2. Class Component

class ClassBasedComponent extends React.Component{
    render(){
        return(
            <div>
                <h1> Class Based Component</h1>
            </div>
        )
    }
}

export {FunctionalComponent, ClassBasedComponent }