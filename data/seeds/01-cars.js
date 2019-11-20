
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "id": 1,
          "VIN": "1234567890ASDFGH",
          "make": "Toyota",
          "model": "Camry",
          "milage": "102,000",
          "transmission": "automatic",
          "title": "clean"
        },
        {
          "id": 2,
          "VIN": "3828567890ASDGH",
          "make": "HONDA",
          "model": "CIVIC",
          "milage": "10,000",
          "transmission": "semi-automatic",
          "title": "salvage"
        },
        {
          "id": 3,
          "VIN": "093048502nsi8210s",
          "make": "Audi",
          "model": "S5 Sport",
          "milage": "2,201.92",
          "transmission": "Automatic",
          "title": "Clean"
        }
      ]);
    });
};
