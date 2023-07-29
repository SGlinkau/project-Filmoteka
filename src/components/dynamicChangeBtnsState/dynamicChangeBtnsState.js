import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";

export default function dynamicChangeBtnsState(btnList) {
  btnList.forEach(b => {
    const {id, name} = b.dataset;
    const idNumber = Number(id);

    if (!getFromLocalStorage(name)) {
      return b.textContent = `Add to ${name}`;
    } else if (getFromLocalStorage(name).length === 0) {
      return b.textContent = `Add to ${name}`;
    } else if (getFromLocalStorage(name).includes(idNumber)) {
      return b.textContent = `Remove from ${name}`
    } else {
      return b.textContent = `Add to ${name}`
    }
  });
};