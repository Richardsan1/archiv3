import LibraryView from '@/components/LibraryView'
import { TFile } from '@/lib/utils'

export default async function Library() {
    const baseLink = 'https://gateway.lighthouse.storage/ipfs/'
    const CIDs = (await (
        await fetch(`${process.env.SERVER_URL}/api/library`, {
            next: { revalidate: 1 }
        })
    ).json()) as TFile[]
    return (
        <div>
            <LibraryView files={CIDs} baseLink={baseLink} />
        </div>
    )
}
