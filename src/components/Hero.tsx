import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.tsx'
// 8 мин 59 сек

type ImageSliderProps = {
    imageUrls: string[]
}

export function Hero({ imageUrls }: 
ImageSliderProps) {
        const [imageIndex, setImageIndex] = useState(0)
        return (
            <section className="h-screen w-full m-auto mb-10 relative">
                <img src={imageUrls[imageIndex]} className="w-full h-full object-cover z-0 block"/>
                <div className="block text-[12rem] text-gray-300 font-medium rotate-90 absolute top-95 right-40 opacity-60">DENIM</div>
                <div className="max-w-11/12 z-10">
                    <div className="absolute top-5 left-15 right-30 flex flex-row items-start">
                        <button className="block cursor-pointer w-15 h-15 m-2">
                            <FontAwesomeIcon icon={ ['fa-solid', 'fa-bars'] } color="Black" size="3x" />
                        </button>
                        <h1 className="block cursor-pointer font-['Megrim'] text-white text-9xl hover:text-shadow-lg/20">VSite</h1>
                    </div>
                    <div className="absolute top-10/12 left-25 right-0">
                        <p className="leading-[2] text-[2rem]">
                            Липецк<br />
                            Адреса магазинов
                        </p>
                        <div className="absolute top-0 left-2/5 right-1/5 flex flex-row justify-between items-center">
                            <button className="block cursor-pointer w-15 h-15 m-2 opacity-80 hover:opacity-100">
                                <FontAwesomeIcon icon={ ['fa-solid', 'fa-angle-left'] } color="White" size="3x" />
                            </button>
                            <button className="block cursor-pointer opacity-50 bg-white rounded-full w-5 h-5 hover:opacity-100"></button>
                            <button className="block cursor-pointer w-15 h-15 m-2 opacity-80 hover:opacity-100">
                                <FontAwesomeIcon icon={ ['fa-solid', 'fa-angle-right'] } color="White" size="3x" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );   
}