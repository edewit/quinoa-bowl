import { useEffect } from "react";
import { IonItem, IonLabel, IonNote } from "@ionic/react";
import { ScreenReader } from "@capacitor/screen-reader";

import { MenuItem } from "../data/RestaurantRepository";

import "./MenuListItem.css";

interface MenuItemProps {
  menu: MenuItem;
}

const checkScreenReaderEnabled = async () => {
  const { value } = await ScreenReader.isEnabled();

  console.log("Voice over enabled? " + value);
};

// const sayHello = async () => {
//   await ScreenReader.speak({ value: 'This is the menu' });
// };

const MenuListItem: React.FC<MenuItemProps> = ({ menu }) => {
  useEffect(() => {
    checkScreenReaderEnabled();
  }, []);

  return (
    <IonItem routerLink={`/restaurant/${menu.id}`} detail={false}>
      <div slot="start"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {menu.title}
          {/* <span className="date">
            <IonNote>{message.date}</IonNote>
          </span> */}
        </h2>
        <h3>{menu.category}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default MenuListItem;
