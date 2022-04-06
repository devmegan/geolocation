export default function Description({coords}) {
    return (
        <>
            <h1 className="text-5xl font-bold">{coords ? coords : "useGeolocation"}</h1>
            <p className="py-6">A React hook that grabs a user's coordinates.</p>
        </>
    )
}