import React from 'react'

// 1. Nested Elements with div
const NestedElements = () => {
    return (
        <div>
            <h1>Nested Elements</h1>
            <p>With Nested Elements with div tag</p>
        </div>
    )
}

// 2. Attribute 
const Attribute = () => {
    return(
        <div>
            <h1>Attributes</h1>
            {/* Inbuilt HTML Attribute -> You need to specify the values 
            for the attributes in the form object with key&value pairs*/}
            <p style={{width:'100px'}}></p>
            {/** Custom Attributes */}
            <p data-myattribute="somevalue"></p>
        </div>
    )_
}

// 3. Javascript Expressions
const JSExpression = () => {
    var a = 10
    var b = 11
    var c, i =0
    return(
        <div>
            <h1> Javascript Expression</h1>
            {/** {} -> Data Binding  */}
            <p>Sum of a and b {c = a +b}</p>
            <p>{ i == 1 ? 'True': 'False'}</p>
        </div>
    )
}

// 4. General Styling 
const Styling = () => {
    var myStyle = {
        fontSize: 100,
        color: '#FF0000'
    }
    
    return (
        <div>
            {/* style => Mapping Attribute/Function  with just Object key value pairs*/}
            <h1 style={myStyle}>Styling the Header</h1>
            <h1 style={{fontSize: 200}}>Styling the Header 2</h1>
        </div>
    )
}

export {NestedElements, Attribute, JSExpression, Styling}