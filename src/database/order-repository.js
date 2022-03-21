import { DatabaseConnection } from "./database-connection"

export const addToCart = ( product, resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "INSERT INTO tb_cart ( id, title, price, available) VALUES ( ?, ?, ?, ?) ",
            [product.id, product.title, product.price, product.available],
            (tx, result) => {
                txn.executeSql(
                    "SELECT count(1) as qtd FROM tb_cart WHERE id=?",
                    [product.id],
                    (tx, count) => {                                
                        if(result.rowsAffected > 0) {
                            resultCallback(
                                {
                                    state: result.rowsAffected > 0,
                                    qtd: count.rows.item(0).qtd
                                }
                            )
                        }
                    }
                );
            }
        )
    });
}

export const countCartItem = ( id, resultCallback) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "SELECT count(1) as qtd FROM tb_cart WHERE id=?",
            [id],
            (tx, count) => {                              
                resultCallback(
                    {
                        state: true,
                        qtd: count.rows.item(0).qtd
                    }
                );
                console.log("Qtd in cart: " + count.rows.item(0).qtd);
            },
            (__, err) => console.log(err)
        );
    });
}

export const listCart = ( resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "SELECT count(1) as qtd, id, title, price, available from  tb_cart c group by id, title, price, available",
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
            "DELETE FROM tb_cart WHERE cart_id=?",
            [cartId],
            (tx, result) => resultCallback(result.rowsAffected > 0)
        )
    });
}


export const clearCart = ( resultCallback ) => {

    const db = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "DELETE FROM tb_cart",
            [],
            (tx, result) => resultCallback(result.rowsAffected > 0)
        )
    });
}