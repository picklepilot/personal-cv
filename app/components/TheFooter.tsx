import { faAt, faPhone } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TheFooter() {
    return (
        <div className='w-full'>
            <div className='mx-auto flex w-full max-w-3xl items-center justify-between px-8 pb-6 md:px-16 dark:bg-zinc-900'>
                {/* <PicklepilotLogo /> */}
                <span className='group flex items-center space-x-2 text-sm opacity-65 hover:opacity-100'>
                    <span className='flex items-center'>
                        <FontAwesomeIcon icon={faPhone} className='mr-1 w-3' />
                        <span>845-667-2583</span>
                    </span>
                    <span>&middot;</span>
                    <span className='flex items-center'>
                        <FontAwesomeIcon icon={faAt} className='mr-1 w-3' />
                        <a href='mailto:kaczmar.justin@gmail.com' className='hover:text-blue-500 hover:underline'>
                            kaczmar.justin@gmail.com
                        </a>
                    </span>
                </span>
            </div>
        </div>
    )
}
