import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("orderdatabase.db", "3.0"),
};

export const initDB = ()  => {
    createTableCart();
    createTableUser();
}

const createTableCart = () => {
    const db = DatabaseConnection.getConnection();

    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='tb_cart' ",
            [],
            function (tx, res) {
                console.log("creating table" + res.rows.length == 0);
                if(res.rows.length == 0) {
                    tx.executeSql(
                        "CREATE TABLE IF NOT EXISTS tb_cart (cart_id INTEGER PRIMARY KEY AUTOINCREMENT, title varchar(100), id INT(10), price double, available boolean) "
                        ,[]
                        ,(txn, result) => console.log("table created")
                        ,(__, err) => console.log(err)
                        )
                }
            }
        );
    });

}

const createTableUser = () => {
    const db = DatabaseConnection.getConnection();

    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='tb_user' ",
            [],
            function (tx, res) {
                console.log("creating table" + res.rows.length == 0);
                if(res.rows.length == 0) {
                    tx.executeSql(
                        "CREATE TABLE IF NOT EXISTS tb_user (user_id INTEGER PRIMARY KEY AUTOINCREMENT, login varchar(100), token varchar(1000)) "
                        ,[]
                        ,(txn, result) => console.log("table created")
                        ,(__, err) => console.log(err)
                        )
                }
            }
        );
    });

}