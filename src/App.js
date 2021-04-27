import React,{Component} from 'react';
import './App.css';
import Data from "./data.json";
import {Card} from "./components/Card"
import { FilterBadge } from './components/FilterBadge';

export default class App extends Component{
  constructor(){
    super();
    this.filterId=0; //to initialize and probably add in future an id -- variable
    this.Body = ""; //contains content of filterbadge

    this.state={
    filterArray:[
      
      //format {id:number body:string}
    ]
    /* {Body: " ", //deprecated var to reduces state var
     id: " " */

    } //initial state of original array & empty body & id attributes
      
  }

  deleteEvent=(index)=>{
    // merges array with original array - - copyfilterArray x filterArray 
    const copyfilterArray=Object.assign([],this.state.filterArray);

    copyfilterArray.splice(index,1); //removes element from array based on index
    //set the current state of filterArray to spliced copy 
    this.setState(
      {
        filterArray:copyfilterArray
      }
    )
      //set state after deleting the element from copyfilter array copyfilterarray ->filterarray
  }

  /*setFilter=(element)=>{
    this.Body=element.target.innerText;
      /* deprecated in favor of reducing unnecessary set function
      this.setState(
        {
          Body:element.target.value //takes the value from the element of input and sets it to body
        })
      --ended here
  }*/

  addFilter=(element)=>{ //set element
    this.Body=element.target.innerText; //take innertext -- combined to replace setFilter function
    //console.log(this.Body)
    this.filterId=this.filterId + 1;
    const copyfilterArray = Object.assign([],this.state.filterArray)
    copyfilterArray.push({id : this.filterId, body:this.Body}) //removed this.state.body after deprecation
    this.setState({
      filterArray:copyfilterArray   //set new filter state
    })
  }

  render(){
  return (
    <div className="">
     <header className="relative">
       <div className="bg-cyan-medium bg-header-mobile bg-cover desk:bg-header-desktop h-32 shadow-2xl"></div>
       {/* search bar snippet*/}
       <div className="ml-20 absolute w-10/12 -bottom-5 rounded-md bg-cyan-light h-12 shadow-md flex flex-row">
         {/* badges here */}
         {/* area to add badges */}
         {
           this.state.filterArray.map((filterBadge,index)=>{
             return(
               <FilterBadge key={filterBadge.id}
                content={filterBadge.body}  //sends props to filterbadge
                delete={this.deleteEvent.bind(this, index)} //selects element to delete
               />
             )
           })
         }
         
       </div>
       {/* clear button*/}
        <div className="absolute right-2 -bottom-5 w-24 bg-cyan-light h-12 mr-20 rounded-r-md shadow-md cursor-pointer">
        <span className="flex justify-center items-stretch text-cyan-dark hover:text-cyan-medium hover:underline pt-3">Clear</span>
        </div>
     </header>
      <div className="bg-cyan-light mb-20">
         {Data.filter((post)=>{
           const category=[post.role,post.level,...post.languages,post.tools] //concats properties in array to compare with
           //console.log(this.state.filterArray)
            //area to add filter conditions
           return post
           
         }).map((post) => {
          return(
                <Card data={post} key={post.id} passAddfunc={this.addFilter} />    //props and chained function to components
          )})} 
     </div>
     {/* experimental */}

     <div className="pb-10">
     <input type="text" />     {/*setFilter -- to set data*/} {/* onBlur={this.setFilter} */}
     <button onClick={this.addFilter}>Add filter</button> {/*addFilter -- to add data*/}
     </div>

     {/* experimental */}
    </div>
     

  );
}
}


