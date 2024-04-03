'use client'

import TailwindBlockquote from '@/app/components/TailwindBlockquote'

export default function LandingSectionWhoIAm() {
    return (
        <div>
            <div className="pt-5">
                <div className="mt-6 text-zinc-700">
                    <div className="pb-8">
                        <TailwindBlockquote
                            quote={'You love to design — in code.'}
                        />
                        <div className="mt-5 space-y-4">
                            <p>
                                This is my Bat Signal. This is how I live my
                                professional life. Design-in-code is core to my
                                operation. So much could be said about this
                                quality. To be concise, I always had an
                                appreciation for design. It's what led me to
                                becoming a developer by trade. My first full
                                time job was at an agency that is run by
                                designers and architects. It was there that I
                                learned how vital design is to the success of a
                                project. It was at my current job that I really
                                picked up on how valuable being able to speak
                                the language of design as a developer can be.
                            </p>
                            <p>
                                <strong>For example,</strong> HAMR is the
                                project that I've been working on for the past 7
                                years at 3M. I know my way around Figma very
                                well, but for the most recent version of HAMR
                                (v2, freshly/successfully rolled out 🎉), I was
                                able to re-design fully in code—a large nod to
                                y'all for that one 😉.
                            </p>
                        </div>
                    </div>

                    <div className="pb-8">
                        <TailwindBlockquote
                            quote={'You’re fanatical about polish.'}
                        />
                        <div className="mt-5 space-y-4">
                            <p>
                                Can very much thank MBLM for this one—at least
                                professionally. I have experience as a "pixel
                                perfectionist" in the extremes of workplace
                                environments, one end being the classic digital
                                design agency and the other being an
                                multinational conglomerate where being extremely
                                lean is vital to survival. (
                                <strong>Note:</strong> It's very difficult to
                                convince one of the world's largest companies'
                                employees that your thing will be better than
                                the thing they currently use. Jacob's Law ain't
                                a joke.) <br />
                                <br />
                                <strong>Bottom line:</strong> Being able to work
                                where "good enough" is permanently replaced by
                                "fanatical about polish" sounds like a place
                                where I can thrive.
                            </p>
                        </div>
                    </div>

                    <div className="pb-8">
                        <TailwindBlockquote
                            quote={
                                'You dive deep. && You live on the bleeding edge. && You love to learn new tools.'
                            }
                        />
                        <div className="mt-5 space-y-4">
                            <p>
                                These three points exist in tandem for me, both
                                in my professional and personal
                                design/development life.
                            </p>
                            <p>
                                On the professional side, I mentioned before
                                that it's extremely difficult to convince a
                                workforce to transition from their current thing
                                to my more modern and prettier thing. That's why
                                I was brought into 3M 7 years ago and have
                                stayed to this point. I've been able to
                                consistently discover and apply new
                                technologies/optimizations to achieve the
                                unachievable by other software being used. (Eg.
                                forking the{' '}
                                <a
                                    href="https://github.com/picklepilot/vue-virtual-scroll-list"
                                    target={'_blank'}
                                    className="link"
                                >
                                    vue-virtual-scroll-list
                                </a>{' '}
                                component and allowing our one-of-a-kind
                                dashboard layout to happen.)
                                <br />
                                <br />
                                On the personal side, that's pretty much what my
                                current passion project,{' '}
                                <a href="/work/bibli" className="link">
                                    bibli
                                </a>
                                , is for (more on this later). It's been an
                                amazing way for me to keep focused on the latest
                                and greatest with respect to my toolkit.
                            </p>
                        </div>
                    </div>

                    <div className="pb-8">
                        <TailwindBlockquote
                            quote={
                                'You are a user and champion of the Tailwind Labs products.'
                            }
                        />
                        <div className="mt-5 space-y-4">
                            <p className="">
                                <strong>Note:</strong> I somewhat put these
                                words in your mouths, but I just wanted to drive
                                this point home. 😜
                            </p>
                            <p>
                                Over the past several years, I have come to rely
                                heavily on Tailwind as my exclusive CSS
                                framework. It would be amazing to be able to
                                wake up every day knowing that I am contributing
                                to something that provides an impact that I've
                                personally felt and can understand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
