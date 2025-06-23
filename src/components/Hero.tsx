import { useState } from "react"
import './fontawesome.tsx';
// --left-arrow from "./../assets/left-arrow.png"
// --right-arrow from "./../assets/right-arrow.png"
// 8 мин 59 сек

type ImageSliderProps = {
    imageUrls: string[]
}

export function Hero({ imageUrls }: 
ImageSliderProps) {
        const [imageIndex, setImageIndex] = useState(0)
            // bg-[url('./../assets/hero1.png')]
        return (
            // max-w-11/12
            <section className="h-screen w-full m-auto mb-10 relative">
                <img src={imageUrls[imageIndex]} className="w-full h-full object-cover z-0 block"/>
                <div className="max-w-11/12 z-10">
                {/* bg-[url(/img/mountains.jpg)] */}
                    <div className="absolute top-0 left-0">
                        <p>Menu btn + Logo</p>
                    </div>
                    <div className="absolute top-10/12 left-0 right-0">
                        <p className="leading-[2]">
                            Липецк<br />
                            Адреса магазинов
                        </p>
                        <div className="absolute top-0 left-2/5 right-1/5 flex flex-row justify-between align-middle">
                        {/* bg-[url('./../assets/right-arrow.png')] bg-cover bg-no-repeat bg-center */}
                        {/* bg-[url('../public/images/tailwind.png')] */}
                            <button className="block cursor-pointer w-10 h-10 m-2 hover:invert">
                                <FontAwesomeIcon icon={ faAngleLeft } />
                            </button>
                            <button className="block cursor-pointer bg-lime-400  w-10 h-10 m-2 hover:invert"></button>
                        </div>
                    </div>
                </div>
            </section>
        );   
}