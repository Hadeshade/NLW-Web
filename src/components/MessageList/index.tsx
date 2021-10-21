import sytles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

// Tipagem da mensagem em Typescript
type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>("messages/last3").then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={sytles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021" />
      <ul className={sytles.messageList}>
        {messages.map((message) => {
          return (
            <li key={message.id} className={sytles.message}>
              <p className={sytles.messageContent}>{message.text}</p>
              <div className={sytles.messageUser}>
                <div className={sytles.userImage}>
                  <img
                    src="https://github.com/Hadeshade.png"
                    alt={message.user.name}
                  />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
