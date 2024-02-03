import { faker } from 'https://esm.sh/@faker-js/faker';

/**
 * Generates a random patient form.
 *
 * @returns {void}
 */
export default function generateRandomPatient() {
    const fever = faker.datatype.boolean({ probability: 0.5 });
    const cough = faker.datatype.boolean({ probability: 0.5 });
    const soreThroat = faker.datatype.boolean({ probability: 0.5 });
    const headache = faker.datatype.boolean({ probability: 0.5 });
    const brokenBone = faker.datatype.boolean({ probability: 0.5 });
    const upsetStomach = faker.datatype.boolean({ probability: 0.5 });
    const height = faker.helpers.arrayElement([
        'short',
        'average',
        'tall',
    ]);
    const weight = faker.helpers.arrayElement([
        'light',
        'average',
        'heavy',
    ]);
    const systolic = faker.number.int({
        min: 100,
        max: 200,
    })
    const diastolic = faker.number.int({
        min: 60,
        max: 120,
    })
    const bloodPressure = `${systolic}/${diastolic}`
    const temperature = faker.number.int({
        min: 95,
        max: 105
    })
    const pulse = faker.number.int({
        min: 60,
        max: 200,
    })
    const name = faker.person.firstName();

    const feverElement = document.getElementById('fever');
    if (feverElement) {
        if (fever) {
            feverElement.setAttribute('checked', fever);
        } else {
            feverElement.removeAttribute('checked');
        }
    }
    const coughElement = document.getElementById('cough');
    if (coughElement) {
        if (cough) {
            coughElement.setAttribute('checked', cough);
        } else {
            coughElement.removeAttribute('checked');
        }
    }
    const soreThroatElement = document.getElementById('sore-throat');
    if (soreThroatElement) {
        if (soreThroat) {
            soreThroatElement.setAttribute('checked', soreThroat);
        } else {
            soreThroatElement.removeAttribute('checked');
        }
    }
    const headacheElement = document.getElementById('headache');
    if (headacheElement) {
        if  (headache) {
            headacheElement.setAttribute('checked', headache);
        } else {
            headacheElement.removeAttribute('checked');
        }
    }
    const brokenBoneElement = document.getElementById('broken-bone');
    if (brokenBoneElement) {
        if (brokenBone) {
            brokenBoneElement.setAttribute('checked', brokenBone);
        } else {
            brokenBoneElement.removeAttribute('checked');
        }
    }
    const upsetStomachElement = document.getElementById('upset-stomach');
    if (upsetStomachElement) {
        if (upsetStomach) {
            upsetStomachElement.setAttribute('checked', upsetStomach);
        } else {
            upsetStomachElement.removeAttribute('checked');
        }
    }
    const heightElement = document.getElementById('height');
    if (heightElement) {
        Array.from(heightElement.children).forEach((option) => {
            if ('value' in option && option.value === height) {
                option.setAttribute('selected', '');
            } else {
                option.removeAttribute('selected');
            }
        })
    }
    const weightElement = document.getElementById('weight');
    if (weightElement) {
        Array.from(weightElement.children).forEach((option) => {
            if ('value' in option && option.value === weight) {
                option.setAttribute('selected', '');
            } else {
                option.removeAttribute('selected');
            }
        })
    }
    const bloodPressureElement = document.getElementById('blood-pressure');
    if (bloodPressureElement) {
        bloodPressureElement.setAttribute('value', bloodPressure);
    }
    const temperatureElement = document.getElementById('temperature');
    const temperatureOutput = document.getElementById('temperature-output');
    if (temperatureElement) {
        temperatureElement.setAttribute('value', temperature);
    }
    if (temperatureOutput) {
        temperatureOutput.textContent = `${temperature}°F`;
    }
    const pulseElement = document.getElementById('pulse');
    if (pulseElement) {
        pulseElement.setAttribute('value', pulse);
    }
    const nameElement = document.getElementById('name');
    if (nameElement) {
        nameElement.setAttribute('value', name);
    }
}
