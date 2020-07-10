// ==UserScript==
// @name         Copy Jira issue links
// @namespace    https://github.com/aspirewit
// @homepage     https://github.com/aspirewit/userscripts
// @updateURL    https://raw.githubusercontent.com/aspirewit/userscripts/master/dist/copyJiraIssueLinks.js
// @version      0.1.0
// @description  Copy Jira issue links
// @author       Richard Li
// @include      https://*.atlassian.net/secure/RapidBoard.jspa?*
// @grant        GM_setClipboard
// @grant        GM_getResourceURL
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @resource     icon   https://user-images.githubusercontent.com/47729970/86877950-8309f600-c11a-11ea-891c-d7a43e78742b.png
// ==/UserScript==
import waitFor from 'utils/waitFor'

const { $ } = window
const originUrl = window.location.origin
const icon = GM_getResourceURL('icon')
const html = `<div id="ghx-copy-links"><img src="${icon}" /></div>`

const generateLink = function () {
  const key = $(this).attr('data-issue-key')
  const link = `${originUrl}/browse/${key}`
  return link
}

const copyLinks = () => {
  const links = $('.ghx-selected').map(generateLink).get().join('\n')
  GM_setClipboard(links)
}

const createCopyButton = () => {
  if ($('#ghx-copy-links').length) {
    return
  }

  $(html)
    .css({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      marginRight: '16px',
    })
    .click(copyLinks)
    .insertAfter('#ghx-share')
}

$(() => waitFor(() => $('#ghx-share').length, createCopyButton))
