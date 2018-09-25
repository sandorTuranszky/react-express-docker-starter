This is an example of a [Dockerized](https://www.docker.com/) production ready application built with [Create React App](https://github.com/facebookincubator/create-react-app) and [Express.js](http://expressjs.com/)

This project is inspired by an idea to quickly create a production ready project with all the required infrastructure at low cost yet with important security measures in place and ability to quickly scale in order to ship a quality product to early adopters.

Thus this project is the best choice if you want to quickly start an app (client app + api server) to validate your ideas and scale if needed. For landing page and admin section see my other projects in [Features](#features)

As your project grows, you can easily upgrade storage or change it from NoSQL to SQL.

* NoSQL DB provided by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) which offers a free and secure replica set with 512Mb storage. And it can be easily scaled to a plan with production grade features starting at just $9.
* Redis is provided by [RedisLabs](https://redislabs.com/) which has a free plan with 30Mb of storage and can be quickly upgraded to a paid plan with 100Mb for as low as $5 monthly. Since in this project Redis is used by priority job queue [Kue](https://github.com/Automattic/kue) and for caching that expires fast and gets removed from Redis, even 30Mb can be more than enough for an early stage project. 

```
Using Database as a service (DBaaS) is an optimal solution for early stage projects where you need security and reliability at low cost (or even for free). Settings up and maintaining your own secure MongoDb replica set or Redis storage with such important features as auto-failover, daily backups, instant scalability and performance monitoring is a challenging, time-consuming and way more expansive.
```

* TODO: CI is done with a FREE [Travis CI](https://travis-ci.org/) however it integrates with GitHub only and for private projects you need to set up a paid account with GitHub which is [$7/monthly](https://github.com/pricing/developer). You can also choose to use [Circle CI](https://circleci.com/) which offers 1,500 build minutes per month for [FREE](https://circleci.com/pricing/) (might be sufficient on early stage) and connect it with your [Bitbucket](https://bitbucket.org) with a [FREE](https://bitbucket.org/product/pricing) plan. CI at no extra cost :)

* TODO: For a landing page I advise to use either [Gatsby](https://www.gatsbyjs.org/) or [Next](https://nextjs.org/) as both can export the code as static HTML making your landing page fast and fully SEO ready. See my another project [link project git here]

* TODO: For admin section for you app there is my another project [link project git here]

* As a VPS hosting I am using [zeit](https://zeit.co/) and their [Premium](https://zeit.co/account/plan) plan for $15/monthly. It allows manual scaling up to 10 instances and in case if a project becomes successful, you can get as many as 25 instances with automatic scaling for just $50/monthly. They also automatically update ssl certificates for domains and have a simple deployment with [Now](https://zeit.co/now) that integrates with GitHub (out of the box) or CircleCi with some additional workaround. Of course, you can use just about any other VPS providers, e.g. [Digitalocean](https://www.digitalocean.com/), [Linode](https://www.linode.com/) or any other.

I am always open to [your feedback](https://github.com/.../issues)

## Features
* Follows best practices from [The largest Node.JS best practices list](https://github.com/i0natan/nodebestpractices)
* Server powered by Express.js
* SPA with rich features including PWA coming out of the box with [Create React App]
(https://github.com/facebookincubator/create-react-app)
* Logging with [Morgan](https://github.com/expressjs/morgan)
* Uses mongoose [Mongoose](https://mongoosejs.com/) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* TODO: Built with GraphQL query language
* TODO: Transactional emails are sent with [Kue](https://github.com/Automattic/kue) backed by [RedisLabs](https://redislabs.com/)
* TODO: Google and LinkedIn authentication with [Passport](http://www.passportjs.org/)
* TODO: CI with travisCI or CircleCI
* TODO: [Helmet](https://helmetjs.github.io/) to improve security
* TODO: Sentry

## Get started

- [Set up MongoDB Atlas](#updating-to-new-releases)
- [Set up RedisLabs](#sending-feedback)