import React,{Component} from 'react';

function concatArray(role,languages,level,tools)
                {
                    let badges=[role,level];
                    badges=badges.concat(languages,tools);
                    return badges;
                }

export class Card extends Component{

    render(){
        
        
        return(
            <div className={`font-body mx-10 mt-10 rounded shadow-lg flex text-base 
            ${this.props.data.featured && 'border-l-4 border-cyan-medium'}`}>
                <div className="my-5 mx-5">
                {/* logo */}
                <img src={this.props.data.logo} alt="logo" className="h-15" />
                </div>

                <div className="py-5">
                    {/* partition */}
                    <div className="flex">
                        {/* company and badge */}
                        <div className=" mr-3 text-cyan-medium font-medium">{this.props.data.company}</div>
                        {this.props.data.new?
                        <div className="mt-1 mx-2 bg-cyan-medium rounded-2xl"><h4 className="text-sm text-white px-2 font-bold">NEW!</h4></div>:null}
                        {this.props.data.featured?
                        <div className="mt-1 mx-1 bg-cyan-darker rounded-2xl"><h4 className="text-sm text-white px-2">FEATURED</h4></div>:null}
                        
                    </div>

                    <div>
                        {/* job role */}
                        <h1 className="pt-2 text-cyan-darker cursor-pointer font-medium flex self-start hover:text-cyan-medium">{this.props.data.position}</h1>
                    </div>

                    <div className="text-cyan-dark font-medium pt-2">
                        {/* status */}<ul className="flex list-disc">
                        <li className="mr-3 list-none">{this.props.data.postedAt}</li>
                        <li className="mx-3">{this.props.data.contract}</li>
                        <li className="mx-3">{this.props.data.location}</li>
                        </ul>
                    </div>
                </div>
                
                <div className="flex-grow my-5">
                    {/* badges */}<div className="flex justify-end py-7">
                    {concatArray(this.props.data.role,this.props.data.languages,this.props.data.level,this.props.data.tools).map((badge,index) => {
                    return(
                    <div className="mr-3 bg-cyan-light text-cyan-medium rounded-md cursor-pointer hover:bg-cyan-medium hover:text-cyan-light" key={index}>
                    <div className="p-2">{badge}</div> 
                    </div>                  
                    )})} 
                </div>
                </div>
            </div>

        )

    }


}