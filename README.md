[![Build Status](https://img.shields.io/travis/liz-mars/short-stack.svg?style=flat-square)](https://travis-ci.org/liz-mars/short-stack)
[![Coverage Status](https://img.shields.io/coveralls/liz-mars/short-stack.svg?style=flat-square)](https://coveralls.io/github/liz-mars/short-stack?branch=master)

Short Stack
===========

This is a web application stack based on Docker, Apollo, Postgraphql, and Verekia's fabulous 'JS Boilerplate', which in turn drags in a fabulous panoply of other critical development libraries (React! Bootstrap 4! Jest, Eslint, Flow, etc!!) . The value proposition is: get rid of (nearly all of) your server-side logic. Use Express to serve the single page app (and do SSR), and have the app just call up the Postgres DB directly via Apollo/GraphQL. Host your work cheaply on AWS ECS with a single command. This results in low TOC and keeps the focus on your front end development experience (less context-switching).


 - *Tired*: Not putting your business logic in your database; putting it in Rails or similar
 - *Wired*: Putting a tiny amount of auth and schema business logic in your database, and the rest on the front end; let it talk to the db directly

Status
------

Raw, raw pre-alpha. *DO NOT USE THIS FOR ANYTHING JUST YET.*  But I'm aiming for a professional-grade stack suitable for use in production in the Real World. Stay tuned.


Requirements
------------

Docker 1.9 or so. A working `node` install, and `yarn`, both strongly recommended, but not required, because Docker.  


Quick Start
-----------

Installation:
 - `git clone https://github.com/liz-mars/short-stack.git`
 - `cd short-stack`
 - `docker-compose run app yarn firstrun`

Do The Thing (development mode):
 - `docker-compose up`


You get Express at localhost:8000 Webpack with Hot Module Reload running on :7000, and Postgres (for inspection, etc.) at :54320

Production mode is still under development. 


TODO
-----
 - Add tests <.<
 - Add OAUTH2 support
 - Add documentation
 - Do a proper alpha release
 - Add Amazon ECS deployment instructions.
