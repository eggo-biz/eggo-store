/**
 * Get the url parameter
 *
 */
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
function setUrlParam(param, value) {
  // Get the current URL
  const currentUrl = new URL(window.location.href);
  // Create URLSearchParams object to work with query parameters
  const params = new URLSearchParams(currentUrl.search);
  // Update or add parameters
  params.set(param, value);
  // Update the URL object with new search parameters
  currentUrl.search = params.toString();
  // Change the URL in the browser without reloading the page
  history.pushState({}, '', currentUrl);
}
/**
/**
 * Open external Links in new tab
 *
 */
function externalLinksInNewTab() {
  for (var links = document.links, i = 0, a; a = links[i]; i++) {
    if (a.host !== location.host) {
      a.target = '_blank';
    }
  }
}
/**
 * @author Nj
 * Common Function for scrolling to a element in page based on top offset
 * @date 11/06/2021
 * @param {string} selector section for body to scroll to
 *  Ideally pass id as selector so that it will target exact element in the dom
 *  if multiple element found then the first element will be set as the scroll element
 * @param {integer} extraValue extra value to add or reduce from the scroll value
 *  postive value for excess and negative value for less scroll eg: (+50,-50 )
 * @param {integer} scrollTime animated time for scroll
 * @return nothing
 */
function scrollToSection(selector, extraValue, scrollTime) {
  /* Function Guard */
  extraValue = parseInt(extraValue);
  scrollTime = parseInt(scrollTime);
  scrollTime = -scrollTime > 0 ? -scrollTime : scrollTime;
  if (selector == undefined) {
    return;
  }
  if (extraValue == undefined || isNaN(extraValue)) {
    extraValue = 0;
  }
  if (scrollTime == undefined || isNaN(scrollTime)) {
    scrollTime = 100;
  }
  /* End of Function Guard */
  var element = jQuery(selector);
  if (element.length > 0) {
    element = jQuery(element[0]);
  }
  if (element != undefined && element.length) {
    var elementOffset = element.offset();
    // console.log(element, elementOffset.top + extraValue)
    if (elementOffset != undefined) {
      jQuery('body,html').animate({
        'scrollTop': elementOffset.top + extraValue
      }, scrollTime);
    }
    // else console.log('offset top undefined');

  }
  // else console.log("No element Found");
}
