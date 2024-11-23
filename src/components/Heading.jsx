
export function Heading({ user, logout }) {
    return (
        <div className="Heading">
            {user && <h1>Welcome, {user.name}</h1>}
            <button className="btn" onClick={logout}>Log out</button>
        </div>
    )
}
