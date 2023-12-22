import React from "react";
import {Link} from "react-router-dom";

class Signup extends React.Component<any, any> {

    render(){
        return(
          <section className={'flex justify-center items-center p-5'}>

              <div className={'border shadow-xl rounded-xl p-24'}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAYFBMVEX///8AAACoqKjr6+uIiIirq6v4+Pj09PTx8fHj4+PY2Nj8/PwbGxu7u7sfHx9mZmZTU1MpKSmCgoLMzMxgYGCSkpI1NTV3d3dGRkZOTk4NDQ1tbW2bm5uzs7M+Pj4TExOng1QIAAAE+klEQVR4nO2da5eiMAyGabnIRZS7oKD//18uiO4sUB2dIWRfy/N13XPad9okTdJiGCsrKysrKysrKysKTO4B/CcErmfvj0J43AP5H9j4shRXfO6h8OOmlrijvRxOmgixynHDs+J/1BCa29IwEgO4x8PLcGnoLkc1EkOcuUfEyXmshsi5h8TIZG3o7Ficw1QNEXCPioug3k7VSLSVI50aDiFS7lFx4WUKNTKXe1hMOLVCDRFyD4sLf6dQ46RrhO5YCjX0XRymSo1cV7cSqEKOTNtEmKtQI9Z2qxiNQo6ae1B8KCIwnc9uUzUsh3tMfKQTNZIN95gYySdrQ9fg/Mp+bEV1XhuGMcqP6uthewbnFX2jrztfchxLyT0Yfu5yxJnmVqOnywrG1SlpNBLD8fy0xVfkMOxa2mE6+AfXDxtbtjRh6n1aSOamdZ7so7Ioyuhk5eFza+n4Mj9ExaW3JrsySyz7g5KmYZINDyVFdJAPFUnzfTXJqe/KU/4RJZdNXo3Lrh3bMrMV2R2vrgrFr6/L5HwK0fNBwaQE/cUlPoz+4GG1Oz78efc/Suw9YysqScMJWvdNsxl3MqipcLPJvqp0MlXkEHqe/ZIWV2xMP+M0qlrBDECWG9zJqX02SjwfY6py43NxRrOo3olQjVYPrPVh0qrROhgkPTaUO6VnD2RP6azoFxbM6ddeQA2cnJmvauOZly1OzsxNvp/OL4mAHG1IrsYBZqO0i6OkVgOqJiWp1YDqrQy+O9L/lgPS2iBfHBGQ3TBUrQmzsgXyKYaqNWFeGu4JvgexW8EyHMaG1pCidc/Jp4nwX5OApUlp0xxoi8OhNR0Z2OJIH1XQZuGC1mkqiUoJPQVSQrCDNidYcU/vXWgt6Z57em/ivlSE/ClHnAxYj6+4BzsfF6zjSutYSP3sFussaxghqZ/dwVQSbjSPW1vmkIN7eu+yyjHAJo3CVjlWOZ7IgZRB76CVYwtUs79Ca0q3aCe4kFSOC1jyhzgMExb3/N5E+SDJfETc83sT2iOcKMGidPP11uGfgJY5DsYXQGcm4Z7gmxC3T4KVq4lzpXCPNkji5g6kZlKDus7SgpUuNan7wsCsB23g0ZJD1SXJe9GxDi4NbUNDyxlpu5jUfYOtHkhZoAu5HKLgnuMb0PejQ+nhLSCHKHAa5paQQ5x9FANCfQmup5AgC4S6z/ZOgpFIDhaSQ5Q1giDBEr6lJ8oBQjJ/MTkg3sl2yY9xf7lwz/UFAtXbozRAFF6Ub1qTAOFsnSXuWHeABOvpAue4DpDUxwL3ijtilEA9XMR62NzTfBV3iYNLjFNkoO176ZEoe6WNPUib069A3eag7QPqgLEcV2hbG9rjG9LiMAyP2LmAXS8mfv4H72E5yuo1Wh+QQZolPEIcZUfQbZcCbqu0mGTBB95W6aA62SJulQ6i59S4p/VTNsqvm/0WRMPR4xEEp5iGo2f+swvaEx5D5n7fJMPdKlfmjT4AXzkeovwE8U+Be+N4ijufOY0bnAzYQ7y5qpRHoHzgE+Zyt2AN+g8xn95zKRIZpr6fNvXzQw5ywDHkUXi6O1tDV+HIKla75iO6Txkgp7cGd5Wyocmto2nmKN5DlKdfx08Gk7xUp4df0gjSJBv8OM4+waWMSK3otg+KvSWfr30ztA5RfFsY1od+EMxvZJ13H/l6pafL9cPuy1+v/RiW4POW/cqKhvwBlQRKtkU6kQMAAAAASUVORK5CYII="
                       alt="" className={'w-24 m-auto'}/>

                  <div className={'text-center text-green-600 font-bold mt-5 text-2xl'}>
                      Login
                  </div>

                    <div className={'mt-5 min-w-[300px]'}>


                        <div className={'flex'}>
                            <div className={'m-2 '}>
                                <label htmlFor='fname' className={'block'}>First Name</label>
                                <input type="text" id='fname' placeholder='Enter First Name' className={'block border  border-green-300 outline-none h-10 w-full focus:border-green-600'}/>
                            </div>

                            <div className={'m-2'}>
                                <label htmlFor='lname' className={'block'}>Last Name</label>
                                <input type="text" id='lname' placeholder='Enter Last Name' className={'block border  border-green-300 outline-none h-10 w-full focus:border-green-600'}/>
                            </div>
                        </div>



                        <div className={'m-2 mt-3'}>
                            <label htmlFor='username' className={'block'}>User Name</label>
                            <input type="text" id='username' placeholder='Enter User Name' className={'block border  border-green-300 outline-none h-10 w-full focus:border-green-600'}/>
                        </div>

                        <div className={'m-2 mt-3'}>
                            <label htmlFor='email' className={'block'}>Email</label>
                            <input type="text" id='email' placeholder='Enter Email' className={'block border  border-green-300 outline-none h-10 w-full focus:border-green-600'}/>
                        </div>

                        <div className={'m-2 mt-3'}>
                            <label htmlFor='password' className={'block'}>Password</label>
                            <input type="text" id='password' placeholder='Enter Password' className={'block border  border-green-300 outline-none h-10 w-full focus:border-green-600'}/>
                        </div>

                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-green-600 py-3 px-6 rounded-xl'}>Sign In</button>
                    </div>

                  <div className={'text-center mt-5 text-blue-400'}>
                    <Link to={'/login'}>Already have an Account </Link>
                  </div>


              </div>


          </section>
        )
    }

}

export default Signup