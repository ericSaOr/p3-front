import React, { useState, useEffect } from 'react';
import BakerViewer from './BakerViewer'
import DonutViewer from './DonutViewer';

function DonutContainer() {
	const [ bakers, setBakers ] = useState([]);
    const [ donuts, setDonuts] = useState([])
    const [ deletedDonuts, setDeletedDonuts] = useState([])
    const [donut, setDonut] = useState([])
    // const [bakeObj, setBakeObj] = useState({});

	useEffect(() => {
		const url = 'http://localhost:9292/bakers';
		fetch(url).then((r) => r.json()).then((bakerData) => {setBakers(bakerData)
        })
	}, []);
   
    console.log(bakers)

    useEffect(() => {
		const url = 'http://localhost:9292/donuts';
		fetch(url).then((r) => r.json()).then((donutData) => {setDonuts(donutData)
        })
	}, []);

    console.log(donuts)

    function getDonut(donut){
        setDonut(donut.id)

    }


	return (<>
    
        <BakerViewer bakers = {bakers} setDonuts={setDonuts}/>
        <DonutViewer donuts = {donuts} deletedDonuts = {deletedDonuts} setDonuts = {setDonuts}
            
        />
        </>
    );
}

export default DonutContainer;
