# SSR/Templating

Example with CMS app, client side rendering, rudimentary templating, handlebars & express handlebars versions.

## Philosophy of this repo:

1. Show the difference between CSR and SSR and why SSR can be good in some scenarios (faster!)
1. Show the reason templating engines exist (easier to do SSR)
1. Show how to use HBS alone
1. Show why/how to use HBS with express, using express-handlebars (once it's set up, generally easier than just using handlebars directly)

To acheive **1**, run both `csr` and `ssr` folders and then use dev tools to check out the requests. Use some throttling to show how much smoother an SSR app *can* be (but remember, this isn't always the best approach!)

To acheive **2 & 3** look at code of `ssr` vs. `hbs` folders and see how it is easier to read and write, and can be less fragile.

To acheive **4**, compare `hbs` with `final` folder to see how you don't have to do the fiddly compiling and calling (this is more scaleable, might be hard to see the benefits here - it also helps with registering partials and helper functions. For now, you can see how using `express-handlebars` helps with not having to read files and compile it yourself, and you can use layouts, as we do for the error page (compare error non-DRY code in `hbs` folder with more DRY stuff in `final`


### How to run

1. `git clone git@github.com:WebAhead/templating.git && cd templating`
2. `npm i`
3. Make a `.env` file and add a postgres database url as DB_URL
4. Build the database: `node database/db_build.js`

### client side rendering

Client and server stored in the `/csr/` folder.

`npm run csr`

### rudimentary templating

Server stored in the `/ssr/` folder.

`npm run ssr`

### handlebars

Server stored in the `/hbs/` folder.

`npm run hbs`

### express handlebars versions.

Server stored in the `/final/` folder.

`npm run dev`
