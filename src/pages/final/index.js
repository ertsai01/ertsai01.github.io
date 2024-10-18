import defaultCover from "./assets/img/cover1.png";
import title from "./assets/img/quarantitle.png";
import coffee1 from "./assets/img/coffee1.png";
import laptop1 from "./assets/img/laptop1.png";
import phone1 from "./assets/img/phone1.png";
import eigth from "./assets/img/eighth.png";
import double from "./assets/img/doubles.png";
import style from './assets/css/cover.css'

/**
 * To anyone reading this - I'm trying to preserve as much of the original vanilla HTML/CSS/JS implementation as possible, 
 * but some tweaks were made to make it compatible with the rest of the website in React. That's why these are now JS files instead of 
 * HTML files. Good luck if you're in WDD; feel free to use this as inspo & reach out if you have any questions <3
 */
function Final() {
    function show(element) {
        document.getElementById('default').classList.add('hidden');
        if (document.getElementById(element).classList) {
            document.getElementById(element).classList.remove("hidden");
        }
    }
    
    function hide(element) {
        document.getElementById('default').classList.remove('hidden');
        if (document.getElementById(element).classList) {
            document.getElementById(element).classList.add("hidden");
        }
    }

    return (
        <div id='final-content-body' style={style}>
            <div className="final-content">
                <img id="quarantitle" src={title} />
                <div className="covers">
                    <img className="cover1" id="default" src={defaultCover} />
                    <img className="cover1 hidden" id="coffee" src={coffee1} />
                    <img className="cover1 hidden" id="laptop" src={laptop1} />
                    <img className="cover1 hidden" id="phone" src={phone1} />
                    <a 
                        className="final-buttons" 
                        id="button1" 
                        href="/dalgona"
                        onMouseOut={() => hide('coffee')}
                        onMouseOver={() => show('coffee')}
                    />
                    <a 
                        className="final-buttons" 
                        id="button2" 
                        href="/applications"
                        onMouseOut={() => hide('laptop')}
                        onMouseOver={() => show('laptop')}
                    />
                    <a 
                        className="final-buttons" 
                        id="button3" 
                        href="/reminders"
                        onMouseOut={() => hide('phone')}
                        onMouseOver={() => {
                            show('phone');
                        }}
                    />
                    <img id="eighth" src={eigth} />
                    <img id="doubles" src={double} />
                </div>
            </div>
        </div>
    )
}

export default Final;
