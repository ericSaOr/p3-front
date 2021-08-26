import React, {useState} from 'react';

function BakerViewer({ bakers, setDonuts}) {
    const [ number, setNumber ] = useState(0)
    const [flavor, setFlavor] = useState("")
    const [addDonut, onAddDonut] = useState({})
	console.log(bakers);


    
	function bakerFunc() {
		return bakers.map((baker) => (
			<div>
				<p>Baker: {baker.baker_name}</p> <p>Favorite Donut: {baker.favorite_donut}</p>
			</div>
		));
	}
    function handleSubmit(lmao){
        lmao.preventDefault()

        fetch("http://localhost:9292/donuts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                number,
                flavor
                //key is the same as value so you can shorten it as above.
            })
        })
        .then((res) => res.json()).then((newDonut) => 
            setDonuts((donuts) => [...donuts, newDonut])); //end of fetch

        // console.log("donut")
        // console.log(addDonut)
       
    }

    function setInput (e){
        setNumber(e.target.value)

    }

    function setStringInput (e){
        setFlavor(e.target.value)
    }
    console.log(number, flavor)
	return (
        <>
            <h2>{bakerFunc()}</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={setInput} type="number" name="Date Baked"></input>
                <input onChange={setStringInput}type="text" name="Flavor"></input>
                <div className="button-row">
                    <input type="submit" />
                </div>
            </form>

    
        </>
    )
}

export default BakerViewer;
