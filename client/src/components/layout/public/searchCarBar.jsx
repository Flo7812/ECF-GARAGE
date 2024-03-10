import React from 'react';

const SearchCarBar = () => {
    return (
        <section style={{ display:'flex', flexDirection:'row',justifyContent:'space-around', alignItems:'center', /* gap:'20px', */ border:'solid 2px blue', borderRadius:'20px', width:'700px', height:'100px'}}>
        <div>
            <label htmlFor="range1">Rechercher par km</label><br />
            <span>min: 500        </span>
            <span>max: 300000</span><br/>
            <input type="range" name="range1" id="range1" min={500} max={300000} />
        </div>
        <div>
            <label htmlFor="range4">Rechercher par marque</label><br />
            <span></span>
            <span></span><br/>
            <input type="range" name="range4" id="range4"/>
        </div>
        <div>
            <label htmlFor="range2">Rechercher par Prix</label><br />
            <span>min: 500        </span>
            <span>max: 300000</span><br/>
            <input type="range" name="range2" id="range2" min={500} max={300000} />
        </div>
        <div>
            <label htmlFor="range3">Rechercher par DMC</label><br />
            <span>date</span>
            <span></span><br/>
            <input type="range" name="range3" id="range3"  />
        </div>
        </section>
    );
};

export default SearchCarBar;