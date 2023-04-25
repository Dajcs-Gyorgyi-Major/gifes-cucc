let vizsgalatFeltolt = async () => {
    try {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let price = document.getElementById('price').value;
        let options = document.getElementById('doctors').options;
        let doctors = [];
        for (var option of options) {
            if (option.selected) {
                doctors.push(option.value);
            }
        }
        const response = await fetch('/examination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                doctors: doctors,
            }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let vizsgalatTorol = async (id) => {
    try {
        const response = await fetch('/examination/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let vizsgalatModosit = async () => {
    try {
        let id = document.getElementById('mid').value;
        let title = document.getElementById('mtitle').value;
        let description = document.getElementById('mdescription').value;
        let price = document.getElementById('mprice').value;
        let options = document.getElementById('mdoctors').options;
        let doctors = [];
        for (var option of options) {
            if (option.selected) {
                doctors.push(option.value);
            }
        }
        const response = await fetch('/examination/modosit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                title: title,
                description: description,
                price: price,
                doctors: doctors,
            }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let doktorFeltolt = async () => {
    try {
        let name = document.getElementById('name').value;
        let skill = document.getElementById('skill').value;
        let image = document.getElementById('image').value;
        console.log(name, skill, image);
        const response = await fetch('/doctor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                skill: skill,
                image: image,
            }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let doktorTorol = async (id) => {
    try {
        const response = await fetch('/doctor/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let tesztTorol = async (id) => {
    try {
        const response = await fetch('/chosentest/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};
