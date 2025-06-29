import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.tsx'
// 20 мин 45 сек

type ImageSliderProps = {
    imageUrls: string[]
}

export function Hero({ imageUrls }: 
ImageSliderProps) {
        const [imageIndex, setImageIndex] = useState(0)

        function showPrevImage(){
            setImageIndex(index => {
                if(index === 0) return imageUrls.length - 1
                return index - 1
            })
        }

        function showNextImage(){
            setImageIndex(index => {
                if(index === imageUrls.length - 1) return 0
                return index + 1
            })
        }

        return (
            <section className="h-screen w-full m-auto mb-10 relative">
                {/* <div className="w-full h-full overflow-hidden">
                    {imageUrls.map(url => (
                        <img 
                            key={url} 
                            src={url} 
                            // translate-[`${-100 * imageIndex}%`]
                            className="w-full h-full object-cover z-0 block"
                        />
                    ))}
                </div> */}
                <img src={imageUrls[imageIndex]} className="w-full h-full object-cover object-center z-0 block"/>
                <div className="block text-[6rem] xl:text-[12rem] text-gray-300 font-medium rotate-90 absolute top-1/4 right-1/12 opacity-60">DENIM</div>
                <div className="max-w-11/12 z-10">
                    <div className="absolute top-5 left-15 right-30 flex flex-row items-start">
                        <button className="block cursor-pointer w-15 h-15 m-2">
                            <FontAwesomeIcon icon={ ['fa-solid', 'bars'] } color="Black" size="3x" />
                        </button>
                        <h1 className="block cursor-pointer font-['Megrim'] text-white text-9xl hover:text-shadow-lg/20">VSite</h1>
                    </div>
                    <div className="absolute top-10/12 left-25 right-0">
                        <p className="leading-[2] text-[2rem]">
                            Липецк<br />
                            Адреса магазинов
                        </p>
                        <div className="absolute top-0 left-2/5 right-1/5 flex flex-row justify-between items-center">
                            <button onClick={showPrevImage} className="block cursor-pointer w-15 h-15 m-2 opacity-80 hover:opacity-100">
                                <FontAwesomeIcon icon={ ['fa-solid', 'angle-left'] } color="White" size="3x" />
                            </button>
                            <div className="flex flex-row items-center">
                                {imageUrls.map((_, index) => (
                                    <button onClick={() => setImageIndex(index)} className="block cursor-pointer opacity-50 bg-white rounded-full w-5 h-5 not-last:mr-[2rem] hover:opacity-100"></button>
                                ))}
                            </div>
                            <button onClick={showNextImage} className="block cursor-pointer w-15 h-15 m-2 opacity-80 hover:opacity-100">
                                <FontAwesomeIcon icon={ ['fa-solid', 'angle-right'] } color="White" size="3x" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );   
}