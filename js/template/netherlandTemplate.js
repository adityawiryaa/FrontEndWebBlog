const netherlandData = [
    {
        title: '1. The Quintessential tulips and Windmills',
        text1: 'Your trip to the Netherlands is incomplete if you have not visited a tulip field or seen a windmill in action. Spring is the perfect time to visit the Netherlands, it’s when you will get to witness tulips in full bloom.',
        text2: "Keukenhof Garden in the town of Lisse is world-famous for its sea of tulips, it's also the most visited garden in the Netherlands.",
        text3: 'Mid-April to mid-May is by far the best season to see the Dutch tulip fields. And of course, how can we forget the magnificent windmills. These massive windmills are not just for show, they help in grinding grain and used as water pumps to keep floods at bay.',
        picture: '<img src="../images/netherland/windmills.jpg" />',
        caption: 'The quintessential tulips and windmills From Netherlands'
    },
    {
        title: '2. Bicycle country',
        text1: 'Where ever you go, bicycles will follow you! There are more bicycles in the Netherlands than people.',
        text2: 'Due to heavy usage of bicycles, the cycle paths are well surfaced, so you don’t have to worry about a flat tyre.',
        text3: 'A cyclist has priority over the others on the road as well. There are bicycle lanes everywhere, so go ahead, rent a bicycle, and rule the road!',
        picture: '<img src="../images/netherland/bicycleHolland.jpg" />',
        caption: 'Bicycle City From Amsterdam'
    },
    {
        title: '3. Iconic canals',
        text1: 'Way before cycles came into existence, canals served as the main medium of transport in several Dutch cities. These waterways have been instrumental in boosting the economy back then.',
        text2: 'Majority of the canal systems are intact and are still in use. Many tour packages include the canals; taking a water taxi is a great way to see them and is pocket friendly too.',
        text3: '',
        picture: '<img src="../images/netherland/canalAmsterdam.jpg" />',
        caption: 'Iconic Canal From Amsterdam'
    },
]
const netherlandTemplate = (netherlandData) => {
    for (i = 0; i < netherlandData.length; i++) {
        let title = netherlandData[i].title
        let text1 = netherlandData[i].text1
        let text2 = netherlandData[i].text2
        let text3 = netherlandData[i].text3
        let picture = netherlandData[i].picture
        let caption = netherlandData[i].caption
        let post = $(".postContent")
        const template = `

        <div class="contentDisplay">
            <h2>${title}</h2>
            <p>${text1}/</p>
            <p>${text2}</p>
            <p>${text3}</p>
            <figure class="postPicture">
                ${picture}
                <figcaption class="caption">${caption}</figcaption>
            </figure>
        </div>
        `
        post.append(template)
    }
}
netherlandTemplate(netherlandData)