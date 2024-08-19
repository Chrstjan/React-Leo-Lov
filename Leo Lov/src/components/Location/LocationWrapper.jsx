import { LocationFrame } from "./LocationFrame/LocationFrame";
import { LocationInfo } from "./LocationInfo/LocationInfo";

import style from "./LocationWrapper.module.scss";

export const LocationWrapper = () => {
  return (
    <>
      <section id="locationSection">
        <figure className={style.locationStyling}>
          <LocationFrame
            imageSrc={"./src/assets/images/leolov-location (1).PNG"}
          />
          <LocationInfo />
        </figure>
      </section>
    </>
  );
};
