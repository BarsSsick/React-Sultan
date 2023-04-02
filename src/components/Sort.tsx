import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setSort } from "../redux/filter/slice";
import { sortPropertyEnum } from "../redux/filter/types";
import { RootState } from "../redux/store";


type SortItem = {
  name: string;
  sortProperty: sortPropertyEnum;
}

export const sortList: SortItem[] = [
  { name: "цена по возрастанию", sortProperty: sortPropertyEnum.PRICE_ASC },
  { name: "цена по убыванию", sortProperty: sortPropertyEnum.PRICE_DESC },
  { name: "название по возрастанию", sortProperty: sortPropertyEnum.TITLE_DESC },
  { name: "название по убыванию", sortProperty: sortPropertyEnum.TITLE_ASC },
  
];

function SortPopup() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };


  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
        <img src="pages/icons/Polygon 5.png" alt="" />
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;
