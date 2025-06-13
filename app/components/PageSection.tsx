import { cn } from '@/app/utils/class-name.utils'

export default function PageSection(props: { children: React.ReactNode; id?: string; className?: string }) {
    return (
        <section
            id={props.id || `section-${Math.random().toString(36).substring(2, 9)}`}
            className={cn(`relative mx-auto w-full max-w-3xl rounded-lg px-8 py-10 md:px-16 md:py-16`, props.className)}
        >
            {props.children}
        </section>
    )
}
