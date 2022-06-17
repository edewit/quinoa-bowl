import { IonItem, IonLabel } from "@ionic/react";

import { Restaurant } from "../data/RestaurantRepository";

type RestaurantItemProps = {
  restaurant: Restaurant;
};
export const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {

  return (
    <IonItem routerLink={`/restaurant/${restaurant.id}`} detail={true}>
      <div slot="start"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {restaurant.realName}
          {/* <span className="date">
        <IonNote>{message.date}</IonNote>
      </span> */}
        </h2>
        <h3>{restaurant.homepage}</h3>
      </IonLabel>
    </IonItem>
  );
};
