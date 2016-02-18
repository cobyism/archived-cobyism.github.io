// A function for use with regular page loads AND turbolinks loads
var ready;
ready = function() {
  // Calculate reading times
  $(".js-read-time").text(function (index, value) {
    return Math.ceil(parseFloat(value));
  });

  // Instafeed
  instafeed = $("#instafeed")
  if (instafeed.length && !instafeed.attr('populated')){
    var userFeed = new Instafeed({
      get: 'user',
      userId: 185695,
      accessToken: '185695.0ba7f55.7d6189f0d88d4f4aab82f134388b032b',
      resolution: 'low_resolution',
      limit: '4'
    });
    userFeed.run();
    // Save that this has been run, for turblinks
    instafeed.attr("populated", "true")
  }
}

$(document).on('ready', ready);
$(document).on('turbolinks:load', ready);
