import { participantTemplate, successTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', function() {

    let participantCount = 1;

    function addParticipantSection () {
        participantCount++;
        const participantsContainer = document.querySelector('.participants');
        const participantHtml = participantTemplate(participantCount);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = participantHtml;

        const newParticipantSection = tempDiv.firstElementChild;

        participantsContainer.insertBefore(newParticipantSection, document.getElementById('add'));
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements]; // Convert NodeList to Array
        const total = feeElements.reduce((sum, feeElement) => sum + Number(feeElement.value || 0), 0);
        return total;
    }

    function successTemplate(info) {
        return `Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees} in Fees.`;
    }

    function submitForm(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const total = totalFees(); // Calculate total fees
        const adultName = document.getElementById('adult_name').value; // Get the adult name

        // Hide the form
        document.querySelector('form').classList.add('hide');

        // Show the summary
        const summaryElement = document.getElementById('summary');
        summaryElement.style.display = 'block';
        const info = {
            adultName: adultName,
            participantCount: participantCount,
            totalFees: total
        };
        summaryElement.innerHTML = successTemplate(info);
    }

    document.getElementById('add').addEventListener('click',addParticipantSection);
    document.querySelector('form').addEventListener('submit', submitForm);




});