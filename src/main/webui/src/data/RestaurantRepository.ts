export interface Restaurant {
  id: number;
  realName: string;
  homepage: string;
  menues: MenuItem[];
}

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: string;
}

export interface DigitalMenu {
  digital_menu: any;
}

const baseURL =
  //"http://quinoa-bowl-menuista.apps.cluster-jpv4f.jpv4f.sandbox1420.opentlc.com/"; //"http://172.20.10.90:8080"
  "";

export const getRestaurants = async (lat: number, long: number) => {
  const response = await fetch(
    `${baseURL}/api/restaurant/list?lat=${lat}&long=${long}`
  );
  const data = await response.json();
  return data as Restaurant[];
};

export const getMenu = async (id: number) => {
  const res = await fetch(`${baseURL}/api/restaurant/menu?id=${id}`);
  const menu = await res.json();
  return menu as DigitalMenu;
};
