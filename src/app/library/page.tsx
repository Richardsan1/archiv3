export default async function Library() {
    const baseLink = 'https://gateway.lighthouse.storage/ipfs/'
    const CIDs = (await (
        await fetch('http://localhost:3000/api/library')
    ).json()) as {
        id: string
        cid: string
        fileName: string
    }[]
    return (
        <div>
            <ul>
                {CIDs.map((file) => (
                    <li key={file.id}>
                        <a href={baseLink + file.cid}>
                            {file.fileName}: {file.id}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
