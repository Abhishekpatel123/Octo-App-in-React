function Usermsg(probs) {
    return (
        <div className="usermsg">
            <div className="user-img-container">
                <img src="https://images.unsplash.com/photo-1607392310614-4e50fc051f11?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80" alt="user-icon"/>
            </div>
            {probs.text}
        </div>
    )
}

export default Usermsg;