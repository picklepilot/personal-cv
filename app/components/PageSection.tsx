export default function PageSection(props: any) {
    return (
        <section className='w-full'>
            <div className='relative mx-auto w-full max-w-3xl bg-white px-8 py-10 md:px-16 md:py-20'>
                {props.children}
            </div>
        </section>
    )
}
