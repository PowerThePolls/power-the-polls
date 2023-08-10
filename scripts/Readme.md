# Infrastructure Scripts

## compile-source-codes
[![update partner list json](https://github.com/PowerThePolls/power-the-polls/actions/workflows/update-partner-list.yml/badge.svg)](https://github.com/PowerThePolls/power-the-polls/actions/workflows/update-partner-list.yml)

This is run by GitHub actions hourly. The script grabs new approved source codes for vanity urls from AirTable and adds
them to `PartnerList.json`.

## create-partner-reports

This is run by GitHub actions hourly. The script grabs new approved partners and creates the automated reports based on
how they are configured in AirTable.

## workelections-states

This script is run manually to fetch the states and jurisdictions used for looking up the `jurisdictionID` for a
particular city, county and state.

# Deprecated

## enrich-actionkit-data

This was a one-off to augment our user data in ActionKit with county and work elections jurisdiction data so that our
email templates could make use of that info.

1. Export all users in AK to a CSV
2. Run these scripts on that CSV (I think I ran county first then jurisdiction -- again, it was a one-off)
3. Import the CSV back into ActionKit

## fetch-full-jurisdictions

