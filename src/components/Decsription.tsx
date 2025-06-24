import descr1 from './../assets/descr1.jpeg'
import descr2 from '../assets/descr2.jpeg'

export function Description() {
    return (
        // max-w-11/12
        <section className="h-screen w-full mb-10 bg-white z-10 flex flex-col items-center p-[1rem]">
            <div className="w-[1047px] flex flex-row items-center justify-between">
                <img src={descr1} className=""/>
                <img src={descr2} className=""/>
            </div>
            <div className="w-5/6 font-['Khula'] text-[16px] font-normal">
                <h3 className='text-[32px] font-bold'>VSite — российский лайфстайл бренд одежды для молодых людей</h3>
                <p>
                Бренд VSite создан студентами энтузиастами. Мы стремимся удовлетворить 
                все потребности в гардеробе — от верхней одежды до белья и аксессуаров. 
                Для создания коллекций выбираем натуральные ткани и предлагаем актуальные вещи по доступным ценам.
                </p>
                <p>
                Также мы создаем одежду для маленьких (2-6 лет) и больших (7-12 лет) детей. 
                Это практичная верхняя одежда для прогулок, а также комфортные вещи для садика 
                и похода на кружки, основу которых составляют футболки, худи и свитшоты, джоггеры 
                и леггинсы, трикотажные платья и многое другое.
                </p>
                <p>
                Чтобы быть в курсе всех новостей и акций, рекомендуем подписаться на наши рассылки и телеграм.
                </p>
                <p>
                Желаем приятных покупок! 
                </p>
                <p>
                Ваш VSite
                </p>
            </div>
        </section>
    );   
}