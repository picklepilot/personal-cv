import { faAt, faPhone } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PicklepilotLogo from './PicklepilotLogo'

export default function ThankYou() {
    return (
        <div id='thank-you' className='mx-auto max-w-3xl px-4 sm:px-0'>
            <div className={`relative rounded-3xl p-4 sm:p-8`}>
                <div className='relative flex space-x-3 pr-4 md:pr-0'>
                    <div
                        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800`}
                    >
                        <div className='relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-900/8 bg-white shadow-lg shadow-zinc-800/5 dark:border dark:border-zinc-700/40 dark:bg-zinc-800 dark:shadow dark:ring-0 dark:shadow-zinc-900/50'>
                            <PicklepilotLogo />
                        </div>
                    </div>
                    <div className='mb-3 flex min-w-0 flex-1 flex-wrap-reverse justify-between pt-1 md:flex-row md:space-x-4'>
                        <div className='mt-1 md:mt-0'>
                            <div className='flex items-center justify-between'>
                                <div className='text-5xl font-bold'>Thank you!</div>
                            </div>

                            <p className='mt-2 max-w-sm text-base text-zinc-500 sm:max-w-md'>
                                Thanks for taking the time to read through my digital resume. I hope you've enjoyed
                                getting to know me a bit more. Feel free to reach out to me using the contact details
                                below.
                            </p>

                            <div className='group mt-4 flex flex-col space-y-2 pb-20 text-sm opacity-65 hover:opacity-100 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2'>
                                <a
                                    href='tel:8456672583'
                                    className='flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-medium text-zinc-900 shadow-sm backdrop-blur-md transition hover:bg-white/20 dark:border-zinc-700/40 dark:text-zinc-100'
                                >
                                    <FontAwesomeIcon icon={faPhone} className='mr-2 w-3' />
                                    <span>845-667-2583</span>
                                </a>
                                {/* <span className='hidden sm:inline'>&middot;</span> */}
                                <a
                                    href='mailto:kaczmar.justin@gmail.com'
                                    className='flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-medium text-zinc-900 shadow-sm backdrop-blur-md transition hover:bg-white/20 dark:border-zinc-700/40 dark:text-zinc-100'
                                >
                                    <FontAwesomeIcon icon={faAt} className='mr-2 w-3' />
                                    <span>kaczmar.justin@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
