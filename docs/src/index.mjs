import generateRandomPatient from "./generate-random-patient.mjs"

(function () {
    const selector = '.container form .form-group input'
    const inputElements = document.querySelectorAll(selector)
    const selectElements = document.querySelectorAll(
        '.container form .form-group select'
    )
    const textAreaElements = document.querySelectorAll(
        '.container form textarea'
    )
    const inputs = Array.from(inputElements)
        .concat(Array.from(selectElements))
        .concat(Array.from(textAreaElements))
    var msg = new SpeechSynthesisUtterance()
    msg.lang = 'en-US'
    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            const name = input.getAttribute('name')
            if (!name) {
                return
            }
            msg.text = name.replace(/-/g, ' ')
            speechSynthesis.speak(msg)
        })
    })
    Array.from(selectElements).forEach((select) => {
        select.addEventListener('change', (/** @type {InputEvent} */ event) => {
            /** @type {HTMLSelectElement | undefined} */
            let target = undefined
            if (event.target instanceof HTMLSelectElement) {
                target = event.target
            }
            if (!target) {
                return
            }
            /** @type {string} */
            const value = target.value
            msg.text = value.replace(/-/g, ' ')
            speechSynthesis.speak(msg)
        })
    })

    let timeout = undefined
    const temperature = document.querySelector('#temperature')
    if (temperature) {
        temperature.addEventListener('input', (event) => {
            if (timeout) {
                clearTimeout(timeout)
            }
            let target = undefined
            if (event.target instanceof HTMLInputElement) {
                target = event.target
            }
            if (!target) {
                return
            }
            const value = target.value
            timeout = setTimeout(() => {
                msg.text = `${value} °Farenheit`
                speechSynthesis.speak(msg)
            }, 1000)

            const output = document.querySelector('#temperature-output')
            if (output) {
                output.textContent = `${value} °F`
            }
        })
    }

    /**
     * Form submit event handler.
     *
     * @param {Event} event
     */
    const onSubmit = (event) => {
        event.preventDefault()
        const msg = new SpeechSynthesisUtterance()
        msg.text = 'Next Patient!'
        speechSynthesis.speak(msg)
        scrollTo(0, 0)
        generateRandomPatient()
    }

    const form = document.querySelector('form')
    if (form) {
        form.addEventListener('submit', onSubmit)
    }
})()
