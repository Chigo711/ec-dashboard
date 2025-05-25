function Button({className, style, children}) {
    return (
        <button className={className} style={{background: "#6b72e7"}}>
            {children}
        </button>
    )
}

export default Button
