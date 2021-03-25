# OMDB Movie Search

## Requirements

Latest Version of docker should be on your system

## How to run Movie Search app

1. Clone the repo Navigate to project directory
2. Rename example.env file to .env and add your OMDB API key to `OMDB_API_KEY=<your_key>`, I've added mine for your referance
3. run `docker-compose build` and then `docker-compose up` or you can run at once using `docker-compose up --build` (this will spin up two docker containers for FE and BE)
4. Now open your browser and visit `http://localhost:3000/`

## How to clear backend cache

In your browser run `http://localhost:<BACKEND_PORT>/api/clear` for an example `http://localhost:8000/api/clear`

## Solution overview

As I'm interesting in headless approch , I've created two separate applications for backend and frontend, backend is responsible for caching and service API responses from OMDB.

Used docker for running backend in a container and docker compose to run backend and frontend containers together

## Backend Solution

Each search result will be cached on the server indefinitely and served from the cache if requested again.
If a user searches for the same keyword again within 30 seconds, the request will not go to the server again, used HTTP cache to achive this.
And also cache response in server for same search settings (ie: title, year and type). You can flush this cache by simply calling below endpoint

`http://localhost:8000/api/clear`

1. Used ExpressJs Framework because its popular tool for creating NodeJs API.
2. Created middleware and service folders to have a good project structure, and it would be easier to navigate through folders
   - In the Middleware folder there are only middlewares that call simply functions or service level
   - Service level is the main level of business logic. It works with the API, makes wrappers for them, etc.
3. I used a simple cache library instead of storage (like redis), because redis would take longer to install. The disadvantage of this approach: if our server goes down, all cache data will be deleted
4. I moved all env variables in .env file. Its secure approach to store variables and read them via dotenv.
5. Set Cache-Control max-age to search response header for achieve HTTP caching

## Frontend Solution

### search settings

---

FE is based on CRA, You can customise search behaviour configurations by editing `config/index.js` file, sample config will looks like below

```json
{
  "debounce": 300,
  "minTitleLength": 3,
  "yearRange": {
    "min": 1970,
    "max": 2015
  },
  "backendUrl": "http://localhost:8000/api"
}
```

1. Search won't hit on each key stroke instead it wait till the debounce time
2. User needs to have at least three characters to fullfill a search
3. default date range will be 1970-2015

### watchlist

---

User can toggle the Watch List button in the header to show/hide watch list screen. They can view watchlist even in offline mode as I'm saving data to browser's local storage.

User can tap on Watch list button on movie detail screen to add/remove movie from watchlist
