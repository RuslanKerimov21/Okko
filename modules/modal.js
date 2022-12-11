const modal = () => {
    if (document.querySelector(".modals")) {
        function bindModal(triggerSelector, modalSelector, closeSelector) {
            const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
            trigger.forEach((item) => {
                item.addEventListener("click", (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    modal.classList.add("active"),
                    (document.body.style.overflow = "hidden");
                });
            });

            close.addEventListener('click', () => {
                modal.classList.remove("active"),
                document.body.style.overflow = "";
            });
        }
        bindModal(".button-about", ".about", ".close")
        bindModal(".button-more", ".more", ".closes")
        bindModal(".only03671", ".game-modal", ".closes-game__1")
    }
};
export default modal;