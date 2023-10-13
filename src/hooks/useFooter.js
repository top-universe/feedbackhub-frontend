import { useEffect, useState } from "react";
import axios from "axios";

export default function useFooter() {
    const [countries, setCountries] = useState([]);
    const [countryVal, setCountryVal] = useState("GBR");

    const changeCountry = (e) => setCountryVal(e.target.value);

    const getCountries = () => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((data) => {
                const cleaned = data.data.map((item) => ({ text: item.name.common, value: item.cca3, image: item.flags.svg }))
                cleaned.sort((a, b) => a.text.localeCompare(b.text))
                setCountries(cleaned)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        if (countries.length) console.log(countries);
    }, [countries])

    return { countries, countryVal, changeCountry }
}