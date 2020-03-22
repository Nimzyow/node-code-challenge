# Node code challenge

## Database setup

You will need to use SQLite so make sure you download the SQLite tools appropriate to you from the folowing link:

https://www.sqlite.org/download.html

Once you've installed that then make a directory where you intend to place your database.

Open your terminal, CD into that directory and run:

```
$ sqlite3 node-challenge
```

We will need to create a table so run the following command:

```
create table places(geonameid, name, asciiname, alternatenames, latitude, longitude, feature_class, feature_code, country_code, cc2, admin1_code, admin2_code, admin3_code, admin4_code, population, elevation, dem, timezone, modification_date);
```

The .tsv file provided with this challenge actually seperates the categories with tabs. So we will need to run the following command:

```
separator "\t"
```

Now you'll need to know where the .tsv file is from your root directory. I recommend opening another terminal, cd into the folder with the .tsv in it and run:

```
pwd
```

copy the output, which will be the location from your root to the .tsv folder. Go back to the terminal with sqlite3 running and run the following but replacing the PATH

```
.import PATH_TO_YOUR_TSV_FILE/GB.tsv places
```

There is just one more thing you need to do before getting this whole thing running!

Go to the root of this project and open db.js

You will see this:

```
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "PATH_TO_YOUR_DATABASE/node-challenge"
});
```

replace the PATH_TO_YOUR_DATABASE with the path to your database where you created the node-challenge database.

#Let's talk about running this application now!

To run the server, go to root and run:

```
$ node index.js
```

To run the front end, cd into client and run:

```
$ npm start
```

And finally, don't forget to have fun! :)

---

#Challenge
This challenge has three parts:

1. Written answers to [Questions](./QUESTIONS.md)
2. Build a geo search server
3. Build a form to search and display results

We're looking for elegant, clean solutions. Try to think of and handle possible edge cases.

This challenge is sent to experienced developers and newcomers alike. Developers who are familiar with the technologies can complete this within an hour, those who are less familiar will take longer. We suggest spending a maximum of 2 hours on this challenge, the objective is to demonstrate you think through a problem.

There are [hints](./HINTS.md) available should you get stuck.

## Part 1: Questions

The goal here is to describe as clearly and tersely as possible. As much an assesment of communications as JavaScript knowledge.

## Part 2: The geo search server

The objective is to create a server which can be queried for names of points of interest in the UK.

For a given input such as `hastin` a set of matching results should be returned which start with this input.

Specification:

The server should respond to the following route

    /locations?q=fuzzyMatchString

Where `fuzzyMatchString` will be a partial name of a location. For example

    /locations?q=hastin

Could return a the following JSON response (NOTE: Your dataset only contains GB locations, so the results will differ)

    [
      "Hastings Castle",
      "Hastings Slieve Donard Hotel",
      "Hastings Everglades Hotel",
      "Hastings Railway Station",
      "Hastings Culloden Estate",
      "Hastings Europa Hotel",
      "Hastings District",
      "Hastingleigh",
      "Hastingwood",
      "Hastings Stormont",
      "Hastings Ballygally Castle Hotel",
      "Hastings Culloden Estate & Spa",
      "Hastings Slieve Donard Resort And Spa"
    ]

NOTE: You should only start fuzzy matches if 2 or more characters are in the search string.

Implementation:

You can use whatever server library you like but it must be written in [node](https://nodejs.org). The data of the locations should be stored in a [SQLite](https://www.sqlite.org/) database, and be loaded in from the [data source](data/) provided in this repo.

Data source:

The data source is available in this repo in the [./data](data/) directory. The [readme](data/readme.txt) in that directory explains how to use the data.

## Part 3: The search form

The objective is to provide a user interface to search for names.

The interface should comprise of a search box and list of results.

When the user starts typing the results should be displayed in the list below.

```
   [ Search here     ]

   * Result 1
   * Result 2
   * Result 3
   * Result 4

```

NOTE: It is important to display the correct results for a given search term.

Implementation:

The implementation should be a single page app. Feel free to use any tools or frameworks to create the solution. The solution is only required to support the latest version of Chrome.

## Rules

All work should be commited into a fork of this repo. Please note you won't have permission to push to this repo directly (see <https://help.github.com/articles/fork-a-repo> for help)

You'll get bonus points if you

- Display coordinates next to results
- Unit test your code
- Provide good documentation
- Sort the results by the closest name match

Good luck!
