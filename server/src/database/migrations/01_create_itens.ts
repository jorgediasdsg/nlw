import Knex from 'knex';
export async function up(knex: Knex){
    //Criar tabela
    return knex.schema.createTable('itens', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex){
    //Deletar tabela, exxatamente o contrário da UP.
    return knex.schema.dropTable('itens');
}