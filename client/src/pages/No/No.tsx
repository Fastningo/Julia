import './no.css'
import angry from '../../assets/angry-monkey.gif';
import alarm from '../../assets/alarm.mp3';


const No = () => {
  return (

    <div className="no-container">
      <div className="no-title">
        <h1>GET OUT!!!!!</h1>
      </div>
      <div className="no-gif">
        <img src={angry} alt="angry monkey" />
      </div>
      <audio autoPlay loop >
        <source src={alarm} type="audio/mpeg" />
      </audio>
    </div>

  )
}

export default No