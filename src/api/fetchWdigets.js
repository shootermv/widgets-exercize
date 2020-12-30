import { STOCKS } from "./stocksMock";

export default function fetchWidgets() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(STOCKS), 1000);
  });
}
