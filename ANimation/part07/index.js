let notifications = 3;

function addNotification() {
  notifications++;
  $(".notification-count").text(notifications);
  $(".notification-bell svg").css("animation", "ding 0.5s linear");
  setTimeout(() => {
    $(".notification-bell svg").css("animation", "none");
  }, 500);
  if (notifications == 0) {
    $(".notification-count").css("transform", "scale(0)");
  } else {
    $(".notification-count").css("transform", "scale(100%)");
  }
}

function markRead() {
  notifications = 0;
  $(".notification-count").text(notifications);
  if (notifications == 0) {
    $(".notification-count").css("transform", "scale(0)");
  } else {
    $(".notification-count").css("transform", "scale(100%)");
  }
}
