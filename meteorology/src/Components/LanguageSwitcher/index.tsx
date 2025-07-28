import { useTranslation } from "react-i18next";
import { Languages } from "./styles";
import { BR, US } from "country-flag-icons/react/3x2";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Languages>
            <button onClick={() => changeLanguage("pt")}>
                <BR width={24} height={18} />
            </button>

            <button onClick={() => changeLanguage("en")}>
                <US width={24} height={18} />
            </button>
        </Languages>
    );
};