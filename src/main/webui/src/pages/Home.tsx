import MessageListItem from "../components/MessageListItem";
import { useState } from "react";
import { Message, getMessages } from "../data/messages";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const load = async () => {
    const msgs = await getMessages();
    setMessages(msgs);
  };

  useIonViewWillEnter(load);

  const refresh = (e: CustomEvent) => {
    load().then(e.detail.complete());
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {messages.map((m) => (
            <MessageListItem key={m.id} message={m} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
