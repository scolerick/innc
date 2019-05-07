$(function () {

  $("h5").
  wrapInner("<span>");

  $("h5 br").
  before("<span class='spacer'>").
  after("<span class='spacer'>");

});