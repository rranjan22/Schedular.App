const Footer = ({ length }) => {
    const today = new Date();

    return (
        <footer>
            <p>{length} List {length === 1? "Item" : "Items"} &copy; {today.getFullYear()} </p>
        </footer>
    )
}

export default Footer