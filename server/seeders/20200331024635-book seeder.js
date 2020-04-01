'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Books', [
      {
        "imgUrl": "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/2/1/16164266/16164266_a85a6a29-4998-4826-b17d-68cdf2f3bc04_305_448.jpg",
        "title": "Dilan 1990",
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "imgUrl": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/19/6063314/6063314_f1da10e2-cae5-44dd-98f0-e24d1a83cec5.jpg",
        "title": "Surat Kecil Untuk Ayah",
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "imgUrl": "https://ebooks.gramedia.com/ebook-covers/31752/big_covers/ID_MIZ2016MTH03PKER_B.jpg",
        "title": "Perahu Kertas",
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      } 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Books', null, {});
  }
};
