import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.tsx'

export function Footer() {
    const toCustomers = ["Доставка", "Отследить заказ", "Оплата", "Возврат и обмен",
        "Акции и конкурсы", "Таблицы размеров", "Правила продажи", "Оформление заказа",
        "Уход за товаром", "Политика конфиденциальности", "Программа лояльности"];
    const aboutCompany = ["О нас", "Вакансии", "Контакты"];

    return (
        <section className="font-['Roboto'] w-full mb-10 flex flex-col space-y-25 p-16">
            <div className="text-[16px] flex flex-row gap-32 w-4/6 pl-56">
                <div className="flex flex-col gap-2.5">
                    <h6 className="font-bold">ПОКУПАТЕЛЯМ</h6>
                    <ul className="font-light flex flex-col gap-2">
                        <li>{toCustomers[0]}</li>
                        <li>{toCustomers[1]}</li>
                        {/* { {toCustomers.map((item) => <li>item</li>)} } */}
                    </ul>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h6 className="font-bold">О КОМПАНИИ</h6>
                    <ul className="font-light flex flex-col gap-2">
                        <li>{aboutCompany[0]}</li>
                        <li>{aboutCompany[1]}</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center">
                <div className="flex flex-row">
                    <button className="block cursor-pointer w-15 h-15 m-2 opacity-70 hover:opacity-100">
                        <FontAwesomeIcon icon={ ['fa-brands', 'fa-telegram'] } size="2x" />
                    </button>   
                    <button className="block cursor-pointer w-15 h-15 m-2 opacity-70 hover:opacity-100">
                        <FontAwesomeIcon icon={ ['fa-brands', 'fa-vk'] } size="2x" />
                    </button>    
                    <button className="block cursor-pointer w-15 h-15 m-2 opacity-70 hover:opacity-100">
                        <FontAwesomeIcon icon={ ['fa-brands', 'fa-instagram'] } size="2x" />
                    </button>                     
                </div>
                <div className="flex flex-row items-center cursor-pointer hover:*:text-shadow-lg/20">
                    <FontAwesomeIcon icon={ ['fa-brands', 'fa-apple'] } size="2x" />
                    <p className='w-3/6 ml-[10px]'>Загрузите в <span>App Store</span></p>
                </div>
                <div className="flex flex-row items-center cursor-pointer hover:*:text-shadow-lg/20">
                    <FontAwesomeIcon icon={ ['fa-brands', 'fa-google-play'] } size="2x" color="Green" />
                    <p className='w-3/6 ml-[10px]'>Доступно в <span>Google Play</span></p>
                </div>
            </div>
        </section>
    );   
}