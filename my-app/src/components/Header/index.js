import './style.css';

function Header(props) {
    return (
        <div className='header'>
            <h1>{props.text}</h1>
            <hr className='line' />
		</div>
    )
}

export default Header;
