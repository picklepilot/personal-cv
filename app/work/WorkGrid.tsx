'use client'

import work from '@/app/work/work.json'
import WorkGridItem from '@/app/work/WorkGridItem'

export default function WorkGrid() {
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
