const data = [
  {
    images: '<img src="images/indonesia/indonesia.jpg" alt="picture">',
    link: 'href="html/indonesiaArticle.html" class="titlePopularPost"',
    title: '5 Reason Why You Should Travel to Indonesia',
    text: 'With more than 17,000 islands it’s a sure bet that Indonesia has some gorgeous beaches to lay on. Whether you want to enjoy some water sports like learning to surf ..........',
    readMore: 'Read More →',
    footer: 'September 1, 2020 || Aditya Wirya'
  },
  {
    images: '<img src="images/paris/paris.jpg" alt="picture">',
    link: 'href="html/parisArticle.html" class="titlePopularPost" ',
    title: '5 Reason Why You Should Travel to Paris',
    text: 'Paris is the capital of France and the most populous city in France. In Paris, you will find all you are searching for, from classical music, delicious cultural cuisine, fashion, commerce, beautiful hotels, arts, and fascinating environment. Summer in Paris is always ..........',
    readMore: 'Read More →',
    footer: 'September 1, 2020 || Aditya Wirya'
  },

  {
    images: '<img src="images/netherland/netherland.jpg" alt="picture">',
    link: 'href="html/netherlandArticle.html" class="titlePopularPost"',
    title: '3 Reason Why You Should Travel to Netherlands',
    text: 'Holland is flatter than a pancake that has been beaten with a million rolling pins, then run over by a tractor for good measure. So it’s great for those who want a cycling trip, yet understandably don’t wish to .......',
    readMore: 'Read More →',
    footer: 'September 1, 2020 || Aditya Wirya'
  }
]
const homeTemplate = (data) => {
  for (i = 0; i < data.length; i++) {
    let images = data[i].images
    let link = data[i].link
    let title = data[i].title
    let text = data[i].text
    let readMore = data[i].readMore
    let footer = data[i].footer
    let post = $(".leftContainer")
    let template = `
    <!-- Main Post --> 
    <!-- Post 1-->
    <section class="displayPost animation" id="post">            
      <div class="picturePost">
        <a ${link}>${images}</a>
      </div>
      <div class="bodyPost">
        <div class="titlePost">
          <h3>
            <a ${link}> ${title} </a>
          </h3>
        </div>
        <p>${text}</p>
        <div class="readMoreContainer">
          <a ${link}> ${readMore} </a>
        </div>
      </div>
      <div class="footerPost">
        <p>${footer}</p>
      </div>
    </section>
    `
    post.append(template)
  }
}
homeTemplate(data)
const popularSideBar = (data) => {
  for (i = 0; i < data.length; i++) {
    let images = data[i].images
    let link = data[i].link
    let title = data[i].title
    let popularPost = $("#popularPost")
    let templatePopular =
      `
      <div class="popularSideBar">
          ${images}
          <a ${link}> ${title}</a>
      </div>
      `
    popularPost.append(templatePopular)
  }
}
popularSideBar(data)

