import Spinner from 'react-bootstrap/Spinner';
import "./SpinnerBs.css";
const  SpinnerBs = () => {
  return (
    <Spinner animation="border" role="status" className='spinner'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerBs;