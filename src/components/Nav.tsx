import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.tsx'

export function Nav() {
        return (
            // max-w-11/12
            <section className="h-screen w-[90px] mb-10 bg-white z-10 flex flex-col items-center fixed top-0 right-0 p-[1rem]">
                <button className="block cursor-pointer w-15 h-15 m-2 mb-[1.5em] hover:bg-gray-300">
                    <FontAwesomeIcon icon={ ['solid', 'bag-shopping'] } color="Black" size="2x" />
                </button>
                <button className="block cursor-pointer w-15 h-15 m-2 mb-[1.5em] hover:bg-gray-300">
                    <FontAwesomeIcon icon={ ['solid', 'user'] } color="Black" size="2x" />
                </button>
                <button className="block cursor-pointer w-15 h-15 m-2 mb-[1.5em] hover:bg-gray-300">
                    <FontAwesomeIcon icon={ ['solid', 'heart'] } color="Black" size="2x" />
                </button>
                <button className="block cursor-pointer w-15 h-15 m-2 mb-[1.5em] hover:bg-gray-300">
                    <FontAwesomeIcon icon={ ['solid', 'magnifying-glass'] } color="Black" size="2x" />
                </button>
            </section>
        );   
}