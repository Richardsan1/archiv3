'use client'
import { TFile } from '@/lib/utils'

export default function LibraryView({
    files,
    baseLink
}: {
    files: TFile[]
    baseLink: string
}) {
    return (
        <div>
            <ul className="flex flex-col items-center gap-4">
                {files.map((file) => (
                    <li
                        key={file.id}
                        className="h-20 w-1/4 rounded-xl border border-black pb-4 text-center shadow-md shadow-black transition-all duration-200
                        hover:border-green-900 hover:shadow-green-900"
                    >
                        <p>{file.fileName}</p>
                        <p>
                            Upload feito em:{' '}
                            {new Date(file.timestamp).toLocaleString()}
                        </p>
                        <a
                            className="font-bold text-blue-500 transition-all duration-200"
                            href={baseLink + file.cid}
                        >
                            Link
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
