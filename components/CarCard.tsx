"use client";
import { CarProps } from "@/types"
import Image from "next/image"
import { calculateCarRent } from "@/utils"
import CustomButton from "./CustomButton";
import { useState } from 'react'
import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  
  const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_msg, make, model, year, transmission } = car;  
  const carRent = calculateCarRent(city_mpg, year);
  const [IsOpened,setIsOpened] = useState(false);
  
  return (
    <div className="car-card group relative">
        {/* Make Model */}
        <div className="car-card__content">
            <h2 className="car-card_content-title uppercase">
                {make} {model}
            </h2> 
        </div>
        
        {/* Mileage */}
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] ">
               $ {carRent}
            </span>
            <span className="self-end text-[14px] font-medium">
                /day
            </span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/hero.png" fill alt="Car Model" priority className="object-contain"></Image>
        </div>

        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="Steering Wheel">
                     
                    </Image>
                    <p className="text-[14px] leading-[17px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual' }
                    </p>
                </div>
                <div className="car-card__icon">
                    <Image src="/tire.svg" width={20} height={20} alt="Tire"/>
                    <p className="car-card__icon-text">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="car-card__icon">
                    <Image src="/gas.svg" width={20} height={20} alt="Tire"/>
                    <p className="car-card__icon-text">
                        {city_mpg} MPG
                    </p>
                </div>
            </div>
        </div>

        <div className="car-card__btn-container">
            <CustomButton 
            title="View More" 
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue" 
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={()=>setIsOpened(true)}
            />
        </div>

        <CarDetails IsOpened={IsOpened} closeModal={() => setIsOpened(false)} car={car} />
    </div>
  )
}

export default CarCard