import { wpp } from "../Constants";

export const openWpp = (message?: string) => {
  let url = `https://api.whatsapp.com/send/?phone=${
    "55" + wpp.replace("/D/g", "")
  }`;

  if (message) {
    url += `&text=${message ?? ""}`;
  }

  window.open(url);
};
