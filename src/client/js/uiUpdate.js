

			import { geoWeathPixCaller} from "./app"
			import { daysCalculator,tripLengthCount}    from "./daysCount"


			// define updataUI function
			const updateUI = async ()=> {
			let returnDate = document.getElementById('return-date').value

			// fetch all data from endpoint object
			const request  = await fetch('http://localhost:3000/all')

			
			try{
			//update to the dom dynamically
				const allData = await request.json();
				let imgHolder = document.querySelector('#img-holder img')
				
				imgHolder.setAttribute('src', allData.pixPhoto)
				document.getElementById('place-result').innerHTML     	= ` <strong>Your trip to:</strong> ${allData.placeName}, ${allData.countryCode}`
				document.getElementById('depart-result').innerHTML     	= ` <strong>Departing:</strong> ${allData.departureDate}`
				document.getElementById('return-result').innerHTML     	= ` <strong>Returning after:</strong> ${tripLengthCount("'" + allData.departureDate +"'" , returnDate)} days<br><br>`
				document.getElementById('days-count-info').innerHTML    = ` ${allData.placeName}, ${allData.countryCode} is ${daysCalculator("'" + allData.departureDate +"'")} days away`
				document.getElementById('min-high-temp').innerHTML      = ` <strong>Typical weather for then is:</strong><br> min: ${allData.low_temp} °c /high: ${allData.high_temp} °c`
				document.getElementById('weather').innerHTML       		= ` ${allData.weathDescription}`

			}catch(error){
			console.log("error",  error);
			}
			};


			// refresh the page for another search

			const refreshPage = ()=>{
			window.location.reload();
			}


			export { updateUI ,refreshPage}