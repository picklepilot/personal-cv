export default function PageSection(props: any) {
    return (
        <section className="w-full">
            <div className="relative mx-auto w-full max-w-3xl bg-white px-16 py-20">
                {props.children}
            </div>
        </section>
    )
}
