import * as WeatherIcons from "react-icons/wi";

interface DynamicIconsProps {
    name: keyof typeof WeatherIcons; //permite apenas os nomes dos ícones que estão dentro de WeatherIcons
    size?: number;
    className?: string;
}

export const DynamicIcons= ({name, size = 32, className}: DynamicIconsProps) => {

    const Icons = WeatherIcons[name];

    if(!Icons) return null;

    return (
        <Icons  size={size} className={className} />
    );
};