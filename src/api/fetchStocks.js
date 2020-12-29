import { STOCKS } from "./stocksMock";

export default function fetchStocks() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(STOCKS), 1000);
  });
}
