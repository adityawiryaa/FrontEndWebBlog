const indonesiaData = [
    {
        title: '1. The Food',
        text1: 'Spice, spice, spice everywhere. The strong sense of spices occupied most Indonesian food. Most of the local even always put sambals in every dishes.',
        text2: 'One of famous dishes in Indonesia is Rendang. Culinary experts often describe rendang as: ‘West Sumatera caramelized beef curry”',
        text3: 'In 2011 an online poll by 35,000 people held by CNN International chose Rendang as the number one dish of their ‘World’s 50 Most Delicious Foods (Readers’ Pick)’ list.',
        picture: '<img src="../images/indonesia/rendang.jpg" />',
        caption: 'Best Food from West Sumatera. Rendang'
    },
    {
        title: '2. Endangered Animals',
        text1: 'Indonesia’s rainforests are a biodiversity hotspot, rich in endemic species, and vital in regulating the Earth’s climate. The wildlife is as diverse as its marine life.',
        text2: ' Great apes, tigers, elephants and monkeys – lots of monkeys – plus one mean lizard are just some of the more notable critters you may encounter.',
        text3: 'Every region in Indonesia has its own habitats and animal. You can enter the river across jungle to see orang utan in Kalimantan; Meet the dragon, largest living lizard in Komodo island, Flores; Watching the bird of Paradise in Papua ; even the Mammoth elephant riding in Sumatras.',
        picture: ' <img src="../images/indonesia/orangutan.jpg" />',
        caption: 'One of Endangered Animals. Orang Utan'
    },
    {
        title: '3. Culture and Warm People',
        text1: 'You can sense a warm smile everywhere. Indonesians are naturally the type of people who take a great joy and pleasure in family and simple pleasures.',
        text2: 'It is this enjoyment of the basics that really differentiates Indonesian culture. The basics contain spicy food, coffee,music, dance and aksi generous sprinklings of hot gossip.',
        text3: '',
        picture: ' <img src="../images/indonesia/kalimantanCulture.jpg" />',
        caption: 'One of Indonesia Culture. From Kalimantan'
    },
    {
        title: '4. The Underwater life',
        text1: 'Place like Raja Ampat will really make you not wishses to come back to surface.',
        text2: 'The life of coral garden bubling with amazing color are highly visible — thanks to warm crystal clear water heated by tropical current, sometimes volcanic geysers. That combination is enough for making home for a various great diversity of marine life. From cute little clown fish to awe-inspiring whale sharks.',
        text3: 'Did you know Raja ampat has more diversites than Carribean seas — even Great barrier reef — albeit Raja ampat occupied much smaller area?',
        picture: '<img src="../images/indonesia/rajaampat.jpg" />',
        caption: 'Raja Ampat Underwater'
    },
    {
        title: '5. The Beaches',
        text1: 'For most people, Indonesia is all about beach.',
        text2: 'Well, with some 17,000 islands stretching between two tropical oceans, it would be hard to imagine any other place on earth where land, sea and sky have combined to produce so many utterly breathtaking strips of sand of such total variety.',
        text3: 'We’ve convered it all. White sand beaches, black sand beaches, and even pink sand beaches! Some of the beaches also have act like hot spring because of volcano nearby.',
        picture: '<img src="../images/indonesia/kutaBeach.jpg" />',
        caption: 'One of Most beach in Indonesia. Kuta Beach'
    }
]

const indonesiaTemplate = (indonesiaData) => {
    for (i = 0; i < indonesiaData.length; i++) {
        let title = indonesiaData[i].title
        let text1 = indonesiaData[i].text1
        let text2 = indonesiaData[i].text2
        let text3 = indonesiaData[i].text3
        let picture = indonesiaData[i].picture
        let caption = indonesiaData[i].caption
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
indonesiaTemplate(indonesiaData)
