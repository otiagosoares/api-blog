
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable().unique();
        table.string('password', 200).notNullable();
        table.integer('role', 200).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};

exports.config = { transaction: false };