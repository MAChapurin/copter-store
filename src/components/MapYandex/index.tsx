import { YMaps, Map } from "@pbe/react-yandex-maps";

import styles from "./MapYandex.module.css";

interface ICoords {
  lat: number
  lon: number
}

export const MapYandex = ({ lat, lon }: ICoords) => {
  console.log("YANDEXMAP:", lat, lon);

  return (
    <YMaps>
      <div className={styles.map}>
        <Map
          width="100%"
          height="100%"
          state={{ center: [lat, lon], zoom: 9 }}
          defaultState={{ center: [lat, lon], zoom: 9}}
        />
      </div>
    </YMaps>
  );
};