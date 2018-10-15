export class WorkerScript extends HTMLScriptElement {
    connectedCallback() {
        let url = this.src;
        if (!url) {
            const script = this.textContent;
            if (script) {
                const blob = new Blob([script]);
                this.objUrl = window.URL.createObjectURL(blob);
                url = this.objUrl;
            }
        }
        if (url)
            this.worker = new Worker(url);
    }
    disconnectedCallback() {
        if (this.worker) {
            this.worker.terminate();
            delete this.worker;
        }
        if (this.objUrl) {
            window.URL.revokeObjectURL(this.objUrl);
            delete this.objUrl;
        }
    }
}
window.customElements.define('worker-script', WorkerScript, { extends: 'script' });
