'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('autos', [{
                "modelo": "Audi A1",
                "fechaDeCompra": "2013-03-09",
                "puertas": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2011-06-15",
                "puertas": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Bugatti Chiron",
                "fechaDeCompra": "2020-09-10",
                "puertas": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Abarth 595",
                "fechaDeCompra": "2021-11-20",
                "puertas": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2019-02-20",
                "puertas": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Abarth 595",
                "fechaDeCompra": "2006-04-25",
                "puertas": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Bugatti Chiron",
                "fechaDeCompra": "2009-03-22",
                "puertas": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2014-12-28",
                "puertas": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2005-12-01",
                "puertas": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Abarth 595",
                "fechaDeCompra": "2000-12-20",
                "puertas": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Abarth 595",
                "fechaDeCompra": "2004-01-04",
                "puertas": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Bugatti Chiron",
                "fechaDeCompra": "2011-08-19",
                "puertas": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2020-06-06",
                "puertas": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2013-09-11",
                "puertas": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Bugatti Chiron",
                "fechaDeCompra": "2011-06-26",
                "puertas": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2015-05-01",
                "puertas": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Abarth 595",
                "fechaDeCompra": "2009-01-28",
                "puertas": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Audi A1",
                "fechaDeCompra": "2004-01-16",
                "puertas": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Bugatti Chiron",
                "fechaDeCompra": "2017-08-23",
                "puertas": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "modelo": "Bugatti Chiron",
                "fechaDeCompra": "2008-08-14",
                "puertas": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('autos', null, {});
    }
};