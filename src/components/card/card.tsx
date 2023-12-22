import React from "react";


interface props{
    title?:string,
    content?:string
}

class Card extends React.Component<props,any>{

    render() {

        return(
            <div className={'border-solid border-2  w-72 p-5 m-5'}>
                <h1 className={'font-bold text-2xl'}>{this.props.title}</h1>
                <p className={'my-5'}>{this.props.content}</p>
                <button className={'bg-green-600  p-3 text-white'}>Read More</button>
            </div>
        )
    }
}

export default Card