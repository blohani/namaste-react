
import React, {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

const longName = {
    middleName : 'Saini',
    lastName: 'Singh'
}

// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>description...</h2>
//             <User surname= {longName} />
//             <UserClass surname= {longName} />
//         </div>
//     )
// }

class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent constructor called");
    }

    render() {
        console.log("Parent render called");
        return (
            <div>
            <h1>About Class Component</h1>
            <h2>description...</h2>
            {/* <User surname= {longName} /> */}
            <UserClass surname= {longName} />
        </div>
        )
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }
}

export default About