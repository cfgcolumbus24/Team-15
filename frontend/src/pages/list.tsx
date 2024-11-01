import ListGroup from "./components/ListGroup";

function App() {
    let items = []; // Initialize items as an empty array

    const getMessage = () => {
        return items.length === 0 ? <p>No items found</p> : null;
    }

    return (
        <>
            <h1>List</h1>
            {getMessage()} // Call the function inside {}
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
