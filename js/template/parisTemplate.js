const parisData = [
    {
        title: '1. Thrilling Iconic Attractions',
        text1: ' Nothing beats the thrill of seeing the Eiffel Tower and other iconic Paris attractions for the first time.',
        text2: 'But Paris offers you a lot more than just the famous sites.',
        text3: 'From historic shopping arcades to edgy street art to a Roman arena, Paris is packed with fascinating places to explore.',
        picture: '<img src="../images/paris/towerEiffel.jpg" />',
        caption: 'Eiffel Tower From Paris'
    },
    {
        title: '2. Museums & Street Art',
        text1: "The Louvre, Musée d'Orsay,and Centre Pompidou may be the most famous Paris museums - but almost 150 others offer exhibits on every topic you can imagine.",
        text2: 'Be sure to also look at art on the streets - everything from classical sculpture to the latest creations by sometimes-edgy street',
        text3: '',
        picture: '<img src="../images/paris/museumLouvre.jpg" />',
        caption: 'Museum Louvre from Paris'
    },
    {
        title: '3. Delicious Food & Wine',
        text1: " From haute cuisine in Michelin-starred restaurants to the trendiest bistros serving local fare based on what's fresh, Paris will please your palate.",
        text2: 'Stop by a bakery for fresh croissants or pain au chocolat, sample macaroons from Hermé or Ladurée, sip tea at Mariage Frères or indulge in a decadently rich hot chocolate at Angelina.',
        text3: '',
        picture: '<img src="../images/paris/parisFood.jpg" />',
        caption: 'Le 6 Paul Bert, Food From Paris'
    },
    {
        title: "4. Shopping ,Paris is a Shopper's Paradise",
        text1: ' From the dazzling "Golden Triangle" of haute couture to Grands Magasins (big department stores) to trendy boutiques,shopaholics find plenty of places to stock up on Paris fashion.',
        text2: " Don't miss the latest fashions in the Marais, the designer outlet village, open air markets, or the flea markets! And be sure to indulge yourself at the famous twice-a-year Paris sales.",
        text3: '',
        picture: '<img src="../images/paris/Printemps.jpg" />',
        caption: 'Les Grands Magasins, Paris Department Stores'
    },
    {
        title: '5. Beautiful Parks & Gardens',
        text1: ' Luxeumbourg Gardens and Tuileries Garden are famous for their statues and beautiful flowers. Kids love to sail their toy boats across pools, go for pony rides, and even take in puppet shows. Luxeumbourg Gardens and Tuileries Garden are famous for their statues and beautiful flowers. Kids love to sail their toy boats across pools, go for pony rides, and even take in puppet shows.',
        text2: "Visit Jardin des Plantes with its menagerie and maze, a hidden Roman arena in the Latin Quarter, the elevated Promenade Plantées, with views high above the city. And that's just the beginning!",
        text3: '',
        picture: '<img src="../images/paris/luxeumborg.jpg" />',
        caption: 'Luxeumborg Garden, From Paris'
    }
]

const parisTemplate = (parisData) => {
    for (i = 0; i < parisData.length; i++) {
        let title = parisData[i].title
        let text1 = parisData[i].text1
        let text2 = parisData[i].text2
        let text3 = parisData[i].text3
        let picture = parisData[i].picture
        let caption = parisData[i].caption
        let post = $(".displayPost")
        const template = `
        <div class="contentDisplay">
        <h2> ${title} </h2>
        <p> ${text1} </p>
        <p> ${text2} </p>
        <p> ${text3} </p>
        <figure class="postPicture">
            ${picture}
            <figcaption class="caption"> ${caption} </figcaption>
        </figure>
        </div>
        </section>
    `
        post.append(template)
    }
}
parisTemplate(parisData)