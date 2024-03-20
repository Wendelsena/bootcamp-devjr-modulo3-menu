var prods = [
    { id: 1, name: "Produto 1", price: 11.0 },
    { id: 2, name: "Produto 2", price: 22.0 },
    { id: 3, name: "Produto 3", price: 33.0 },
    { id: 4, name: "Produto 4", price: 40.0 },
    { id: 5, name: "Produto 5", price: 22.0 },
    { id: 6, name: "Produto 6", price: 24.0 },
    { id: 7, name: "Produto 7", price: 25.0 },
    { id: 8, name: "Produto 8", price: 27.0 },
    { id: 9, name: "Produto 9", price: 29.0 }
];

function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML = "";

    for (var input of quantities) {
        var id = parseInt(input.id);
        var quantity = parseInt(input.value);

        if (quantity > 0) {
            var index = id - 1;
            var totalPrice = prods[index].price * quantity;
            total += totalPrice;

            output.innerHTML += `Produto: ${prods[index].name} - Preço unitário: ${formatter.format(prods[index].price)} - Quantidade: ${quantity} - <strong>Total relativo: ${formatter.format(totalPrice)}</br>`;
        }
    }

    output.innerHTML += `<h2>Total Geral: ${formatter.format(total)}</h2>`;
}
