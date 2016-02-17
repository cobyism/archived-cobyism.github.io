// Calculate reading times
$(document).ready(function() {
  $(".js-read-time").text(function (index, value) {
    return Math.ceil(parseFloat(value));
  });
});

// Instafeed
var userFeed = new Instafeed({
  get: 'user',
  userId: 185695,
  accessToken: '185695.0ba7f55.7d6189f0d88d4f4aab82f134388b032b',
  resolution: 'low_resolution',
  limit: '4'
});
userFeed.run();
