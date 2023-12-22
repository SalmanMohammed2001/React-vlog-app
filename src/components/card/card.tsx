import React from "react";


class Card extends React.Component<any,any>{

    render() {

        return(
            <div className={'border-solid border-2  w-72 p-5 m-5'}>
                <h1 className={'font-bold text-2xl'}>Learn Typescript(+React)</h1>
                <p className={'my-5'}>Lorem ipsum dolor sit amet, consecrate radicalising elite. Blandish, ea arum est ex explicable
                    fugal libero magnum qui qua, quo, sed sit llama Ande. Beate dolorous inventory
                    necessitates cisgendered voluptuous.</p>
                <button className={'bg-green-600  p-3 text-white'}>Read More</button>
            </div>
        )
    }
}

export default Card