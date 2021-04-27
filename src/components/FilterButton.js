import React,{Component} from 'react';

export class FilterButton extends Component{

    render(){
        return(
        <div className="mr-3 bg-cyan-light text-cyan-medium rounded-md cursor-pointer hover:bg-cyan-medium hover:text-cyan-light" key={this.props.id}
        onClick={this.props.addFiltermeth}>
        <div className="p-2">{this.props.name}</div> 
        </div>
        )}
        //id refers to index passed from map -- name refers to button name passed from badge

}