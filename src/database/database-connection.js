import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("orderdatabase.db"),
};

export const initDB = ()  => {
    createTableCart();
}

const createTableCart = () => {
    const db = DatabaseConnection.getConnection();

    console.log('create DB');

    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_cart' ",
            [],
            function (tx, res) {
                if(res.rows.length == 0) {
                    tx.executeSql(
                        "CREATE TABLE IF NOT EXISTS table_cart (cart_id INTEGER PRIMARY KEY AUTOINCREMENT, title vachar(100) ) "
                    )
                }
            }
        );
    });
}