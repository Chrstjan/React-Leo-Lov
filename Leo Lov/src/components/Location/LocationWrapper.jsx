import { LocationFrame } from "./LocationFrame/LocationFrame";
import { LocationInfo } from "./LocationInfo/LocationInfo";

import style from "./LocationWrapper.module.scss";

export const LocationWrapper = () => {
  return (
    <>
      <section id="locationSection">
        <div className={style.locationStyling}>
          <LocationFrame />
          <LocationInfo />
        </div>
      </section>
    </>
  );
};
