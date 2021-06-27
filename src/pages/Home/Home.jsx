import { AiOutlineFile } from 'react-icons/ai';
import { TEXT } from '../../constants/constants';
import './Home.css';

function Home() {
  return (
    <div className='container'>
      <div className='container-left'>
        <div className='itemleft1'>
          Hi, I'm <span className='name'>Bruna Prauchner </span>
        </div>
        <div className='itemleft1'>
          a computer scientist.
        </div>
        <div className='itemleft2 textbio'>
          {TEXT.HM1}
        </div>
        <a href='./BrunaPrauchner-CV-2021.pdf' target='_blank'>
          <button className='button-resume'>
            Résumé
            <AiOutlineFile className='bt-icon' />
          </button>
        </a>
      </div>
      <div className='container-right'>
        <img className='imgBruna' src='images/logoBruna.jpeg' alt='Bruna Prauchner' />
      </div>
    </div>
  );
}
export default Home;
