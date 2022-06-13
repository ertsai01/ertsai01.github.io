import './style.css';

function SpeechBubble(props) {
    const type = props.type;

    return (
        <div class='speech-bubble-container'>
            {type === 'text' && <div class="speech-bubble">{props.content}</div>}
            {type === 'img' && <img class="img-bubble" src={props.content} alt='Erin' /> }
            {type === 'link' && <div class="speech-bubble">
                <a href='props.link'>{props.content}</a></div>}
            {type !== 'img' && <div class="speech-triangle"></div>}
        </div>
    )
}

export default SpeechBubble;
