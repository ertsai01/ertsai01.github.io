import App from "../../App"
import macFolder from './assets/img/macfolder.png';
import macCircles from './assets/img/maccircles.png'
import macBack from "./assets/img/macback.png";
import spotify from "./assets/img/spotifypng.png";
import zoom from "./assets/img/zoompng.png";
import style from './assets/css/applications.css';

function Applications() {
  return (
    <div id='applications-content-body' style={style}>
    
    <div id="applications-container">
		<div id="mac-heading"> 
			<div className="mac-buttons">
				<img id="mac-circles" src={macCircles} />
				<a href='/#/final'>
          <img id="applications-back" src={macBack} />
        </a>
			</div>
			<div className="mac-title">
				<img id="mac-folder" src={macFolder} />
        <p id='applications'>Applications</p>
			</div>
		</div>

		<div id="icons">
				<a href="/#/spotify">
          <img id="spotify" src={spotify} />
        </a>
				{ /* SOURCE: https://developer.spotify.com/branding-guidelines/ */ }
				<a href="/#/zoom">
          <img id="zoom" src={zoom} />
        </a>
				{ /* SOURCE: https://zoom.us/brandguidelines */ }
		</div>
	</div>
  </div>
  )
}

export default Applications;