export function Subscribe() {
    return (
        // max-w-11/12
        <section className="font-['Khula'] w-4/6 max-w-[1047px] mb-10 bg-gray-100 flex flex-col items-center space-y-5 p-[4rem] mb-[3rem] ml-[35vh]">
            <h6 className="text-[32px] w-2/6">Подписывайся на наши обновления</h6>
            <p className="text-[13px]">Узнай первым о старте скидок и специальных предложений!</p>
            <form className="font-['Roboto'] text-[20px] space-x-5" action="" method="get">
                <input
                    type='email'
                    id='email'
                    className='input p-[1em] border-gray-200'
                    placeholder='Введите e-mail'
                />              
                <button className="p-[1em] bg-black text-white">Подписаться</button>
            </form>
            <span className="font-['Roboto'] text-[8px]">Подписываясь рассылку, вы соглашаетесь с Политикой конфиденциальности.</span>
        </section>
    );   
}