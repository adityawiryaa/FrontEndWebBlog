// Menu Button responsive
const navButton = document.getElementsByClassName('navButton')[0];
const navMenu = document.getElementsByClassName('navMenu')[0];
navButton.addEventListener('click', () => {
  navMenu.classList.toggle('activeMenu')
})

// Jquery
$(document).ready(function () {
  //notification
  $(".closeIcon").click(function (event) {
    const listNotification = $(this).parent()
    listNotification.velocity("transition.whirlOut", function () {
      listNotification.remove()
      if ($(".notification").length == 0) {
        $(".notificationList").slideUp(200)
      };
    });
  });
  // Sweet Alert
  const noticeWrong = () => {
    swal({
      title: "Wrong",
      text: "Do not empty !!",
      icon: "error",
      button: "submit",
    });
  }
  const noticeSuccess = () => {
    swal({
      title: "Success",
      text: "Thanks for your comment",
      icon: "success",
      button: "submit",
    });
  }
  // date
  const date = () => {
    let time = new Date();
    time.setFullYear(2020);
    return time;
  }

  // comment
  $(".commentForm").on("submit", function (event) {
    event.preventDefault()
    const user = $('.userInput').val()
    const commentInput = $('.commentInput').val()
    console.log(commentInput)
    const commentOutput = $('.commentPost')
    const time = date();
    const templateComment = `
          <div id="comment">
            <div class="pictureUser">
              <img src="https://img.icons8.com/ios-filled/100/000000/change-user-male.png"/>
            </div>
            <div class="userComment">
              <strong> ${user} </strong>
              <p> ${commentInput}</p>
              <p id="date">${time}</p>
            </div>
          </div>
          `
    if (commentInput == '' || user == '') {
      noticeWrong()
    }
    else {
      noticeSuccess()
      commentOutput.append(`${templateComment}`)
    }
    $('.commentInput').val('')
    $(".userInput").val('')
  })
});