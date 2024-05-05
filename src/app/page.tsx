import UploadForm from "@/components/UploadForm"

export default function Home() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-12 p-4 pb-64">
            <section>
                <h1 className="text-center text-4xl">
                    Bem Vindo ao <span>Archiv3</span>
                </h1>
                <p className="text-center text-lg">
                    Aqui você pode arquivar sites, artigos e noticias para sua
                    preservação histórica.
                </p>
            </section>
            <main className="flex justify-center">
                <UploadForm />
            </main>
        </div>
    )
}
