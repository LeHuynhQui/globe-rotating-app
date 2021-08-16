import React, { useEffect } from 'react';
import * as d3 from "d3"
// import { geoOrthographic, geoPath } from "d3"
import { feature } from "topojson-client"
import { useSelector } from 'react-redux';
import { countries } from "country-data-list";

import versor from "versor"
export default function Content() {
    const { selectedCountry, region, rotate, isDrag } = useSelector(state => state.GlobeReducer)

    const selectedEffect = () => {
        if (selectedCountry) {
            let classLowerCase = selectedCountry.toLowerCase().replace(/ /g, '')
            console.log(classLowerCase)

            if (classLowerCase === "laopeople'sdemocraticrepublic") {
                classLowerCase = "laos"
            }

            if (classLowerCase === "timor-leste,democraticrepublicof") {
                classLowerCase = "timor-leste"
            }

            if (classLowerCase === "cocos(keeling)islands") {
                classLowerCase = "timor-leste"
            }
            if (classLowerCase === "bruneidarussalam") {
                classLowerCase = "brunei"
            }

            if (classLowerCase === "bosnia&herzegovina") {
                classLowerCase = "bosniaandherz"
            }

            if (classLowerCase === "westernsahara") {
                classLowerCase = "wsahara"
            }

            if (classLowerCase === "centralafricanrepublic") {
                classLowerCase = "centralafricanrep"
            }


            if (classLowerCase === "republicofcongo") {
                classLowerCase = "congo"
            }

            if (classLowerCase === "democraticrepublicofcongo") {
                classLowerCase = "demrepcongo"
            }

            if (classLowerCase === "equatorialguinea") {
                classLowerCase = "eqguinea"
            }

            if (classLowerCase === "dominicanrepublic") {
                classLowerCase = "dominicanrep"
            }

            if (classLowerCase === "syrianarabrepublic") {
                classLowerCase = "syria"
            }

            if (classLowerCase === "côted'ivoire") {
                classLowerCase = "côtedivoire"
            }


            if (classLowerCase === "unitedstates") {
                classLowerCase = "unitedstatesofamerica"
            }

            if (classLowerCase === "swaziland") {
                classLowerCase = "eswatini"
            }

            if (classLowerCase === "falklandislands") {
                classLowerCase = "falklandis"
            }

            if (classLowerCase === "frenchguiana") {
                classLowerCase = "trinidadandtobago"
            }

            if (classLowerCase === "burma") {
                classLowerCase = "myanmar"
            }

            if (classLowerCase === "southsudan") {
                classLowerCase = "ssudan"
            }

            if (classLowerCase === "solomonislands") {
                classLowerCase = "solomonis"
            }

            if (classLowerCase === "korea,democraticpeople'srepublicof") {
                classLowerCase = "northkorea"
            }

            if (classLowerCase === "korea,republicof") {
                classLowerCase = "southkorea"
            }

            if (classLowerCase === "heardislandandmcdonaldislands") {
                classLowerCase = "frsantarcticlands"
            }

            if (classLowerCase === "palestinianterritory,occupied") {
                classLowerCase = "palestine"
            }

            if (classLowerCase === "byelorussianssr") {
                classLowerCase = "belarus"
            }

            if (classLowerCase === "czechrepublic") {
                classLowerCase = "czechia"
            }

            if (classLowerCase === "gilbertandelliceislands") {
                classLowerCase = "georgia"
            }
           
            if (classLowerCase === "sikkim") {
                classLowerCase = "slovakia"
            }
            






            if (document.querySelectorAll(`.${classLowerCase}`)) {
                document.querySelectorAll(`.${classLowerCase}`).forEach(item => {
                    item.classList.add("selected")
                })
            }

            region.countries.map(code => {
                countries.all.map(country => {
                    if (country.alpha2 === code) {
                        let classLower = country.name.toLowerCase().replace(/ /g, '')


                        if (classLower === "laopeople'sdemocraticrepublic") {
                            classLower = "laos"
                        }

                        if (classLower === "timor-leste,democraticrepublicof") {
                            classLower = "timor-leste"
                        }

                        if (classLower === "cocos(keeling)islands") {
                            classLower = "timor-leste"
                        }
                        if (classLower === "bruneidarussalam") {
                            classLower = "brunei"
                        }

                        if (classLower === "bosnia&herzegovina") {
                            classLower = "bosniaandherz"
                        }

                        if (classLower === "westernsahara") {
                            classLower = "wsahara"
                        }

                        if (classLower === "centralafricanrepublic") {
                            classLower = "centralafricanrep"
                        }

                        if (classLower === "republicofcongo") {
                            classLower = "congo"
                        }

                        if (classLower === "democraticrepublicofcongo") {
                            classLower = "demrepcongo"
                        }

                        if (classLower === "equatorialguinea") {
                            classLower = "eqguinea"
                        }

                        if (classLower === "virginislands(british)") {
                            classLower = "anguilla"
                        }

                        if (classLower === "virginislands(us)") {
                            classLower = "anguilla"
                        }

                        if (classLower === "dominicanrepublic") {
                            classLower = "dominicanrep"
                        }

                        if (classLower === "syrianarabrepublic") {
                            classLower = "syria"
                        }

                        if (classLower === "côted'ivoire") {
                            classLower = "côtedivoire"
                        }

                        if (classLower === "unitedstates") {
                            classLower = "unitedstatesofamerica"
                        }

                        if (classLower === "swaziland") {
                            classLower = "eswatini"
                        }

                        if (classLower === "falklandislands") {
                            classLower = "falklandis"
                        }

                        if (classLower === "frenchguiana") {
                            classLower = "trinidadandtobago"
                        }

                        if (classLower === "burma") {
                            classLower = "myanmar"
                        }

                        if (classLower === "southsudan") {
                            classLower = "ssudan"
                        }

                        if (classLower === "solomonislands") {
                            classLower = "solomonis"
                        }

                        if (classLower === "korea,democraticpeople'srepublicof") {
                            classLower = "northkorea"
                        }

                        if (classLower === "korea,republicof") {
                            classLower = "southkorea"
                        }

                        if (classLower === "heardislandandmcdonaldislands") {
                            classLower = "frsantarcticlands"
                        }

                        if (classLower === "palestinianterritory,occupied") {
                            classLower = "palestine"
                        }

                        if (classLower === "byelorussianssr") {
                            classLower = "belarus"
                        }

                        if (classLower === "czechrepublic") {
                            classLower = "czechia"
                        }

                        if (classLower === "gilbertandelliceislands") {
                            classLower = "georgia"
                        }

                        if (classLower === "sikkim") {
                            classLower = "slovakia"
                        }
                        
                        
                        if (document.querySelectorAll(`.${classLower}`)) {
                            document.querySelectorAll(`.${classLower}`).forEach(item => {
                                item.classList.add("region")
                            })
                        }
                    }

                    return country;
                })

                return code;
            })
        }
    }


    useEffect(() => {
        document.querySelector("#globe").innerHTML = ""
        document.querySelector("#rotation").innerHTML = ""
        renderGlobe(rotate, true)
    })



    // const width = 1200;
    // const height = 1200;

    // const svg = d3.select('body').append('svg').attr("width", width).attr("height", height)


    // const projection = d3.geoOrthographic().scale(300).translate([width/1.8, height/3.5])
    // const path = d3.geoPath(projection)

    // const g = svg.append('g')


    // d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    //     .then(data => {
    //         const countries = feature(data, data.objects.countries);
    //         g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);
    //     })


    // GET COUNTRY LIST NAME AND BINLDING TO OPTION TAGS



    function renderGlobe(value, isEffect) {

        let mangTong = countries.all

        var angles = ["λ", "φ", "γ"];
        angles.forEach(function (angle, index) {
            d3.select("#rotation").append("div")
                .attr("class", "angle-label angle-label-" + index)
                .html(angle + ": <span>0</span>")

            d3.select("#rotation").append("input")
                .attr("type", "range")
                .attr("class", "angle angle-" + index)
                .attr("min", "-180")
                .attr("max", "180")
                .attr("step", "1")
                .attr("value", "0");
        });



        document.querySelector(".angle-0").value= value[0]
        document.querySelector(".angle-1").value= value[1]
        document.querySelector(".angle-label-0 span").innerHTML= value[0]
        document.querySelector(".angle-label-1 span").innerHTML= value[1]
        

        var width = window.innerWidth -30, height = window.innerHeight - 100;

        var svg = d3.select("#globe").append("svg")
            .attr("width", width)
            .attr("height", height);

        var projection = d3.geoOrthographic()
            .scale(d3.min([width / 2, height / 2.1]))
            .translate([width / 2, height / 2.1])
            .precision(1)
            .rotate(value);

        var path = d3.geoPath()
            .projection(projection);

        var graticule = d3.geoGraticule()
            .step([10, 10]);

        var v0, // Mouse position in Cartesian coordinates at start of drag gesture.
            r0, // Projection rotation as Euler angles at start.
            q0; // Projection rotation as versor at start.

        svg.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "#ccc");

        var drag = d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);

        if (isDrag) {

            svg.call(drag);     
        }

        function dragstarted() {

            var mouse_pos = d3.mouse(this);

            v0 = versor.cartesian(projection.invert(mouse_pos));
            r0 = projection.rotate();
            q0 = versor(r0);

            svg.insert("path")
                .datum({ type: "Point", coordinates: projection.invert(mouse_pos) })
                .attr("class", "point point-mouse")
                .attr("d", path);

        }

        function dragged() {

            var mouse_pos = d3.mouse(this);

            var v1 = versor.cartesian(projection.rotate(r0).invert(mouse_pos)),
                q1 = versor.multiply(q0, versor.delta(v0, v1)),
                r1 = versor.rotation(q1);

            if (r1) {
                update(r1);

                svg.selectAll("path").attr("d", path);

                svg.selectAll(".point-mouse")
                    .datum({ type: "Point", coordinates: projection.invert(mouse_pos) });
            }

        }

        function dragended() {
            svg.selectAll(".point").remove();
        }

        d3.selectAll("input").on("input", function () {
            // get all values
            var nums = [];
            d3.selectAll("input").each(function (d, i) {
                nums.push(+d3.select(this).property("value"));
            });
            update(nums);

            svg.selectAll("path").attr("d", path);

        });

        function update(eulerAngles) {
            angles.forEach(function (angle, index) {
                d3.select(".angle-label-" + index + " span").html(Math.round(eulerAngles[index]))
                d3.select(".angle-" + index).property("value", eulerAngles[index])
            });

            projection.rotate(eulerAngles);
        }

        // d3.json("countries.json", function (error, countries){
        //   if (error) throw error;

        //   // JOIN
        //   svg.selectAll(".subunit")
        //       .data(topojson.feature(countries, countries.objects.polygons).features)
        //     .enter().append("path")
        //       .attr("d", path)
        //       .style("stroke", "#fff")
        //       .style("stroke-width", "1px")
        // })



        const g = svg.append('g')

        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then(data => {
                const countries = feature(data, data.objects.countries);
                g.selectAll('path')
                    .data(countries.features)
                    .enter()
                    .append('path')
                    .attr('class', function (countries) {
                        //------------------------------------------CLASS = COUNTRY NAME------------------------------------------
                        let countryNameLowerCase = countries.properties.name.toLowerCase().replace(/ /g,'').replaceAll(".","").replace("'","")
                        if (countryNameLowerCase === "somaliland") {
                            return `country ${countryNameLowerCase} somalia`
                        }

                        return `country ${countryNameLowerCase}`
                    })
                    .attr('d', path)
                    //------------------------------------------ONCLICK => COUNTRY ------------------------------------------
                    .on("click", function (d) {
                        let dName = d.properties.name.toLowerCase().replace(/ /g,'').replaceAll(".","").replace("'","");
                        console.log(dName)







                        if (dName === "laos") {
                            dName = "laopeoplesdemocraticrepublic"
                        }

                        if (dName === "timor-leste") {
                            dName = "timor-leste,democraticrepublicof"
                        }

                        if (dName === "timor-leste" ) {
                            dName = "cocos(keeling)islands"
                        }
                        if (dName === "brunei" ) {
                            dName = "bruneidarussalam"
                        }

                        if (dName === "bosniaandherz") {
                            dName = "bosnia&herzegovina" 
                        }

                        if (dName === "wsahara") {
                            dName = "westernsahara" 
                        }

                        if (dName === "centralafricanrep") {
                            dName = "centralafricanrepublic" 
                        }

                        if (dName === "congo") {
                            dName = "republicofcongo" 
                        }

                        if (dName === "demrepcongo") {
                            dName = "democraticrepublicofcongo" 
                        }

                        if (dName === "eqguinea") {
                            dName = "equatorialguinea" 
                        }

                        if (dName === "anguilla") {
                            dName = "virginislands(british)" 
                        }

                        if (dName === "anguilla") {
                            dName = "virginislands(us)" 
                        }

                        if (dName === "dominicanrep") {
                            dName = "dominicanrepublic" 
                        }

                        if (dName === "syria") {
                            dName = "syrianarabrepublic" 
                        }

                        if (dName === "côtedivoire") {
                            dName = "côted'ivoire" 
                        }

                        if (dName === "unitedstatesofamerica") {
                            dName = "unitedstates" 
                        }

                        if (dName === "eswatini") {
                            dName = "swaziland" 
                        }

                        if (dName === "falklandis") {
                            dName = "falklandislands" 
                        }

                        if (dName === "trinidadandtobago") {
                            dName = "frenchguiana" 
                        }

                        if (dName === "myanmar") {
                            dName = "burma" 
                        }

                        if (dName === "ssudan") {
                            dName = "southsudan" 
                        }

                        if (dName === "solomonis") {
                            dName = "solomonislands" 
                        }

                        if (dName === "northkorea") {
                            dName = "korea,democraticpeoplesrepublicof" 
                        }

                        if (dName === "southkorea") {
                            dName = "korea,republicof" 
                        }

                        if (dName === "frsantarcticlands") {
                            dName = "heardislandandmcdonaldislands" 
                        }

                        if (dName === "palestine") {
                            dName = "palestinianterritory,occupied" 
                        }

                        if (dName === "belarus") {
                            dName = "byelorussianssr" 
                        }

                        if (dName === "czechia") {
                            dName = "czechrepublic" 
                        }

                        if (dName === "georgia") {
                            dName = "gilbertandelliceislands" 
                        }

                        if (dName === "slovakia") {
                            dName = "sikkim" 
                        }

                        if (dName === "tanzania") {
                            dName = "tanzania,unitedrepublicof" 
                        }

                        






















                        mangTong.forEach(nation =>{
                            // console.log(nation.name.toLowerCase().replace(/ /g,'').replaceAll(".","").replaceAll("'",""))
                            if (nation.name.toLowerCase().replace(/ /g,'').replaceAll(".","").replaceAll("'","") === dName) {
                                document.querySelector("select").value = nation.alpha2

                                console.log(nation.alpha2)
                            }
                        })
                        // // RESET
                        // document.querySelector(".text").innerHTML = ''

                        document.querySelectorAll(".country").forEach(item => {
                            if (item.classList.value.includes("selected")) {
                                item.classList.remove("selected")
                            }

                            if (item.classList.value.includes("region")) {
                                item.classList.remove("region")
                            }
                        })

                        // const name = d.target.classList.value.replace("country", "").replace("selected", "").trim().toUpperCase()
                        // console.log(name)
                        // // d.path[0].innerHTML= `<span>hihi<span>`
                        // document.querySelector(".text").innerHTML = `<span style="position:absolute; font-size:12px; z-index:1000 ; color:#fff; text-shadow: 1px 1px #000; top: ${d.clientY - 10}px; left:${d.clientX - 20}px;">${d.properties.name}</span>`
                        // // console.log(d)

                        d3.select(this).classed("selected", true)

                        // let country = mangTong.find(country => country.name.replace(" ", "").toLowerCase().match(name.toLowerCase()))

                        // document.querySelector("select").value = value

                    });
                // console.log(topojson.feature)
                // console.log(data.objects.countries.geometries[0].properties.name)
            })

            .then(isEffect ? selectedEffect : "")

    }




















    useEffect(() => {
        document.querySelector("#globe").innerHTML = ""
        document.querySelector("#rotation").innerHTML = ""
        renderGlobe(rotate, false)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])










    return (
        <div className="main">
            <div id="globe"></div>
        </div>
    )
}
