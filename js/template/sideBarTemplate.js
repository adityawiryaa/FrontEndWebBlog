const sideBarData = [
    {
        picture : '<img src="../images/paris/paris.jpg" alt="picture" />',
        title : '5 Reason Why You Should Travel to Paris',
        link : 'href="parisArticle.html" class="titlePopularPost"'
    },
    {
        picture : '<img src="../images/indonesia/indonesia.jpg" alt="picture" />',
        title : '5 Reason Why You Should Travel to Indonesia',
        link : 'href="indonesiaArticle.html" class="titlePopularPost"'
    },
    {
        picture : '<img src="../images/netherland/netherland.jpg" alt="picture" />',
        title : '3 Reason Why You Should Travel to Netherlands',
        link : 'href="netherlandArticle.html" class="titlePopularPost"'
    }
]

const sideBarTemplate = (sideBarData) => {
    for(i = 0; i < sideBarData.length; i++){
        let images = sideBarData[i].picture
        let title = sideBarData[i].title
        let link = sideBarData[i].link
        let post = $("#popularPost")
        let template = 
        `
        <div class="popularSideBar">
            ${images}
            <a ${link}> ${title}</a>
        </div>
        `
        post.append(template)
    }
}
sideBarTemplate(sideBarData)