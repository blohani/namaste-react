/* eslint-disable react/prop-types */
import React, {Component} from "react";

class UserClass extends Component{
    constructor(props){
        console.log("Child constructor called");
        super(props);
        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'USA',
                company: 'XYZ',
                blog: 'abc'
            }
        }

    }
    render(){
        console.log("Child render called");
        // const {middleName, lastName} = this.props.surname;
        const {name, avatar_url, location, company, blog} = this.state.userInfo;

        return (
            <div className="user_card">
            {/* <h2>Name: Akshay {middleName} {lastName}</h2>
            <h3>Location: New Delhi</h3> */}
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Company: {company}</h3>
            <h3>Blog: {blog}</h3>
        </div>
        )
    }

    async componentDidMount(){
        console.log("Child componentDidMount called");
         const response = await fetch("https://api.github.com/users/akshaymarch7");
         const json = await response.json();
         console.log("child api data--", json);
         this.setState({
            userInfo: json
         })

}

componentDidUpdate(){
    console.log("componentDidUpdate called");
}
componentWillUnmount(){
    console.log("componentWillUnmount called");
}
}

// UserClass.propTypes = {
//     surname: PropTypes.string
// };

export default UserClass;