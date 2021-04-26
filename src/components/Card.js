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
            <div className="mx-20 mt-10 rounded shadow-lg flex text-base border-l-4 border-black">
                <div className="my-5 mx-5">
                {/* logo */}
                <img src={this.props.data.logo} alt="logo" className="h-15" />
                </div>

                <div className="py-5">
                    {/* partition */}
                    <div className="flex">
                        {/* company and badge */}
                        <div className="mr-3 text-cyan-medium font-medium">{this.props.data.company}</div>
                        {this.props.data.new?
                        <div className="mx-2 bg-cyan-medium rounded-2xl"><div className="text-sm text-white px-2 py-1 font-bold">NEW!</div></div>:null}
                        {this.props.data.featured?
                        <div className="mx-2 bg-cyan-darker rounded-2xl"><div className="text-sm text-white px-2 py-1 font-bold">FEATURED</div></div>:null}
                        
                    </div>

                    <div>
                        {/* job role */}
                        <div className="py-1 text-cyan-darker cursor-pointer font-bold flex self-start hover:text-cyan-medium text-lg">{this.props.data.position}</div>
                    </div>

                    <div className="text-cyan-dark font-medium">
                        {/* status */}<div className="flex list-disc">
                        <div className="mr-1 list-none">{this.props.data.postedAt}</div>
                        <div className="mx-1">&bull; {this.props.data.contract}</div>
                        <div className="mx-1">&bull; {this.props.data.location}</div>
                        </div>
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