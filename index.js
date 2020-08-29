async function getData() {
    try {
        const url = await fetch('https://api.covid19api.com/summary');
        const data = await url.json();
        console.log(data);
        const pakistan=data.Countries[126];
        console.log(pakistan)
        document.getElementById('date').innerHTML=pakistan.Date;
        document.getElementById('newConfirmed').innerHTML=pakistan.NewConfirmed
        document.getElementById('totalConfirmed').innerHTML=pakistan.TotalConfirmed;
        document.getElementById('totalRecover').innerHTML=pakistan.TotalRecovered;
        document.getElementById('newRecover').innerHTML=pakistan.NewRecovered;
        document.getElementById('newDeaths').innerHTML=pakistan.NewDeaths;   
        document.getElementById('totalDeaths').innerHTML=pakistan.TotalDeaths;    
    } catch (error) {
        console.log(error);
    }
}

getData();

