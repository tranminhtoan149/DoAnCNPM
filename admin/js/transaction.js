function show_transaction() {
    fetch("../admin/api/transaction/read.php")
    .then(res => res.json())
    .then(data=>{
        let return_transaction = ``
        let stt = 0
        let sum_quantity = 0
        let sum_money = 0
        for (transaction of data){
            stt+=1;
            sum_quantity+=transaction.quantity*1;
            sum_money += transaction.quantity*transaction.price;
            return_transaction+=`<tr class='container'> 
                                    <td style="width: 10%;">${stt}</td>
                                    <td style="width: 50%;">${transaction.name}</td>
                                    <td style="width: 20%;">
                                        <div>${transaction.quantity}</div>
                                    </td>
                                    <td style="width: 20%;">${transaction.price * transaction.quantity} $</td>
                                </tr>`
        }
        return_transaction +=`<tr class="sum" style="position: sticky; bottom: 5"> 
                                    <td style="width: 10%; min-width: 100px"></td>
                                    <td style="width: 50%">Tổng</td>
                                    <td style="width: 20%">
                                        ${sum_quantity}
                                    </td>
                                    <td style="width: 20%">
                                        ${sum_money} $
                                    </td>
                                </tr>`
        document.getElementById('transaction__list').innerHTML = return_transaction;
    })
}
show_transaction();

setInterval(show_transaction,5000);