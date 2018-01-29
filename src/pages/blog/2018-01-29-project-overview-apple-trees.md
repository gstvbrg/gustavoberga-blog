---
templateKey: blog-post
path: /appletrees
title: 'Project README: Apple Trees'
date: 2018-01-29T17:46:42.636Z
description: Web-based Inventory and Transaction Management Software
---
###### *( copy of [project repository README](https://github.com/gstvbrg/enterpiseAppleTree) )*

## Apple Trees
> Web-based Inventory and Transaction Management Software

#### Table of Contents
+ [Overview](#overview)
+ [Tools](#tools)
+ Feature Highlights
  + [New Order](#new-order)
  + [Recent Orders](#recent-orders)
  + [Login](#login)

## Overview
This app implements basic requirements for a web-based, inventory management tool. Allowing end users to track fundamental metrics and information related to products, customers, and transactions.

These objects and actors are encapsulated in a custom GraphQL service; which helps define a strict type system for these abstractions, around which custom interfaces for querying and mutating related data can be created using plain JavaScript. 

These CRUD-like operations can be auto-generated from the [schema](./src/AppleTrees.schema) and linked to a hosted SQL database with "Backend-as-a-service" tools like [Graphcool](https://www.graph.cool/) or [AWS App Sync](https://aws.amazon.com/appsync/). The resulting "GraphQL server" becomes an API which can be consumed by web clients, and is optimized for lightweight networking and relationship-rich data. 

This method of API generation is ideal for rapid prototyping, as the API can be quickly iterated on through changes to the underlying schema. Furthermore the interface abstracts away the database access layer, allowing for future infrastructure changes and integrations that will not easily break existing code.

In concert with "GraphQL client" libraries, which provide networking configuration, data caching, and frontend framework bindings; this development strategy provides a robust set of tools that enable "full-stack" development unified through GraphQL and unimpeded by laborious devOps requirements. 

## Tools

#### Frameworks
+ React
+ React Router
+ [Apollo Client - React](https://www.apollographql.com/docs/react/) (suite of GraphQL client tooling built on Redux)
+ [Semantic UI React](https://react.semantic-ui.com/introduction) 
+ [Graphcool](https://www.graph.cool/docs/) (managed GraphQL server platform)

#### Utilities
+ [create-react-app](https://github.com/facebookincubator/create-react-app)
+ [Immutable.js](https://facebook.github.io/immutable-js/)
+ [Moment.js](https://momentjs.com/)
+ [React-DatePicker](https://hacker0x01.github.io/react-datepicker/)

# Features
>**_Disclaimer :_** *The contents of these application screenshots  represents a demo implementation used in product discovery for a licensed cannabis delivery service. Generic data is used and does not represent any real entities or transactions.*

## New Order <a id="new-order"></a>
![](https://i.imgur.com/BifvAKW.gif)
+ [New Order Components](https://github.com/gstvbrg/enterpiseAppleTree/tree/master/src/components/orders) \( [root](https://github.com/gstvbrg/enterpiseAppleTree/tree/master/src/components/orders) -> [NewOrder.js](https://github.com/gstvbrg/enterpiseAppleTree/blob/master/src/components/orders/NewOrder.js) \)
  + Shared state through nested, controlled components
  + Date and time managed with [Moment.js](https://momentjs.com/) and [React-DatePicker](https://hacker0x01.github.io/react-datepicker/)
  + Shopping Cart modeled with [Immutable.js List](https://facebook.github.io/immutable-js/docs/#/List)

## Login
![](https://i.imgur.com/xarWuBE.gif)
+ [Login Component](https://github.com/gstvbrg/enterpiseAppleTree/blob/master/src/components/login/Login.js)
  + Token persisted in localStorage
  + Requests authorized through Apollo Client middleware
  + RegEx validated input 

## Recent Orders <a id="recent-orders"></a>
![](https://i.imgur.com/GHsH8eu.gif)
+ [Order History Components](https://github.com/gstvbrg/enterpiseAppleTree/tree/master/src/components/orders) \( [Orders.js](https://github.com/gstvbrg/enterpiseAppleTree/blob/master/src/components/orders/Orders.js) -> [DesktopOrderHistory.js](https://github.com/gstvbrg/enterpiseAppleTree/blob/master/src/components/orders/DesktopOrderHistory.js) || [MobileOrderHistory.js](https://github.com/gstvbrg/enterpiseAppleTree/blob/master/src/components/orders/MobileOrderHistory.js)\)
