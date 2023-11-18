import { useEffect, useState } from "react";
import { ICity } from "../../types/ICity";
import iArrow from "../../assets/arrow.svg";
import iBookmark from "../../assets/bookmark.svg";
import "./city-input.component.sass";

const CityInput = () => {
  const [searchStr, setSearchStr] = useState("");
  const cityList: ICity[] = [];

  // TODO
  const search = async (str: string) => {};

  useEffect(() => {
    if (searchStr.length > 1) {
      search(searchStr);
      // setModalOpen(true);
    } else {
      // setModalOpen(false);
    }
  }, [searchStr]);

  return (
    <section className="city-input">
      <input
        className="city-input__input"
        placeholder="Укажите город"
        defaultValue={searchStr}
        // @ts-ignore
        onInput={(e) => setSearchStr(e.target.value)}
      />
      {cityList.length < 1 && (
        <>
          <section className="city-input__empty">
            <img src={iArrow} alt="" />
            {/* TODO rand city */}
            <p className="city-input__title text">
              Начните{"\u00A0"}вводить{"\u00A0"}город, например,{" "}
              {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <span
                className="city-input__link"
                onClick={() => setSearchStr("Ижевск")}
              >
                Ижевск
              </span>
            </p>
          </section>
          <section className="city-input__add-bookmarks">
            <p className="city-input__title text">
              Используйте значок «закладки», чтобы{"\u00A0"}закрепить{"\u00A0"}
              город
              {"\u00A0"}на
              {"\u00A0"}
              главной
            </p>
            <img src={iBookmark} alt="" />
          </section>
        </>
      )}
    </section>
  );
};

export default CityInput;
