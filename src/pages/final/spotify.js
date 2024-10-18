import room from './assets/img/room.jpeg';
import playbutt from './assets/img/playbutt.png';
import style from './assets/css/spotify.css';

function Spotify() {
  return (
    <div id='spotify-content-body' style={style}>
      <div id="spotify-container">

      <div>
        <a href='/applications'>
          {'< back'}
        </a>
      </div>

      <div id="spotify-title">
        <img src={room} alt="playlist cover: purple room" />
        <div id="quarantunes">
          <h1>quarantunes</h1>
          <div id="spotify-description">
            <p>Created by</p>
            <div id="spotify-name">erintsai</div>
            <p> • 16 songs, 53 min</p>
          </div>
            <img id="spotbutt" src={playbutt} />
        </div>
      </div>

      <div id="spotify-content">
        <div class="songs">
          <ul>
            <li>BAD NEWS</li>
            <li>CORONA</li>
            <li>Sick Feeling</li>
            <li>get well soon</li>
            <li>Six Feet Apart</li>
            <li>Stay Inside</li>
            <li>leave</li>
            <li>Wake Up Alone</li>
            <li>Zoom</li>
            <li>Homebody</li>
            <li>FaceTime</li>
            <li>WeChat</li>
            <li>Lonely Alone</li>
            <li>fever dream - acoustic</li>
            <li>Away From You</li>
            <li>Quarantined From My Love</li>
          </ul>
        </div>
        <div class="artists">
          <ul>
            <li>Aries</li>
            <li>punchnello, Crush</li>
            <li>boy pablo</li>
            <li>Ariana Grande</li>
            <li>Alec Benjamin</li>
            <li>Raleigh Ritchie</li>
            <li>gnash</li>
            <li>The Chainsmokers, Jhené Aiko</li>
            <li>KYLE</li>
            <li>pH-1</li>
            <li>Karencici</li>
            <li>Higher Brothers, Keith Ape</li>
            <li>Chelsea Cutler, Jeremy Zucker</li>
            <li>mxmtoon</li>
            <li>Queen Naija</li>
            <li>ohsobrkn, Emily Blair</li>
          </ul>
        </div>
      </div>

      </div>
    </div>
  )
};

export default Spotify;