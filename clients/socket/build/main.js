require("/Users/alex-wilmer/Projects/rally/node_modules/source-map-support/register.js"),module.exports=function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=2)}([function(e,r){e.exports=require("apollo-server-express")},function(e,r){e.exports=require("express")},function(e,r,t){e.exports=t(3)},function(e,r,t){"use strict";t.r(r);var o=t(1),n=t.n(o),u=t(0);let l=u.gql`
  type Query {
    msg: String
  }

`,i=new u.ApolloServer({typeDefs:l,resolvers:{Query:{msg:()=>"hey"}}}),s=n()();i.applyMiddleware({app:s}),s.listen({port:4e3},()=>console.log(`🚀 Server ready at http://localhost:4000${i.graphqlPath}`))}]);
//# sourceMappingURL=main.map