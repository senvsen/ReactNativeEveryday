## Trouble Shooting

### Image not rendering from ListView

- One weird thing happened is that using the same uri from Day2 project, I want to render luffy on each row of ListView, but it doesn't show up. Then, I change to a *small and https-sourced* image from facebook's github repo, then it works. Not sure how to deal with it yet.
- Some one from issue panel says that image may not be updated in ListView and you have to add an "ID" attribute to forcely update it, it can be saved for later's use.

### Use `rnpm` to link with third-party libraries

Sometimes the third-party libraries not fully integrated into the project even doing `rnpm link`. In such case, delete the node_modules folder and install again, `rm -rf node_modules && npm install`, then do `rnpm link` to help link with IOS libraries instead of doing it mannually.

### How to center an image of fixed size

Apply `flex: 1, justifyContent: 'center', alignItems: 'center'` styling on image's parent element, then for that image's styling, only specify its fixed height and width will work!

## Data

### Grab data from RSS

Here is a handy website that transforms rss feed into json, and provides a API for that: http://rss2json.com/. For example, my blog's rss feed being transformed to json is: http://rss2json.com/api.json?rss_url=http%3A%2F%2Fchocoluffy.com%2Fatom.xml. Then using this json file, we can have a much more consistent and clear structure to formatize into RN app.
