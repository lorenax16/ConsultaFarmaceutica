module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Product',
      [ data = {
        id: 1,
        name: 'Dorflex',
        price: 21.20,
        description:'Dorflex possui ação analgésica e relaxante muscular.',
        urlImage: 'http://localhost:3001/images/dorflex.jpeg',
      },
      {
        id: 2,
        name: 'Paracetamol gotas',
        price: 7.14,
        description:'Paracetamol é indicado para alívio de gripes e para redução da febre.',
        urlImage: 'http://localhost:3001/images/paracetamol.jpeg',
      },
      {
        id: 3,
        name: 'Cataflam',
        price: 21.49,
        description:'Cataflam é um medicamento anti-inflamatório não esteroide usado para tratar dor e inflamação no corpo.',
        urlImage: 'http://localhost:3001/images/cataflam.jpeg',
      },
      {
        id: 4,
        name: 'Simeticona',
        price: 4.50,
        description:'A simeticona é indicada para pacientes com excesso de gases no aparelho digestivo.',
        urlImage: 'http://localhost:3001/images/simeticona.jpeg',
      },
      {
        id: 5,
        name: 'Albendazol',
        price: 2.19,
        description:'Albendazol é um medicamento genérico usado para tratar condições causadas por parasitas ou vermes em adultos e crianças.',
        urlImage: 'http://localhost:3001/images/albendazol.jpeg',
      },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  },
};

