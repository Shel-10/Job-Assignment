import React,{Component} from 'react';
import './App.css';
import Data from "./data.json";
import {Card} from "./components/Card"
import { FilterBadge } from './components/FilterBadge';

export default class App extends Component{
  constructor(){
    super();
    this.filterId=-1; //to initialize and probably add in future an id -- variable
    this.Body = ""; //contains content of filterbadge

    this.state={
      filterArray:[ //format {id:number body:string}
      ],

      displayList:[...Data] //pushes json of Data.json into displaylist
    

    } //initial state of original array & empty body & id attributes
      
  }

  deleteEvent=async (index)=>{
    // merges array with original array - - copyfilterArray x filterArray 
    const copyfilterArray=Object.assign([],this.state.filterArray);

    copyfilterArray.splice(index,1); //removes element from array based on index
    
    //set the current state of filterArray to spliced copy 
    await this.setState(
      {
        filterArray:copyfilterArray
      }
    )
      this.refreshFilter()
      //set state after deleting the element from copyfilter array copyfilterarray ->filterarray
  }

  refreshFilter=()=>{
    let refreshedList=[]
    if(this.state.filterArray.length!==0){
    refreshedList=Data.filter((element)=>{

      
      let valueList=[element.role,element.level,...element.languages,...element.tools]
      if(this.state.filterArray.some((e)=>{
        return valueList.includes(e.body)}))
      {
        return element
      }
      else
      {
        return 0
      } 

    })}
    else
    {
      refreshedList=[...Data]
    }
   
    
    this.setState({
      displayList:refreshedList
    })
    //console.log("refreshed")
    
  }

  setFilter=(filterValue)=>{ // --> called into the add filter method()
    let container=this.state.displayList.filter((packet)=>{
      const category=[packet.role,packet.level,...packet.languages,...packet.tools]
      if(category.includes(filterValue))
      {
        return packet
      }
      else{
        return 0
      }
    })  
      this.setState(
        {
        displayList:container
        })
  }
  

  addFilter=async (element)=>{ //set element
    if(!this.state.filterArray.some((e)=>{return e.body===element.target.innerText}))
    {
    this.Body=element.target.innerText; //take innertext -- combined to replace setFilter function
    this.filterId=this.filterId + 1;
    const copyfilterArray = Object.assign([],this.state.filterArray)
    copyfilterArray.push({id : this.filterId, body:this.Body}) //removed this.state.body after deprecation
    await this.setState({
      filterArray:copyfilterArray   //set new filter state
    })
    this.setFilter(this.Body)
    }
    

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
        <div className="absolute right-2 -bottom-5 w-24 bg-cyan-light h-12 mr-20 rounded-r-md shadow-md cursor-pointer" 
        onClick={async ()=>{
          await this.setState({filterArray:[]}) 
          this.refreshFilter()}} >
        <span className="flex justify-center items-stretch text-cyan-dark hover:text-cyan-medium hover:underline pt-3">Clear</span>
        </div>
     </header>
      <div className="bg-cyan-light mb-20">
        {this.state.displayList.map((post,index) => {
          return(
                <Card data={post} key={index} passAddfunc={this.addFilter}/>    //props and chained function to components
          )})} 
      </div>
     {/* space block */}

     <div className="pb-10"></div>
          
     {/* space block */}
    </div>
     

  );
}
}


