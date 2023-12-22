import React from "react";
import Card from "../components/card/card.tsx";


const data = [
    {
        id: 1,
        title: "JAVA",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 2,
        title: "PHP",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 3,
        title: "Python",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 4,
        title: "Go",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 5,
        title: "Java Script",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 6,
        title: "Angular",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    }
]

class Home extends React.Component<any, any> {
    render() {
        return (
            <section>
                <div
                    className={'grid 2xl:grid-cols-5   xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 w-fit relative m-auto'}>
                    {
                        data.map((data)=>{
                            return <Card title={data.title} content={data.content} key={data.id}/>
                        })
                    }

                </div>
            </section>
        )
    }
}

export default Home;