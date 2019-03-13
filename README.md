# ukwa-gsheets-utils

Add-On for Google Sheets to help those working with web archives.

## Features

* Custom functions that use the [Memento API](http://timetravel.mementoweb.org/guide/api/) (specifically the [TimeGate](http://timetravel.mementoweb.org/guide/api/#timegate)) to look up whether a given archive holds a given URL. Currenly supports:
    * UK Web Archive via `=WEBARCHIVE_STATUS_UKWA(<url>)`
    * Internet Archive via `=WEBARCHIVE_STATUS_IA(<url>)`

There's probably quite a lot more this could do, given [these capabilities](https://developers.google.com/apps-script/guides/sheets).

The main restriction here is [the 20,000 calls/day default quota per user](https://developers.google.com/apps-script/guides/services/quotas) -- you should bare this in mind if attempting to check large numbers of URLs.

# Getting Started

To install it, [go here](https://chrome.google.com/webstore/detail/ukwa-gsuite-add-on/dghejanopbolppcgmihfhnaedjfjoaik?utm_source=permalink)

To see an example of it in use, [see this read-only Google Sheet](https://docs.google.com/spreadsheets/d/1-XcrdkkChIVtgptDzSnfd0OqUocDr0MHkG0LdlG118Y/edit#gid=0).

# Development

This repo is mostly a back-up of the [Google Script version](https://script.google.com/d/1LofnMFl1_sclUcrJjVcGuPISBQ7O4ekLuVsQhRs6vUVdExLr1dk3uy4N/edit?usp=sharing), and editing should likley happen there, while we use [clasp](https://developers.google.com/apps-script/guides/clasp) to make this backup occasionally.

That's a view-only link to the Google Script view, you'll need to request permission to edit.

# Ideas

* Add custom functions to support TNA and Parliamentary archives TimeGates?
* Add custom function to talk to the Memento Aggregator? Needs to return archival URL rather than just the status?
* Add functions to return first/last memento datestamps?
* Add functions to return counts? e.g. number of copies, or number of URLs starting like X?
* Add functions return the archived URL?
* Add button to replace URLs with archived URLs?
* Add button to colour cells holding URLs based on archival status of URL? (Could also be applied to [Google Docs](https://developers.google.com/apps-script/guides/docs)? [e.g. get all links](https://stackoverflow.com/questions/18727341/get-all-links-in-a-document))

