import style from './assets/css/reminders.css';

function Reminders() {

  const toggle = (id) => {
    const elem = document.getElementById(id);
    elem.classList.toggle('reminders-fill');
  }
  
  return (
    <div id='reminders-content-body' style={style}>
      <div id="reminders-container">

      <div id="reminders-back">
        <a href='/#/final'>
          {'< back'}
          </a>
      </div>

      <div id="reminders-title">
        <h1>Reminders</h1>
      </div>

      <div id="reminders-content">
        <div id="reminders-check">
          <div 
            className='reminders-circle'
            id={'c1'}
            onClick={() => toggle('c1')}
          />
          <div 
            className='reminders-circle'
            id={'c2'}
            onClick={() => toggle('c2')}
          />
          <div 
            className='reminders-circle'
            id={'c3'}
            onClick={() => toggle('c3')}
          />
          <div 
            className='reminders-circle'
            id={'c4'}
            onClick={() => toggle('c4')}
          />
          <div 
            className='reminders-circle'
            id={'c5'}
            onClick={() => toggle('c5')}
          />
          <div 
            className='reminders-circle'
            id={'c6'}
            onClick={() => toggle('c6')}
          />
          <div 
            className='reminders-circle'
            id={'c7'}
            onClick={() => toggle('c7')}
          />
          <div 
            className='reminders-circle'
            id={'c8'}
            onClick={() => toggle('c8')}
          />
          <div 
            className='reminders-circle'
            id={'c9'}
            onClick={() => toggle('c9')}
          />
        </div>
        <div id="reminders">
          <ul>
            <li>Do laundry</li>
            <li>Scheme project</li>
            <li>MCB midterm</li>
            <li>Watch lectures</li>
            <li>Compose a piece</li>
            <li>Zoom party @ 10!</li>
            <li>CS lab</li>
            <li>Take a dance class</li>
            <li>Read a book</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Reminders;