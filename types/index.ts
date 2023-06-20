import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string;
    textStyles?:string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit";
}


export interface CustomFilterProps {
    title: string,
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: string,
    cylinders: string,
    displacement: string,
    drive: string,
    fuel_type: string,
    highway_msg: string,
    make: string,
    model: string,
    transmission: string,
    year: string
}

export interface FilterProps {
    manufacturer:string;
    year:number;
    fuel: string;
    limit:string;
    model:string;
}

export interface OptionProps {
    title: string,
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean
}

export interface URLSearchParamsType {
  
}