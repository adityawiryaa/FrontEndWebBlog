// Home Page
const notificationAnimation = () => {
  $(".notificationList").velocity("transition.slideLeftIn", {
    duration: 300,
    complete: function () {
      homeAnimation()
    }
  })
};
const homeAnimation = () => {
  $(".animation").velocity("transition.flipYIn", {
    duration: 300,
    complete: function () {
      sideBarAnimation();
    }
  });
};
const sideBarAnimation = () => {
  $(".containerSideBar").velocity("transition.slideLeftIn", { duration: 300 })
}
// Post Page
const postAnimation = () => {
  $("#postAnimation").velocity("transition.slideLeftIn", {
    duration: 400,
    complete: function () {
      sideBarAnimation();
    }
  });
}
// About Page
const aboutAnimation = () => {
  $(".box").velocity("transition.slideUpIn", { duration: 800 })
}
// Run Animation

notificationAnimation() // Home Page
aboutAnimation() // About Page
postAnimation() // Post Page
