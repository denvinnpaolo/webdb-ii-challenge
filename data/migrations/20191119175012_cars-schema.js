
//implement changes
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments("id");
        tbl.varchar("VIN", 17).unique().notNullable();
        tbl.string("make", 30).notNullable();
        tbl.string("model", 30).notNullable();
        tbl.decimal("milage").notNullable();
        tbl.varchar("transmission", 30);
        tbl.string("title");
    })
  };
  //rollback changes
  exports.down = function(knex) {
    return knex.schema.dropTableIfExist("cars");
  };
  