const metrics = {
    BBL: {
        inputUOM: 'BBL',
        outputUOM: 'GAL',
        factor: '42.0'
    },
    GAL: {
        inputUOM: 'GAL',
        outputUOM: 'LTR',
        factor: '3.78541178'
    },
    MT: {
        inputUOM: 'MT',
        outputUOM: 'BBL',
        factor: '6.37'
    }
};

function getValueById(id) {
    return document.getElementById(id).value;
}

function calculate() {
    const input = getValueById('input');
    const iUOM = getValueById('iUOM');
    document.getElementById("output").innerHTML = input * metrics[iUOM].factor;
}

function iUOMChange(event) {
    document.getElementById("oUOM").value = metrics[event.currentTarget.value].outputUOM;
}