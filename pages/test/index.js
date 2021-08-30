

export default function TEST({data }) {

    console.log(data)
    return (
        <div>

            {data.message}

        </div>
    )
}



export async function getStaticProps(context) {
    const res = await fetch('https://shawn-ahamed.me/polanji/Polanji-v2/public/api/test_api');
    const data = await res.json();

    return {
        props: {
            data
        },
    }
}
