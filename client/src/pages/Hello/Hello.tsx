import monkey from '../../assets/monkey-dance.gif'; 
import './hello.css'; 
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom'; 

const Hello = () => {
  return (
    <div className='container'>
      <div className="title">
        <h1>Are You Julia?</h1>
      </div>
      <div className="image">
        <img src={monkey} alt="monkey" />
      </div>
      <div className="buttons">
        <Link to='/yes'>
          <Button title='Yes' />  
        </Link>
        <Link to="/no">
          <Button title='No' /> 
        </Link>
      </div>
    </div>
  )
}

export default Hello