import { useState } from "react";
import { useParams } from "react-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";

import { Restaurant, getRestaurants } from "../data/RestaurantRepository";
import { RestaurantItem } from "../components/RestaurantItem";

import "./Home.css";

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const load = async () => {
    let coordinates = { latitude: 47.36667, longitude: 8.55 };
    try {
      coordinates = (await Geolocation.getCurrentPosition()).coords;
    } catch (e) {
      console.warn("couldn't get geo location using default", e);
    }
    const rest = await getRestaurants(
      coordinates.latitude,
      coordinates.longitude
    );
    setRestaurants(rest);
  };

  useIonViewWillEnter(load);

  const refresh = (e: CustomEvent) => {
    load().then(e.detail.complete());
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <h1>Restaurants</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Restaurants</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ul className="list">
          {restaurants.map((r) => (
            <RestaurantItem key={r.id} restaurant={r} />
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Home;
