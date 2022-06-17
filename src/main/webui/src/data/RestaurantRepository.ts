export interface Restaurant {
  id: number;
  realName: string;
  homepage: string;
  menues: MenuItem[];
}

export interface MenuItem {
  id: number;
  title: string;
  category: number;
}

const baseURL = "http://172.20.10.90:8080"

export const getRestaurants = async (lat: number, long: number) => {
  const response = await fetch(`${baseURL}/api/restaurant/list?lat=${lat}&long=${long}`);
  const data = await response.json();
  return data as Restaurant[];
};

export const getMenu = async (id: number) => {
  const res = await fetch(`${baseURL}/api/menu/${id}`);
  const menu = await res.json();
  return menu as MenuItem[];
};
