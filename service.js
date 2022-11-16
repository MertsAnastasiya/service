let users = {
    "total": 100,
    "data": [
      {
        "_id": "5d99beb677015a5c2c14542e",
        "amount": 32,
        "type": "outcome",
        "name": {
          "first": "Jordan",
          "last": "Bauer"
        },
        "company": "SNORUS",
        "email": "jordan.bauer@snorus.net",
        "phone": "+1 (901) 404-2928",
        "address": "712 Bills Place, Cochranville, Florida, 6951"
      },
      {
        "_id": "5d99beb69a6aac64be820dbe",
        "amount": 34,
        "type": "outcome",
        "name": {
          "first": "Francis",
          "last": "Owens"
        },
        "company": "EXOPLODE",
        "email": "francis.owens@exoplode.us",
        "phone": "+1 (954) 566-2476",
        "address": "457 Stockholm Street, Montura, Pennsylvania, 7855"
      },
      {
        "_id": "5d99beb635dd82195040195b",
        "amount": 21,
        "type": "outcome",
        "name": {
          "first": "Bass",
          "last": "Church"
        },
        "company": "ACCRUEX",
        "email": "bass.church@accruex.com",
        "phone": "+1 (881) 403-2661",
        "address": "786 Ira Court, Abiquiu, Kentucky, 1055"
      },
      {
        "_id": "5d99beb6283bac04b3763000",
        "amount": 33,
        "type": "outcome",
        "name": {
          "first": "Mabel",
          "last": "Holt"
        },
        "company": "MALATHION",
        "email": "mabel.holt@malathion.io",
        "phone": "+1 (951) 520-3392",
        "address": "890 Alice Court, Bath, New Hampshire, 6400"
      },
      {
        "_id": "5d99beb6207f35413c9b629b",
        "amount": 12,
        "type": "loan",
        "name": {
          "first": "Lambert",
          "last": "Higgins"
        },
        "company": "GEEKOLOGY",
        "email": "lambert.higgins@geekology.name",
        "phone": "+1 (957) 573-3207",
        "address": "513 Schroeders Avenue, Moquino, Connecticut, 6353"
      },
      {
        "_id": "5d99beb6f6db754cee0835a0",
        "amount": 45,
        "type": "income",
        "name": {
          "first": "Jeanie",
          "last": "Wiley"
        },
        "company": "CORECOM",
        "email": "jeanie.wiley@corecom.tv",
        "phone": "+1 (931) 432-2272",
        "address": "196 Highland Boulevard, Wildwood, Georgia, 8732"
      },
      {
        "_id": "5d99beb6c0c5d1e73c8bb5a2",
        "amount": 15,
        "type": "income",
        "name": {
          "first": "Lynn",
          "last": "Summers"
        },
        "company": "BLUEGRAIN",
        "email": "lynn.summers@bluegrain.biz",
        "phone": "+1 (877) 578-3987",
        "address": "999 Ellery Street, Hartsville/Hartley, Tennessee, 8475"
      },
      {
        "_id": "5d99beb69aec11b778e276c9",
        "amount": 33,
        "type": "investment",
        "name": {
          "first": "Roseann",
          "last": "Lowe"
        },
        "company": "NORALI",
        "email": "roseann.lowe@norali.org",
        "phone": "+1 (969) 433-3912",
        "address": "209 Saratoga Avenue, Riegelwood, Northern Mariana Islands, 3804"
      },
      {
        "_id": "5d99beb61851f0fadfe6bca0",
        "amount": 19,
        "type": "loan",
        "name": {
          "first": "Dianna",
          "last": "Underwood"
        },
        "company": "GEOLOGIX",
        "email": "dianna.underwood@geologix.me",
        "phone": "+1 (831) 506-2281",
        "address": "379 Polar Street, Derwood, Michigan, 8219"
      },
      {
        "_id": "5d99beb61894e3a0d8a8aaeb",
        "amount": 33,
        "type": "investment",
        "name": {
          "first": "Misty",
          "last": "Wells"
        },
        "company": "ZILCH",
        "email": "misty.wells@zilch.info",
        "phone": "+1 (803) 453-3224",
        "address": "473 Rochester Avenue, Kraemer, Illinois, 140"
      },
      {
        "_id": "5d99beb6b15536f75b46a608",
        "amount": 77,
        "type": "investment",
        "name": {
          "first": "Tammie",
          "last": "Cotton"
        },
        "company": "GENMOM",
        "email": "tammie.cotton@genmom.co.uk",
        "phone": "+1 (891) 471-2924",
        "address": "599 Juliana Place, Alafaya, Maryland, 917"
      },
      {
        "_id": "5d99beb62fc237aa62133abc",
        "amount": 130,
        "type": "income",
        "name": {
          "first": "Rasmussen",
          "last": "Paul"
        },
        "company": "SUPPORTAL",
        "email": "rasmussen.paul@supportal.biz",
        "phone": "+1 (829) 473-3553",
        "address": "164 Cedar Street, Basye, District Of Columbia, 5164"
      }
    ]
};

const express = require("express");

const app = express();

app.get("/navigator", function(request, response) {

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');


    response.send({data: users.data});
});

app.listen(3000);
