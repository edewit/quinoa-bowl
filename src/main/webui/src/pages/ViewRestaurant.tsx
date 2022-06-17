import { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useParams } from "react-router";

import { getMenu, MenuItem } from "../data/RestaurantRepository";
import MenuListItem from "../components/MenuListItem";

import "./ViewRestaurant.css";

function ViewRestaurant() {
  const [menu, setMenu] = useState<MenuItem[]>();
  // const params = useParams<{ id: string }>();

  useIonViewWillEnter(async () => {
    // const menu = await getMenu(parseInt(params.id, 10));
    setMenu(menu);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonList>
        {/* <MenuListItem menu={menu!} /> */}
      </IonList>
    </IonPage>
  );
}

export default ViewRestaurant;
