import { DatabaseConnection } from "./database-connection"

export const addToCart = ( product, resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "INSERT INTO table_cart ( id, title, price, available) VALUES ( ?, ?, ?, ?) ",
            [product.id, product.title, product.price, product.available],
            (tx, result) => {
                txn.executeSql(
                    "SELECT count(1) as qtd FROM table_cart WHERE id=?",
                    [product.id],
                    (tx, count) => {                                
                        if(result.rowsAffected > 0) {
                            resultCallback(
                                result.rowsAffected > 0,
                                count.rows.item(0).qtd
                            )
                        }
                    }
                );
            }
        )
    });
}

export const countCartItem = async ( id, resultCallback) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "SELECT count(1) as qtd FROM table_cart WHERE id=?",
            [id],
            (tx, count) => {                              
                resultCallback(
                    true,
                    count.rows.item(0).qtd
                );
                console.log(count.rows.item(0).qtd);
            }
        );
    });
}

export const listCart = ( resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "SELECT count(1) as qtd, id, title, price, available from  table_cart c group by id, title, price, available",
            [],
            (tx, result) => {
                let temp = [];
                for (let i = 0; i < result.rows.length; i++) {
                    temp.push(result.rows.item(i));
                }
                resultCallback(temp);
            }
        )
    });
}

export const deleteItem = ( cartId, resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "DELETE FROM table_cart WHERE cart_id=?",
            [cartId],
            (tx, result) => resultCallback(result.rowsAffected > 0)
        )
    });
}


export const clearCart = ( resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "DELETE FROM table_cart",
            [cartId],
            (tx, result) => resultCallback(result.rowsAffected > 0)
        )
    });
}