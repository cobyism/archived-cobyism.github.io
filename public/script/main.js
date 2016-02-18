// A function for use with regular page loads AND turbolinks loads
var ready = function() {
  // Calculate reading times
  $(".js-read-time").text(function (index, value) {
    return Math.ceil(parseFloat(value));
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
}

$(document).ready(ready);
$(document).on('page:load', ready);
