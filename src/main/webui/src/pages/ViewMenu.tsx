import { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
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

  const toString = (p: any) => typeof p === "string" ? p : ""
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
          {/* {Object.values(menu?.digital_menu).map((e: any, i) => (
            <IonItem key={i}>{e.label}</IonItem>
          ))} */}
          {menu &&
            Object.values(menu.menu).map((e: any, i) => (
              <IonItem key={i}>
                <ul>
                <li>{e.title}</li>
                <li>{e.line2}</li>
                <li>{toString(e.line3)}</li>
                <li>{toString(e.price)}</li>
                </ul>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default ViewMenu;
