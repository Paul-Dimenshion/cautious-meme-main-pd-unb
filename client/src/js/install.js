// The first line declares a constant variable butInstallEl and assigns it to the DOM element with the ID buttonInstallEl.
const butInstallEl = document.getElementById('buttonInstallEl'); 

/* The beforeinstallprompt event listener is added to the window object. 
This event is fired when the browser determines that it's a good time to show the user a prompt to install the PWA. 
When this event is fired, the event object is stored in window.deferredPrompt, 
and the hidden class is removed from the btnInstallEl element to show it. */
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    btnInstallEl.classList.toggle('hidden', false);
});

/* The click event listener is added to the butInstallEl element. 
When the button is clicked, the code checks if window.deferredPrompt exists. 
If it does, it calls the prompt() method on it to show the install prompt.
After that, window.deferredPrompt is set to null, and the hidden class is added back to the btnInstallEl element to hide it again. */
butInstallEl.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    btnInstallEl.classList.toggle('hidden', true);
});

/* The appinstalled event listener is added to the window object. This event is fired when the PWA is successfully installed. 
When this event is fired, window.deferredPrompt is set to null to ensure that the prompt is not shown again. */
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});