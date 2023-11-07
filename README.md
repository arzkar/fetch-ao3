# fetch-ao3

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/arzkar)

A library to fetch data from ArchiveOfOurOwn.org

## Features

- Fetch all AO3 Works Metadata

## Usage

```ts
import { ArchiveOfOurOwn } from "fetch-ao3";

let ao3_url: string = "https://archiveofourown.org/works/" + ao3_works_id;

// set the params
const params: Object = {
  view_adult: "true",
  view_full_work: "true",
};

let fic = new ArchiveOfOurOwn();
// fetch all AO3 Works Metadata
fic.fetchWorksMetadata(ao3_url, params);
```
