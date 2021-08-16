import React from 'react';
import { countries, regions } from "country-data-list";
import { useDispatch } from 'react-redux';

export default function Header() {

    // const [selectedCountry, setSelectedCountry] = useState("")

    const dispatch = useDispatch()


    const getRegionName = (code) => {
        const rotateValue = {
            centralAsia: [-80, -20],
            southernAsia: [-60, 0],
            southeastAsia: [-110, 0],
            eastAsia: [-90, -20],
            westernAsia: [-40,0],
            centralAfrica: [-20,0],
            northAfrica: [0, 0],
            southernAfrica: [-20,0],
            eastAfrica: [-30,0],
            westAfrica: [0,0],
            centralAmerica: [80,0],
            northernAmerica: [100, -20],
            southAmerica: [60,0],
            caribbean: [80, 0],
            antartica: [0, 90],
            northernEurope: [0, -40],
            southernEurope: [-20,0],
            easternEurope: [-90,-10],
            westernEurope: [0,0],
            australia: [-130,0],
            melanesia: [-150, 10],
            micronesia: [-110, 0],
            polynesia: [150,0]
        }



        for (let key in regions) {
            regions[key].countries.map(country =>{
                if(country === code) {
                    let region = regions[key]

                    if (key === "southernEurope") {
                        region.countries.push("XK")
                    }

                    let selectedCountry;
                    let rotate = rotateValue[key]
                    countries.all.map(coun => {
                        if (coun.alpha2 === code) {
                            selectedCountry = coun.name
                        }
                        return selectedCountry
                    })





                    region.countries.map(country => {
                        countries.all.map(coun => {
                            if (coun.alpha2 === country) {
                                let city = coun.name.toLowerCase().replace(/ /g,'')

                                if (city === "laopeople'sdemocraticrepublic") {
                                    city = "laos"
                                }
                    
                                if (city === "timor-leste,democraticrepublicof") {
                                    city = "timor-leste"
                                }
                    
                                if (city === "cocos(keeling)islands") {
                                    city = "timor-leste"
                                }
                                if (city === "bruneidarussalam") {
                                    city = "brunei"
                                }
                    
                                if (city === "bosnia&herzegovina") {
                                    city = "bosniaandherz"
                                }

                                if (city === "westernsahara") {
                                    city = "wsahara"
                                }
                                
                                if (city === "centralafricanrepublic") {
                                    city = "centralafricanrep"
                                }

                                if (city === "republicofcongo") {
                                    city = "congo"
                                }
                    
                                if (city === "democraticrepublicofcongo") {
                                    city = "demrepcongo"
                                }
                                

                                if (city === "equatorialguinea") {
                                    city = "eqguinea"
                                }
                                
                                if (city === "virginislands(british)") {
                                    city = "anguilla"
                                }
        
                                if (city === "virginislands(us)") {
                                    city = "anguilla"
                                }

                                if (city === "dominicanrepublic") {
                                    city = "dominicanrep"
                                }
                                
                                if (city === "syrianarabrepublic") {
                                    city = "syria"
                                }
                                
                                if (city === "côted'ivoire") {
                                    city = "côtedivoire"
                                }

                                if (city === "unitedstates") {
                                    city = "unitedstatesofamerica"
                                }

                                if (city === "swaziland") {
                                    city = "eswatini"
                                }

                                if (city === "falklandislands") {
                                    city = "falklandis"
                                }

                                if (city === "frenchguiana") {
                                    city = "trinidadandtobago"
                                }

                                if (city === "burma") {
                                    city = "myanmar"
                                }

                                if (city === "southsudan") {
                                    city = "ssudan"
                                }
                                
                                if (city === "solomonislands") {
                                    city = "solomonis"
                                }
                                
                                if (city === "korea,democraticpeople'srepublicof") {
                                    city = "northkorea"
                                }
                    
                                if (city === "korea,republicof") {
                                    city = "southkorea"
                                }

                                if (city === "heardislandandmcdonaldislands") {
                                    city = "frsantarcticlands"
                                }
                                
                                if (city === "palestinianterritory,occupied") {
                                    city = "palestine"
                                }
                                

                                console.log(city)
                                console.log(document.querySelector(`.${city}`))
                            }
                            return coun;
                        })
                        return country;
                    })



















                    dispatch({
                        type: "GET_COUNTRY_AND_REGION",
                        selectedCountry,
                        region,
                        rotate
                    })
                }
                return key;
            })

            

        }

        if(code === "XK" ) {
            dispatch({
                type: "GET_COUNTRY_AND_REGION",
                selectedCountry: "kosovo",
                region:{name: "Southern Europe", countries:["AL", "AD", "BA", "HR", "CY", "GI", "GR", "IT", "MK", "VA", "MT", "ME", "PT", "SM", "RS", "SI", "ES", "XK"]} ,
                rotate: [-20,0]
            })
        }
    }

    const handleChange = (event) => {
        const {value} = event.target
        getRegionName(value)
        
    }

    const renderCountries = () => {
        const countryList = countries.all;
        let sortedCountryName = [];
        countryList.map(country => {
            sortedCountryName.push(country.name)
            return country;
        })
        sortedCountryName.sort()
        return sortedCountryName.map((country, index) => {
            let code2;
            let mangDisable = ["British Indian Ocean Territory", "Maldives", "Andorra", "Gibraltar", "Vatican City State", "Malta",
        "American Samoa", "Cook Islands", "French Polynesia", "Niue", "Pitcairn", "Samoa", "Tokelau", "Tonga", "Tuvalu", "Wallis And Futuna", 
        "Sao Tome and Principe", "Anguilla", "French Afar and Issas", "Antigua And Barbuda", "Aruba", "Barbados", 
        "Bonaire, Sint Eustatius And Saba", "British Antarctic Territory", "Anguilla", "Cayman Islands", "Curacao", "Dominica",
        "Grenada", "Guadeloupe", "Martinique", "Montserrat", "Saint Barthélemy", "Saint Kitts And Nevis", "Saint Lucia", 
        "Saint Martin", "Saint Vincent And The Grenadines", "Sint Maarten", "Turks And Caicos Islands",
        "Bouvet Island", "French Southern Territories", "South Georgia And The South Sandwich Islands", "Bahrain",
        "Ascension Island", "Norfolk Island", "Liechtenstein", "Monaco", "Bermuda", "Burma", "Cabo Verde", "Canary Islands", 
        "Canton and Enderbury Islands", "Ceuta, Mulilla", "Christmas Island", "Clipperton Island", "Comoros", "Czechoslovakia",
        "Dahomey", "Diego Garcia", "Dronning Maud Land", "East Timor", "European Union", "Faroe Islands", "France, Metropolitan",
        "French Southern and Antarctic Territories", "German Democratic Republic", "Guam", "Guernsey", "Hong Kong", "Isle Of Man",
        "Jersey", "Johnston Island", "Kiribati", "Macao", "Marshall Islands", "Mauritius", "Mayotte", 
        "Micronesia, Federated States Of", "Midway Islands", "Nauru", "Netherlands Antilles", "Neutral Zone", "New Hebrides", 
        "Northern Mariana Islands", "Pacific Islands, Trust Territory of the", "Palau", "Panama Canal Zone", "Reunion", 
        "Saint Helena, Ascension And Tristan Da Cunha", "Saint Pierre And Miquelon", "San Marino", "Serbia and Montenegro", 
        "Seychelles", "Sikkim", "Southern Rhodesia", "Svalbard And Jan Mayen", "Tristan de Cunha", "U.S. Miscellaneous Pacific Islands",
        "USSR", "United States Minor Outlying Islands", "Upper Volta", "Viet-Nam, Democratic Republic of", "Virgin Islands (US)",
        "Virgin Islands (British)", "Yemen, Democratic", "Yugoslavia", "Zaire"];
            let disable = false;
            countryList.map(coun => {
                if (country === coun.name) {
                    code2 = coun.alpha2
                }
                return coun;
            })

            mangDisable.map(c => {
                if (country === c) {
                    disable = true;
                }
                return c
            })


            return <option value={code2} key={index} disabled = {disable}>{country}</option>
        })
    }

    return (
        <div>
            <div>
                <header>
                    <a href="/">
                        <div className="logo">
                            <img src="./logo.svg" alt="logo" />
                        </div>
                    </a>


                    <div className="country-list">
                        <select name="country-list__option" id="country-list__option" className="form-control" onChange={handleChange}>
                            <option value="0">Select your country:</option>
                            {renderCountries()}
                        </select>
                    </div>

                    <div className="social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-dribbble" />
                        </a>
                    </div>
                </header>
                <hr className="m-0" />
                <div className="text"></div>
                <div id="rotation"></div>
            </div>
        </div>
    )
}
