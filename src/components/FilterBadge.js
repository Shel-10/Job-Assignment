import React,{Component} from 'react';

export class FilterBadge extends Component{

    render(){
        return(
            <div className="flex bg-cyan-light rounded-md text-cyan-medium font-medium h-6 my-3 ml-5 pl-3">{this.props.name}<button type="button" className="bg-cyan-medium text-cyan-light flex 
            justify-center rounded-r-md font-bold w-5 ml-3 hover:bg-cyan-darker">&times;</button></div>
        )}


}