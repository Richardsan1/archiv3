'use client'
import { TFile } from '@/lib/utils'
import { useMemo, useState } from 'react'

export default function LibraryView({
    files,
    baseLink
}: {
    files: TFile[]
    baseLink: string
}) {
    const [search, setSearch] = useState('')
    const filteredFiles = useMemo(() => {
        return files.filter((file) =>
            file.fileName.toLowerCase().includes(search.toLowerCase())
        )
    }, [files, search])
    return (
        <div className="grid gap-2">
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Busque aqui..."
                    className="rounded-md border border-gray-600 p-1 focus:border-black"
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </div>
            <ul className="flex flex-col items-center gap-4">
                {filteredFiles.map((file) => (
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
