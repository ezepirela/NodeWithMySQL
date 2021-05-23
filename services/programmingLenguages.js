const   db      =   require("./db"),
        helper  =   require('../helper'),
        config  =   require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows  =   await db.query(
        `SELECT id, name, released_year, github_rank, pypl_rank, tiobe_rank FROM SQLDataBase_demo LIMIT ?,?`,
        [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
        data, 
        meta
    }
}
async function create(programmingLenguage){
    const result = await db.query(
        `INSERT INTO SQLDataBase_demo
        (name, released_year, github_rank, pypl_rank, tiobe_rank)
        values
        (?, ?, ?, ?, ?)`,
        [programmingLenguage.name, programmingLenguage.released_year, programmingLenguage.github_rank,
        programmingLenguage.pypl_rank, programmingLenguage.tiobe_rank]
    );
    let message =   result.affectedRows == true ? "programming leanguage created succesfully" : "Error while creating the programming leanguage"
    return message;
}
async function update(id, programmingLenguage){
    const result = await db.query(
        `UPDATE SQLDataBase_demo
        SET name=?, released_year=?, github_rank=?, pypl_rank=?, tiobe_rank=?
        where id=?`,
        [programmingLenguage.name, programmingLenguage.released_year, programmingLenguage.github_rank, 
        programmingLenguage.pypl_rank, programmingLenguage.tiobe_rank, id]
    );
    let message =   result.affectedRows == true ? "programming leanguage updated succesfully" : "Error while updating the programming leanguage"
    return message;
}
async function deleteRow(id){
    const result = await db.query(
        `DELETE FROM SQLDataBase_demo where id=?`,
        [id]
    );
    let message =   result.affectedRows == true ? "programming leanguage remove succesfully" : "Error while removing the programming leanguage"
    return message;
}
module.exports = {
    getMultiple,
    create,
    update, 
    deleteRow
}