import sytles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={sytles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021" />
      <ul className={sytles.messageList}>
        <li className={sytles.message}>
          <p className={sytles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser melhor
            do que do ano passado ✔{" "}
          </p>
          <div className={sytles.messageUser}>
            <div className={sytles.userImage}>
              <img src="https://github.com/Hadeshade.png" alt="Marco Antonio" />
            </div>
            <span>Marco Antonio</span>
          </div>
        </li>

        <li className={sytles.message}>
          <p className={sytles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser melhor
            do que do ano passado ✔{" "}
          </p>
          <div className={sytles.messageUser}>
            <div className={sytles.userImage}>
              <img src="https://github.com/Hadeshade.png" alt="Marco Antonio" />
            </div>
            <span>Marco Antonio</span>
          </div>
        </li>

        <li className={sytles.message}>
          <p className={sytles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser melhor
            do que do ano passado ✔{" "}
          </p>
          <div className={sytles.messageUser}>
            <div className={sytles.userImage}>
              <img src="https://github.com/Hadeshade.png" alt="Marco Antonio" />
            </div>
            <span>Marco Antonio</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
