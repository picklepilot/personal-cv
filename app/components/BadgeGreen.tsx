export default function BadgeGreen(props: any) {
    return (
        <span
            className={`rounded-full bg-lime-600/10 px-3 py-1 text-sm font-semibold leading-6 text-lime-600 ring-1 ring-inset ring-lime-600/10 ${props.className}`}
        >
            {props.label}
        </span>
    )
}
