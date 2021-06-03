

export function Logo(props) {

	return (
        <img className={`${props.className}`} src={require( "./logo.svg")} />
	);
}

