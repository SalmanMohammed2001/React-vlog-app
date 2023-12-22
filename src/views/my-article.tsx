import {MdDelete} from "react-icons/md";
import {FaEye, FaPen} from "react-icons/fa";


const data = [
    {
        id: 1,
        date:"2023-10-15",
        title: "JAVA",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 2,
        date:"2023-10-15",
        title: "PHP",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 3,
        date:"2023-10-15",
        title: "Python",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 4,
        date:"2023-10-15",
        title: "Go",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 5,
        date:"2023-10-15",
        title: "Java Script",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    },
    {
        id: 6,
        date:"2023-10-15",
        title: "Angular",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur distinctio doloremque dolores ex facere illum, impedit maiores, maxime nihil quo repellendus sapiente similique sint sunt tempora voluptas!'
    }
]


const MyArticle=()=>{
    return(
        <section>
            <div className={'p-5'}>
                <table>
                    <thead className={'bg-gray-100'}>
                        <tr>
                            <th className={'py-5'}>Data</th>
                            <th className={'py-5'}>Title</th>
                            <th className={'py-5'}> Content</th>
                            <th className={'py-5'}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((data)=>{
                            return(
                                <tr>
                                    <td className={'w-[10%]'}>{data.date}</td>
                                    <td className={'w-[10%] '}>{data.title}</td>
                                    <td className={'w-[50%]'}>{data.content}</td>
                                    <td className={'w-[15%]'}>
                                                    <button className={'bg-blue-600 text-white p-3 rounded-full mx-2'}><FaEye/></button>
                                                    <button className={'bg-green-600 text-white p-3 rounded-full mx-2'}><FaPen/></button>
                                                    <button className={'bg-red-600 text-white p-3 rounded-full mx-2'}><MdDelete/></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MyArticle