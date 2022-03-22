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