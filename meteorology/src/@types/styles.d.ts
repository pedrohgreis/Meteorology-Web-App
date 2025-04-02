import "styled-components";
import { defaultThemes } from "../Styles/Themes/default";

//* Guarda o valor de tipagem do que está no default.ts
type typeTheme = typeof defaultThemes;

//* Toda vez que exportar o styled-components, ele virá com essas configurações do default
declare module "styled-components"{
    export interface DefaultTheme extends typeTheme{};
}

