import './yes.css'
import birthdayMonkey from '../../assets/birthday-monkey.gif';
import song from '../../assets/song.mp3';

const Yes = () => {
  return (
    <div className="yes-container">
      <div className="yes-title">
        <h1>Happy Birthday <span>Julia!!!!</span></h1>
      </div>
      <div className="yes-gif">
        <img src={birthdayMonkey} alt="birthday monkey" />
      </div>
      <div className="yes-sub">
        <h2>Thank you for being the best girlfriend EVER!</h2>
      </div>

      <audio autoPlay loop >
        <source src={song}/>
      </audio>
    </div>
  )
}

export default Yes