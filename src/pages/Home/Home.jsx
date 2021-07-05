import { AiOutlineFile } from 'react-icons/ai'
import { TEXT } from '../../constants/constants'
import Bruna from '../../assets/images/logoBruna.jpeg'
import CV from '../../assets/BrunaPrauchner-CV-2021.pdf'
import './Home.css'

function Home() {
  return (
    <div className='container'>
      <div className='container-left'>
        <div className='item-left1'>
          Hi, I'm <span className='name'>Bruna Prauchner </span>
        </div>
        <div className='item-left1'>
          a computer scientist.
        </div>
        <div className='item-left2 text-bio'>
          {TEXT.HM1}
        </div>
        <button className='button-resume item-left3' onClick={() => window.open(CV, '_blank')}>
          <span>Résumé</span>
          <AiOutlineFile className='bt-icon' />
        </button>
      </div>
      <div className='container-right'>
        <img className='img-Bruna' src={Bruna} alt='Bruna Prauchner' />
      </div>
    </div>
  );
}
export default Home;
