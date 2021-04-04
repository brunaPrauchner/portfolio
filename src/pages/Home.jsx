import LogoBruna from './logoBruna.jpeg';
import Cv from './BrunaPrauchner-CV-2021.pdf';
import { TEXT } from '../constants/constants'
import { AiOutlineFile } from "react-icons/ai";
import './Home.css'
function Home() {
  return (
    <div className="container">
      <div className="container-left">
        <div className="itemleft0">
          Hi, I'm <span className="name">Bruna Prauchner </span>
        </div>
        <div className="itemleft1">a computer scientist.</div>
        <div className="textbio itemleft2">
          {TEXT.HM1}
        </div>
        <a href={Cv} target="_blank"><button className={'button-resume'}>Résumé<AiOutlineFile className="bt-icon" /></button></a>

      </div>
      <div className="container-right">
        <img className="imgBruna" src={LogoBruna} alt="Bruna Prauchner" />
      </div>
    </div>
  );
}
export default Home;