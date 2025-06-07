'use client'

import work from '@/app/work/work.json'
import WorkGridItem from '@/app/work/WorkGridItem'

export default function WorkGrid() {
    return (
        <div className='mt-16 sm:mt-20'>
            <ul
                role='list'
                className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2'
            >
                {work.map((project: any, idx: number) => (
                    <WorkGridItem project={project} key={idx} />
                ))}
            </ul>
        </div>
    )
}
