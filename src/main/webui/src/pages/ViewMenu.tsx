import { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useParams } from "react-router";

import { DigitalMenu, getMenu } from "../data/RestaurantRepository";

import "./ViewMenu.css";

function ViewMenu() {
  const [menu, setMenu] = useState<DigitalMenu>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(async () => {
    const menu = await getMenu(parseInt(params.id, 10));
    setMenu(menu);
  });

  const toString = (p: any) => (typeof p === "string" ? p : "");
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Zurück zur Restaurantauswahl" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {menu &&
            Object.values(menu.menu).map((e: any, i) => (
              <IonItem key={i}>
                <IonLabel className="ion-text-wrap">
                  <h2>
                    {e.title} CHF {toString(e.price)}
                  </h2>
                  <ul className="list">
                    <li>{e.line2}</li>
                    <li>{toString(e.line3)}</li>
                  </ul>
                </IonLabel>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default ViewMenu;
