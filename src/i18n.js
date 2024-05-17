import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; // importa HttpBackend

i18n
  .use(HttpBackend) // usa HttpBackend
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/helloabuweb/locales/{{lng}}/{{ns}}.json", // Ruta de carga de los archivos
    },
    fallbackLng: "en",
    debug: false, // útil durante el desarrollo
    ns: ["header", "common", "home"], // namespaces usados para diferentes partes
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
