'use client'

import WorkGridItem from '@/app/work/WorkGridItem'

interface WorkGridProps {
    work: any[]
}

export default function WorkGrid({ work }: WorkGridProps) {
    return (
        <div className=''>
            <ul role='list' className='grid grid-cols-1'>
                {work.map((project: any, idx: number) => (
                    <WorkGridItem project={project} key={idx} />
                ))}
            </ul>
        </div>
    )
}
