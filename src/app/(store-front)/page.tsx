import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <p className="font-poppins_medium">FakeStore API</p>
            <button className="btn btn-primary">Hello daisyUI</button>
            <h1 className="text-3xl underline">Hello, Next.js!</h1>
            <Image
                src="https://res.cloudinary.com/dsim60jne/image/upload/v1684229456/personal%20website%20asset/stellar_minds_banner_msbzlw.png"
                width={500}
                height={600}
                alt="picture"
                style={{width: 'auto', height: 'auto'}}
                priority={true}
            />
        </main>
    )
}
