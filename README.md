This is an example of a <a href="https://www.docker.com/" target="_blank">Dockerized</a> production ready application built with <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a> and <a href="http://expressjs.com/" target="_blank">Express.js</a>

This project is inspired by an idea to quickly create a production ready project with all the required infrastructure at low cost yet with important security measures in place and ability to quickly scale in order to ship a quality product to early adopters.

Thus this project is the best choice if you want to quickly start an app (client app + api server) to validate your ideas and scale if needed. For landing page and admin section see my other projects in [Features](#features)

As your project grows, you can easily upgrade storage or change it from NoSQL to SQL.

* NoSQL DB provided by <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a> which offers a free and secure replica set with 512Mb storage. And it can be easily scaled to a plan with production grade features starting at just $9.
* Redis is provided by <a href="https://redislabs.com/" target="_blank">RedisLabs</a> which has a free plan with 30Mb of storage and can be quickly upgraded to a paid plan with 100Mb for as low as $5 monthly. Since in this project Redis is used by priority job queue <a href="https://github.com/Automattic/kue" target="_blank">Kue</a> and for caching that expires fast and gets removed from Redis, even 30Mb can be more than enough for an early stage project. 

```
Using Database as a service (DBaaS) is an optimal solution for early stage projects where you need security and reliability at low cost (or even for free). Settings up and maintaining your own secure MongoDb replica set or Redis storage with such important features as auto-failover, daily backups, instant scalability and performance monitoring is a challenging, time-consuming and way more expansive.
```

* TODO: CI is done with a FREE <a href="https://travis-ci.org/" target="_blank">Travis CI</a> however it integrates with GitHub only and for private projects you need to set up a paid account with GitHub which is <a href="https://github.com/pricing/developer" target="_blank">$7/monthly</a>. You can also choose to use <a href="https://circleci.com/" target="_blank">Circle CI</a> which offers 1,500 build minutes per month for <a href="https://circleci.com/pricing/" target="_blank">FREE</a> (might be sufficient on early stage) and connect it with your <a href="https://bitbucket.org" target="_blank">Bitbucket</a> with a <a href="https://bitbucket.org/product/pricing" target="_blank">FREE</a> plan. CI at no extra cost :)

* TODO: For a landing page I advise to use either <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> or <a href="https://nextjs.org/" target="_blank">Next</a> as both can export the code as static HTML making your landing page fast and fully SEO ready. See my another project [link project git here]

* TODO: For admin section for you app there is my another project [link project git here]

* As a VPS hosting I am using <a href="https://zeit.co/" target="_blank">Zeit.co</a> and their <a href="https://zeit.co/account/plan" target="_blank">Premium</a> plan for $15/monthly. It allows manual scaling up to 10 instances and in case if a project becomes successful, you can get as many as 25 instances with automatic scaling for just $50/monthly. They also automatically update ssl certificates for domains and have a simple deployment with <a href="https://zeit.co/now" target="_blank">Now</a> that integrates with GitHub (out of the box) or CircleCi with some additional workaround. Of course, you can use just about any other VPS providers, e.g. <a href="https://www.digitalocean.com/" target="_blank">Digitalocean</a>, <a href="https://www.linode.com/" target="_blank">Linode</a> or any other.

I am always open to <a href="https://github.com/sandorTuranszky/react-express-docker-starter/issues" target="_blank">your feedback</a>

## Features
* Follows best practices from <a href="https://github.com/i0natan/nodebestpractices" target="_blank">The largest Node.JS best practices list</a>
* Server powered by Express.js
* SPA with rich features including PWA coming out of the box with <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a>
* Logging with <a href="https://github.com/expressjs/morgan" target="_blank">Morgan</a>
* Uses mongoose <a href="https://mongoosejs.com/" target="_blank">Mongoose</a> and <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a>
* TODO: Built with GraphQL query language
* TODO: Transactional emails are sent with <a href="https://github.com/Automattic/kue" target="_blank">Kue</a> backed by <a href="https://redislabs.com/" target="_blank">RedisLabs</a>
* TODO: Google and LinkedIn authentication with <a href="http://www.passportjs.org/" target="_blank">Passport</a>
* TODO: CI with travisCI or CircleCI
* TODO: <a href="https://helmetjs.github.io/" target="_blank">Helmet</a> to improve security
* TODO: Sentry

## Get started

- [Set up environment variables](#set-up-environment-variables)
- [Set up MongoDB Atlas](#set-up-mongodb-atlas)
- [Set up redis RedisLabs](#set-up-redislabs)

## Set up environment variables
Create `config` directory under `server` and add to files there:

```
server/config/default.js
server/config/production.js
```

```
// default.js

module.exports = {
    db: {
        mongoose: {
            port: 3000, //or any you prefer
            user: 'your mongodb user',
            password: 'your mongodb password',
            dbName: 'your db name'
        },
        redis: {
            url: 'redis url',
            retryStrategy: 1000
        }
    }
};

// production.js has the same structure but different credential, of course.

```

More details on how config works see <a href="https://github.com/lorenwest/node-config" target="_blank">node-config</a>