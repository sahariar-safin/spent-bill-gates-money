fetch('https://shafinthedeveloper.github.io/spent-bill-gates-money/item.json')
    .then(res => res.json())
    .then(data => {
        showItem(data);
    });
var bankBalance = document.getElementById('bank-balance');
bankBalance.innerHTML = 100000000000;
const showItem = (data) => {
    const itemContainer = document.getElementById('item-container');
    data.forEach(element => {
        const item = document.createElement('div');
        item.className = "col-md-4"
        item.innerHTML = `
    <div class="item text-center bg-light m-2 p-3">
                        <img src="${ element.img }" alt="">
                        <h3> ${ element.name } </h3>
                        <h4 id="price" class="text-success"> $${ element.price } </h4>
                        <div class="count d-flex justify-content-center">
                            <button onclick="decrementItemCount('${ element.name }',' ${ element.price }')" id="sell" class="btn btn-light">Sell</button>
                            <input id="${ element.name }" type="text" value="0" class="form-control text-center w-25">
                            <button onclick="incrementItemCount('${ element.name }',' ${ element.price }')" id="buy" class="btn">Buy</button>
                        </div>
                    </div>
    `;
        itemContainer.appendChild(item);
    });
};



const incrementItemCount = (name, price) => {
    var bankBalance = document.getElementById('bank-balance');
    if (parseInt(bankBalance.innerHTML) > 0) {
        let itemCount = document.getElementById(name);
        let itemCounted = parseInt(itemCount.value) + 1;
        let total = itemCounted * parseInt(price);
        itemCount.value = itemCounted;
        bank(total);
    } else {
        bankBalance.innerHTML = "Insufficiant Funds!";
    }
};
const decrementItemCount = (name, price) => {
    let itemCount = document.getElementById(name);
    if (parseInt(itemCount.value) > 0) {
        let itemCounted = parseInt(itemCount.value) - 1;
        itemCount.value = itemCounted;
        // total = itemCounted * parseInt(price);
        bank4(price);
    }
};
const bank = (cost) => {
    var bankBalance = document.getElementById('bank-balance');
    if (parseInt(bankBalance.innerHTML) > 0) {
        const currentBalance = 100000000000 - parseInt(cost);
        bankBalance.innerHTML = currentBalance;
    } else {
        bankBalance.innerHTML = "Insufficiant Funds!";
    }
};

const bank4 = (cost) => {
    const bankBalance = document.getElementById('bank-balance');
    if (parseInt(bankBalance.innerHTML) < 100000000000) {
        const bankBalance = document.getElementById('bank-balance');
        let currentBalance = parseInt(bankBalance.innerHTML) + parseInt(cost);
        bankBalance.innerHTML = currentBalance;
    }
};

