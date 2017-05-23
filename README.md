[![Build Status](https://img.shields.io/travis/liz-mars/short-stack.svg?style=flat-square)](https://travis-ci.org/liz-mars/short-stack)
[![Coverage Status](https://img.shields.io/coveralls/liz-mars/short-stack.svg?style=flat-square)](https://coveralls.io/github/liz-mars/short-stack?branch=master)

Short Stack
===========

Value Proposition
----------

 - *Tired*: Not putting your business logic in your database; putting it in Rails or similar; worrying about hosting or PaaS fees
 - *Wired*: Putting a tiny amount of auth and schema business logic in your database, and the rest on the front end; let it talk to the db directly; host cheaply and instantaneously on Amazon ECS with a single command; keeping control over your data while avoiding the proliferation of infrastructure and moving parts. 

Overview
--------

This is a web application stack based on Docker, Apollo, Postgraphql, and Verekia's fabulous 'JS Boilerplate', which in turn drags in a fabulous panoply of other critical development libraries (React! Bootstrap 4! Jest, Eslint, Flow, etc!!) . The value proposition is: get rid of (nearly all of) your server-side logic. Use Express to serve the single page app (and do SSR), and have the app just call up Postgresql directly via Apollo/GraphQL/Postgraphql. Host your work cheaply on AWS ECS with a single command. This results in low TCO and keeps the focus on your frontend development experience (less context-switching).


Status
------

Raw, raw pre-alpha. But I'm aiming for a professional-grade stack suitable for use in production in the Real World. Stay tuned.



TODO
-----
 - Add tests <.<
 - Add OAUTH2 support
 - Add documentation
 - Do a proper alpha release
 - Add Amazon ECS deployment instructions.
