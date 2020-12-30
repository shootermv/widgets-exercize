import { WIDGETS } from "./widgetsMock";

export default function fetchWidgets() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(WIDGETS), 1000);
  });
}
