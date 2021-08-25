import React, { useState, useEffect } from 'react';
import BakerViewer from './BakerViewer'

function DonutContainer() {
	const [ bakers, setBakers ] = useState([]);
    // const [bakeObj, setBakeObj] = useState({});

	useEffect(() => {
		const url = 'http://localhost:9292/bakers';
		fetch(url).then((r) => r.json()).then((bakerData) => {setBakers(bakerData)
        })
	}, []);
   
    console.log(bakers)




	return (<>
    
        <BakerViewer bakers = {bakers}/>
        </>
    );
}

export default DonutContainer;
