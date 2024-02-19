


let available = 40;
let sitCount = 0;
const ticketPrice = 550;
let discount = 0;

const sitButtons = document.querySelectorAll('#sit-button');

for (const button of sitButtons) {
    button.addEventListener('click', function () {
        if (sitCount >= 4) {
            alert("You can only select up to 4 seats.");
            return;
        }

        // If button already selected, return
        if (button.classList.contains('bg-[#1DD100]')) {
            return;
        }

        // button bg add
        button.classList.add('bg-[#1DD100]');

        // available sit count
        const totalSeat = document.getElementById('available-sit');
        available = available - 1;
        totalSeat.innerText = parseInt(available);

        const sitBooking = document.getElementById('sit-booking');
        sitCount = sitCount + 1;
        sitBooking.innerText = parseInt(sitCount);

        // booking sit name show
        const btn = button.innerText;

        // new div created and parent div push

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'flex justify-between');

        const tag1 = document.createElement('p');
        tag1.innerText = btn;
        newDiv.appendChild(tag1);

        const tag2 = document.createElement('p');
        tag2.innerText = 'Economoy';
        newDiv.appendChild(tag2);

        const tag3 = document.createElement('p');
        tag3.innerText = ticketPrice;
        newDiv.appendChild(tag3);

        const bookingSit = document.getElementById('booking-sit');
        bookingSit.appendChild(newDiv);

        // ticket price add
        const price = ticketPrice * sitCount;
        const totalPrice = document.getElementById('ticket-price');
        totalPrice.innerText = parseInt(price);

        // grand total price
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = parseInt(price);


        if (sitCount === 4) {
            const couponFilter = document.getElementById('coupon-filter');
            const couponBtn = document.getElementById('coupon-btn');
            couponFilter.classList.add('bg-green-200');
            couponFilter.classList.remove('btn-disabled');
            couponBtn.classList.remove('btn-disabled');

            couponBtn.addEventListener('click', function () {
                const couponFilterValue = document.getElementById('coupon-filter').value;
                const code = couponFilterValue.split(' ').join('').toUpperCase();

                const discountElement = document.getElementById('discount');
                const totalPrice = parseInt(document.getElementById('ticket-price').innerText);
                const grandTotal = document.getElementById('grand-total');

                if (code === 'NEW15') {
                    discount = totalPrice * 15 / 100;
                    discountElement.innerText = 'Discount : ' + discount;
                    grandTotal.innerText = totalPrice - discount;
                } else if (code === 'COUPLE20') {
                    discount = totalPrice * 20 / 100;
                    discountElement.innerText = 'Discount : ' + discount;
                    grandTotal.innerText = totalPrice - discount;
                } else {
                    alert('Discount code is not available');
                }
                const codeBtn = document.getElementById('code-btn');
                codeBtn.classList.add('hidden');
            });
        } else if (sitCount >= 1 && sitCount <= 3) {
            nextBtn.removeAttribute('disabled');
        }

        nextBtn.addEventListener('click', function () {
            const numberField = document.getElementById('number-field');
            if (numberField.value.trim() === '') {
                alert("Please enter a valid number in the number field.");
                numberField.focus();
            }
        });


    });
}


// number verify

const numberField = document.getElementById('number-field');
numberField.addEventListener('input', function (e) {
    const number = e.target.value;
    const nextBtn = document.getElementById('next-btn');
    if (typeof parseInt(number) === 'number' && !isNaN(parseInt(number))) {
        nextBtn.removeAttribute('disabled');
    } else {
        nextBtn.setAttribute('disabled', true);
        numberField.value = '';
    }
       
});

// next btn 

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    const numberField = document.getElementById('number-field');
    if (numberField.value.trim() === '') {
        numberField.focus();
        alert("Please enter a valid number in the number field.");
    } else {
        const congratulation = document.getElementById('congratulation');
        congratulation.classList.remove('hidden');
    }
});


// congratulation system

function Continue() {
    const congratulation = document.getElementById('congratulation');
    congratulation.classList.add('hidden');


    const numberField = document.getElementById('number-field')
    numberField.value = '';
}  
