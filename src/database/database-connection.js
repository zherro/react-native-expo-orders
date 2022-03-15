import * as SQLite from 'expo-sqlite';

// Conexão com o Banco de Dados do Sqlite 
export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("orderdatabase.db"),
};

export const initDB = () => {
    createTableCart();
}

const createTableCart = () => {
    const db = DatabaseConnection.getConnection();

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_cart'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
           txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_cart(cart_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100), id INT(10), price double, available boolean)',
              []
            );
          }
        }
      );
    });
  };