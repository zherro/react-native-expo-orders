import { DatabaseConnection } from "./database-connection";

export const addToCart = (product, resultCallback) => {


    const db = DatabaseConnection.getConnection();

    db.transaction(function (tx) {
        tx.executeSql(
            'INSERT INTO table_cart (id, title, price, available) VALUES (?,?,?,?)',
            [product.id, product.title, product.price, product.available],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                resultCallback(results.rowsAffected > 0);
            }
        );
    });
}

export const listCart = (setDataCallback) => {
    const db = DatabaseConnection.getConnection();

    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM table_cart',
            [],
            (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                console.table(temp);
                setDataCallback(temp);
            }
        );
    });
}

export const deleteItem = (inputUserId, resultCallback) => {
    const db = DatabaseConnection.getConnection();

    db.transaction((tx) => {
        tx.executeSql(
            'DELETE FROM  table_cart where cart_id=?',
            [inputUserId],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                resultCallback(results.rowsAffected > 0);
            })
    });
}