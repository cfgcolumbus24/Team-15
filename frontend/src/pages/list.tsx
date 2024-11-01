function ListGroup(){
	// use const instead of let for constant values
	let items = [“New York, “San Francisco, “Tokyo”, “London”, “Paris”];
	// for null
	items = [];
	
	const getMessage = () =>{
		return items.length === 0 ? <p>No item found</p> : null;
	}
	
	return{
		<> // so that you can list multiple things (could also use div)
			<h1>List</h1>
			{getMessage()} // can call function inside {}
			// or you can call the function like this
			{items.length === 0 && <p>No item found</p>
				<ul className = "list-group">
					{items.map((item) => (
						<li
							className = "list-group=item"
							key={item}
						>
							{item}
						</li>
					))}
				</ul>
		<>
	);
}

export detail ListGroup;