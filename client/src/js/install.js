const butInstall = document.getElementById('buttonInstall');

// for installing the PWA, event listener triggers btnInstalEl to show
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const btnEvent = window.deferredPrompt;
    if (!btnEvent) {
        return;
    }
    btnEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});