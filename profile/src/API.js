//        Created by MJ-Project 2021
import { Component } from 'react';

class API extends Component {
    constructor(props){
        super(props)
        this.state = {
            items : [],
            isLoading:true
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({ items : data, isLoading:false }))
    }
    render(){ 
        const { items, isLoading } = this.state
        if(isLoading){
            return <p>Memuat Data...</p>
        }
        return(
            <div>
                <ul>
                    {items.map((item,index) =>
                    <li key={index}>{item.name}</li>)}
                </ul>
            </div> 
        )
    }
}
export default API; 