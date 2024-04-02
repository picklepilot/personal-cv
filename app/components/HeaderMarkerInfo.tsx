import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'

export default function HeaderMarkerInfo() {
    return (
        <div className="absolute left-[0] top-[calc(5rem+5px)] h-[25px] w-[3px] bg-orange-400">
            <FontAwesomeIcon
                icon={faInfoCircle}
                className="relative left-2.5 top-[3px] h-5 w-5 max-w-sm text-orange-400"
            />
        </div>
    )
}
