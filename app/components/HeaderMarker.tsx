import { faGift, faInfoCircle, faXmark } from '@awesome.me/kit-e9b483eadd/icons/classic/light'
import type { IconName } from '@fortawesome/fontawesome-common-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faGift, faXmark, faInfoCircle)

enum Size {
    SMALL,
    MEDIUM,
    LARGE,
}

enum Color {
    ORANGE,
    SKY,
    LIME,
}

enum Icon {
    XMARK,
    INFO,
    GIFT,
    TAILWIND,
}

type Props = {
    color: Color
    icon: Icon
    size: Size
}

const SIZE_MAP = {
    [Size.SMALL]: 'h-[22px]',
    [Size.MEDIUM]: 'h-[25px]',
    [Size.LARGE]: 'h-[36px]',
}

const ICON_CLASS_MAP = {
    [Size.SMALL]: '-top-px h-4 w-4',
    [Size.MEDIUM]: 'top-[3px] h-5 w-5',
    [Size.LARGE]: 'top-[4px] h-7 w-7',
}

const COLOR_MAP = {
    [Color.ORANGE]: 'text-orange-400',
    [Color.SKY]: 'text-blue-400',
    [Color.LIME]: 'text-lime-400',
}

const BG_COLOR_MAP = {
    [Color.ORANGE]: 'bg-orange-400',
    [Color.SKY]: 'bg-blue-400',
    [Color.LIME]: 'bg-lime-400',
}

const ICON_MAP = {
    [Icon.XMARK]: 'xmark',
    [Icon.INFO]: 'info-circle',
    [Icon.GIFT]: 'gift',
    [Icon.TAILWIND]: 'Tailwind_CSS_Logo.svg.png',
}

export default function HeaderMarker(props: Props) {
    const { color, icon, size } = props
    return (
        <div
            className={`absolute top-[calc(3rem)] left-[0] w-[3px] md:top-[calc(5rem+5px)] ${BG_COLOR_MAP[color]} ${SIZE_MAP[size]}`}
        >
            {ICON_MAP[icon] !== 'Tailwind_CSS_Logo.svg.png' ? (
                <FontAwesomeIcon
                    icon={['fal', ICON_MAP[icon] as IconName]}
                    className={`relative left-2.5 max-w-sm ${COLOR_MAP[color]} ${ICON_CLASS_MAP[size]}`}
                />
            ) : (
                <img
                    src={`/Tailwind_CSS_Logo.svg.png`}
                    alt='Tailwind mark'
                    width={25}
                    className='relative top-[5px] left-2.5 max-w-sm'
                />
            )}
        </div>
    )
}

HeaderMarker.color = Color
HeaderMarker.icon = Icon
HeaderMarker.size = Size
