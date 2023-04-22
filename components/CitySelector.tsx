'use client'

import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { GlobeIcon, OfficeBuildingIcon } from "@heroicons/react/solid";

type ICountry = {
    value: {
        latitude: string,
        longitude: string,
        isoCode: string,
    },
    label: string
} | null;

type ICity= {
    value: {
        latitude: string,
        longitude: string,
        countryCode: string,
        name: string,
        stateCode: string
    },
    label: string
} | null;

const countryOptions = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode
    },
    label: country.name
}))

function CitySelector() {
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(null);
  const [selectedCity, setSelectedCity] = useState<ICity>(null);
  const router = useRouter();

  const checkCityPresence = (country: ICountry) => {
    const res = City.getCitiesOfCountry(country?.value.isoCode!)?.length == 0 ? false : true;
    
    return res
  }

  const handleSelectedCountry = (country: ICountry) => {
    setSelectedCountry(country);
    setSelectedCity(null);

    if(!checkCityPresence(country)) router.push(`/location/${country?.label}/${country?.value.latitude}/${country?.value.longitude}`);
  }

  const handleSelectedCity = (city: ICity) => {
    setSelectedCity(city);
    router.push(`/location/${city?.label}/${city?.value.latitude}/${city?.value.longitude}`);
  }
    
  return (
    <div>
        <div className="space-y-2">
            <div className="flex items-center space-x-2 text-white">
                <GlobeIcon className="h-5 w-5 text-white"></GlobeIcon>
                <label htmlFor="country">Country</label>
            </div>
            <Select
                className="text-black" 
                value={selectedCountry}
                options={countryOptions}
                onChange={handleSelectedCountry}
            ></Select>
        
            {selectedCountry && (
                <div className="pt-3 space-y-2">
                    <div className="flex items-center space-x-2 text-white">
                        <OfficeBuildingIcon className="h-5 w-5 text-white"></OfficeBuildingIcon>
                        <label htmlFor="city">City</label>
                    </div>
                    <Select
                        className="text-black" 
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        options={
                            City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(city => ({
                                value: {
                                    latitude: city.latitude!,
                                    longitude: city.longitude!,
                                    countryCode: city.countryCode,
                                    name: city.name,
                                    stateCode: city.stateCode
                                },
                                label: city.name
                            }))
                        }
                    />
                </div>
            )}
        </div>
    </div>
  )
}

export default CitySelector