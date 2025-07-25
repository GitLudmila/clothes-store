import descr1 from './../assets/descr1.jpeg'
import descr2 from '../assets/descr2.jpeg'

export function Description() {
    return (
        <section className="w-full mb-10 bg-white z-10 flex flex-col items-center p-[1rem] pb-[4rem]">
            <div className="w-[1047px] flex flex-row items-center justify-between pb-[5rem]">
                <img src={descr1} className="pointer-events-none"/>
                <img src={descr2} className="pointer-events-none"/>
            </div>
            <div className="w-4/6 font-['Khula'] text-[16px] font-normal">
                <h3 className='text-[32px] font-bold text-sm/8 pb-[1.5rem]'>VSite — российский лайфстайл бренд одежды для молодых людей</h3>
                <div className='w-4/8'>
                    <p className='pb-[1rem]'>
                        Бренд VSite создан студентами энтузиастами. Мы стремимся удовлетворить 
                        все потребности в гардеробе — от верхней одежды до белья и аксессуаров. 
                        Для создания коллекций выбираем натуральные ткани и предлагаем актуальные вещи по доступным ценам.
                    </p>
                    <p className='pb-[1rem]'>
                        Также мы создаем одежду для маленьких (2-6 лет) и больших (7-12 лет) детей. 
                        Это практичная верхняя одежда для прогулок, а также комфортные вещи для садика 
                        и похода на кружки, основу которых составляют футболки, худи и свитшоты, джоггеры 
                        и леггинсы, трикотажные платья и многое другое.
                    </p>
                    <p className='pb-[1rem]'>
                        Чтобы быть в курсе всех новостей и акций, рекомендуем подписаться на наши 
                        <span className='text-gray-400 cursor-pointer hover:text-gray-600'> рассылки</span> и <span className='text-gray-400 cursor-pointer hover:text-gray-600'>телеграм</span>.
                        </p>
                    <p className='pb-[1rem]'>
                        Желаем приятных покупок! 
                    </p>
                    <p>
                        Ваш VSite
                    </p>
                </div>
            </div>
        </section>
    );   
}