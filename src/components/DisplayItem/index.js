import './style.css';

function DisplayItem(props) {

    const {thumbnail, rightText, leftText, link, alt} = props;

    return (
        <div className='display-item'>
            <p id='display-text-right'>{rightText}</p>
            <p id='display-text-left'>{leftText}</p>
            <a href={link} target='_blank' rel="noreferrer" >
                <img src={thumbnail} alt={alt} />
            </a>
        </div>
    )
}

export default DisplayItem;