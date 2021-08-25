import React from 'react';

function BakerViewer({ bakers }) {
	console.log(bakers);
	function bakerFunc() {
		return bakers.map((baker) => (
			<div>
				<p>Baker: {baker.baker_name}</p> <p>Favorite Donut: {baker.favorite_donut}</p>
			</div>
		));
	}
	return (<><h2>{bakerFunc()}</h2>
    <form>
        <input type="number" name="Date Baked"></input>
        
        <input type="text" name="Flavor"></input>
        <div className="button-row">
            <button type="button"></button>
        </div>
    </form>

    
    </>
    )
}

export default BakerViewer;
