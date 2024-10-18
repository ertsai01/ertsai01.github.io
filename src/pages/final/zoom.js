import macCircles from './assets/img/maccircles.png';
import ogbg from './assets/img/ogbg.png';
import satherbg from './assets/img/satherbg.png';
import henesysbg from './assets/img/henesysbg.png';
import memebg from './assets/img/memebg.png';
import spiritedbg from './assets/img/spiritedbg.png';

import sather from './assets/img/sather.png';
import henesys from './assets/img/henesys.png';
import meme from './assets/img/meme.png';
import spirited from './assets/img/spirited.png';

import mic from "./assets/img/mic.png";
import video from "./assets/img/video.png";

import invite from "./assets/img/invite.png";
import group from "./assets/img/group.png";
import shareScreen from "./assets/img/sharescreen.png";
import chat from "./assets/img/chat.png";
import record from "./assets/img/record.png";
import reaction from "./assets/img/reaction.png";

import style from './assets/css/zoom.css';

function Zoom() {
  function show(element) {
    document.getElementById('og').classList.add('zoom-hidden');
    document.getElementById('sather').classList.add('zoom-hidden');
    document.getElementById('henesys').classList.add('zoom-hidden');
    document.getElementById('meme').classList.add('zoom-hidden');
    document.getElementById('spirited').classList.add('zoom-hidden');
    document.getElementById(element).classList.remove("zoom-hidden");
  }

  return (
    <div id='zoom-content-body' style={style}>
    <div id="zoom-container">
		<div id="zoom-heading"> 
				<img id="zoom-circles" src={macCircles} />
				<div id="zoom-applications">
					<p>Zoom Meeting</p>
				</div>
		</div>

		<div class="zoom-backgrounds">
			<img class="zoom-background" id="og" src={ogbg} />
			<img class="zoom-background zoom-hidden" id="sather" src={satherbg} />
			<img class="zoom-background zoom-hidden" id="henesys" src={henesysbg} />
			<img class="zoom-background zoom-hidden" id="meme" src={memebg} />
			<img class="zoom-background zoom-hidden" id="spirited" src={spiritedbg} />
		</div>

		<div id="zoom-iconbar">
			<div id="zoom-left">
				<img class="zoom-icon" src={mic} />
				<img class="zoom-icon" src={video} />
			</div>
			<div id="zoom-middle">
				<img class="zoom-icon" src={invite} />
				<img class="zoom-icon" src={group} />
				<img class="zoom-icon" src={shareScreen} />
				<img class="zoom-icon" src={chat} />
				<img class="zoom-icon" src={record} />
				<img class="zoom-icon" src={reaction} />
			</div>
			<div id="zoom-right">
				<a href="/applications">Leave Meeting</a>
			</div>
		</div>

		<div id="zoom-change">
			<h1>Change the background!</h1>
		</div>

		<div id="zoom-pictures">
			<img 
        class="zoom-pic" 
        id="satherpic" 
        src={sather} 
        onClick={() => show('sather')}
      />
			{/* SOURCE: gallery.berkeley.edu */}
			<img 
        class="zoom-pic" 
        id="henesyspic" 
        src={henesys} 
        onClick={() => show('henesys')}
      />
			{/* SOURCE: https://www.youtube.com/watch?v=s2_MAplvHeQ */}
			<img 
        class="zoom-pic" 
        id="memepic" 
        src={meme} 
        onClick={() => show('meme')}
      />
			{/* SOURCE: https://www.wired.com/story/distracted-boyfriend-meme-photographer-interview/ */}
			<img 
        class="zoom-pic" 
        id="spiritedpic" 
        src={spirited} 
        onClick={() => show('spirited')}
      />
			{/* SOURCE: http://www.ghibli.jp/info/013251/ */}
		</div>
	</div>
  </div>
  )
}

export default Zoom;