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
                <form action="/archive" className="flex flex-col gap-1">
                    <input
                        type="text"
                        name="link"
                        className="border border-black p-1"
                        placeholder="Insira o link aqui"
                    />
                    <button
                        className="rounded-lg border border-black bg-black p-1 text-white"
                        type="submit"
                    >
                        Arquivar
                    </button>
                </form>
            </main>
        </div>
    )
}
