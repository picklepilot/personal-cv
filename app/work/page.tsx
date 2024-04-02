import TopNav from '@/app/components/TopNav'
import PageHeader from '@/app/components/PageHeader'
import WorkGrid from "@/app/work/WorkGrid";

export default function Work() {
    return (
        <main className="w-full max-w-6xl mx-auto flex min-h-screen flex-col items-center justify-between bg-white">
            <TopNav show={true} />
            <PageHeader title="My work up to now" description="From a private competitive sports social media app to re-inventing the speed and ease at which product data is managed within a multinational conglomerate, I have applied design-first problem solving to a wide range of projects." />
            <div className="w-full pb-20 bg-white px-20">
                <WorkGrid/>
            </div>
        </main>
    );
}
