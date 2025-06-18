import { Modal } from 'bootstrap';
export class DialogModal {
    static async confirm(message: string, title?: string): Promise<boolean> {
        const modalTitle = title ?? 'Confirm';
        return new Promise((resolve) => {
            // Create modal elements
            const modal = document.createElement('div');
            modal.className = 'modal fade';
            modal.tabIndex = -1;
            modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${modalTitle}</h5>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="modal-confirm-btn">OK</button>
                </div>
                </div>
            </div>
            `;
            document.body.appendChild(modal);

            // Bootstrap modal
            const bsModal = new Modal(modal);
            bsModal.show();

            const cleanup = () => {
                bsModal.hide();
                modal.remove();
            };

            modal.querySelector('#modal-confirm-btn')?.addEventListener('click', () => {
                resolve(true);
                cleanup();
            });
            modal.querySelector('.btn-secondary')?.addEventListener('click', () => {
                resolve(false);
                cleanup();
            });
        });
    }
}