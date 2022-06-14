import './assets/css/cover.css';
import defaultCover from "./assets/img/cover1.png";
import title from "./assets/img/quarantitle.png";
import coffee1 from "./assets/img/coffee1.png";
import laptop1 from "./assets/img/laptop1.png";
import phone1 from "./assets/img/phone1.png";
import eigth from "./assets/img/eighth.png";
import double from "./assets/img/doubles.png";

function Final() {
    const def = document.querySelector('#default');
    const coffee = document.querySelector('#coffee');
    const laptop = document.querySelector('#laptop');
    const phone = document.querySelector('#phone');

    if (coffee) coffee.style.opacity = '0.01';
    if (laptop) laptop.style.opacity = '0.01';
    if (phone) phone.style.opacity = '0.01';


    function show(element) {
        def.style.opacity = '0.01';
        if (document.getElementById(element) != null) document.getElementById(element).style.opacity = '1';
    }

    function hide(element) {
        def.style.opacity = '1';
        if (document.getElementById(element) != null) document.getElementById(element).style.opacity = '0.01';
    }

    return (
        <div id='content-body'>
            <div class="content">
            <img id="quarantitle" src={title} />
            <div class="covers">
                <img class="cover1" id="default" src={defaultCover} />
                <img class="cover1" 
                    id="coffee" 
                    src={coffee1}
                />
                <img class="cover1" 
                    id="laptop" 
                    src={laptop1} 
                />
                <img class="cover1" 
                    id="phone" 
                    src={phone1} 
                />
                <a class="buttons" 
                    id="button1" 
                    href="./dalgona.html"
                    onMouseOver={() => show('coffee')} 
                    onMouseOut={() => hide('coffee')}
                ></a>
                <a class="buttons" 
                    id="button2" 
                    href="./applications.html"
                    onMouseOver={() => show('laptop')} 
                    onMouseOut={() => hide('laptop')}
                ></a>
                <a class="buttons" 
                    id="button3" 
                    href="./reminders.html" 
                    onMouseOver={() => show('phone')} 
                    onMouseOut={() => hide('phone')}
                ></a>
                <img id="eighth" src={eigth} alt='eigth notes' />
                <img id="doubles" src={double} alt='double eigth notes' />
            </div>
        </div>

        </div>
    )
}

export default Final;
