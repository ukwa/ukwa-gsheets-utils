/**
 * Copyright The British Library
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * n.b. Boilerplate based on:
 * https://github.com/gsuitedevs/apps-script-samples/blob/master/sheets/dateAddAndSubtract/dateAddAndSubtract.gs
 */

/**
 * @fileoverview Provides the custom functions WEBARCHIVE_STATUS_UKWA and WEBARCHIVE_STATUS_IA and
 * the helper functions that they use.
 * @OnlyCurrentDoc
 */
/**
 * Runs when the document is opened, creating the add-on's menu. Custom function
 * add-ons need at least one menu item, since the add-on is only enabled in the
 * current spreadsheet when a function is run.
 */
function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Use in this spreadsheet', 'use')
      .addToUi();
}

/**
 * Enables the add-on on for the current spreadsheet (simply by running) and
 * shows a popup informing the user of the new functions that are available.
 */
function use() {
  var title = 'UK Web Archive Functions';
  var message = 'The functions WEBARCHIVE_STATUS_UKWA and WEBARCHIVE_STATUS_IA are now available in ' +
      'this spreadsheet. More information is available in the function help ' +
      'box that appears when you start using them in a formula.';
  var ui = SpreadsheetApp.getUi();
  ui.alert(title, message, ui.ButtonSet.OK);
}

/**
 * Checks the status of a URL at the UK Web Archive.
 * @param {String} url The URL to check, e.g. https://www.bl.uk/
 * @return {Number} The HTTP status code of that URL in the archive. i.e. 404 means it's not in the archive.
 * @customFunction
 */
function WEBARCHIVE_STATUS_UKWA(input) {
  if(input == "") {
    return "";
  }
  var url = "https://www.webarchive.org.uk/wayback/archive/" + input;
  var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  // Try to avoid going too fast, due to 20,000 calls/day default quota per user (https://developers.google.com/apps-script/guides/services/quotas).
  Utilities.sleep(250);
  return response.getResponseCode();
}

/**
 * Checks the status of a URL at the Internet Archive.
 * @param {String} url The URL to check, e.g. https://www.bl.uk/
 * @return {Number} The HTTP status code of that URL in the archive. i.e. 404 means it's not in the archive.
 * @customFunction
 */
function WEBARCHIVE_STATUS_IA(input) {
  if(input == "") {
    return "";
  }
  var url = "https://web.archive.org/web/" + input;
  var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  // Try to avoid going too fast.
  Utilities.sleep(250);
  return response.getResponseCode();
}


