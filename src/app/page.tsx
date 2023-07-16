export default function Home() {
    return (
        <main>
            <p>FakeStore API</p>
            <button className="btn btn-primary">Hello daisyUI</button>
            <input type="checkbox" className="checkbox checkbox-secondary"/>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked={true} />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </main>
    )
}
