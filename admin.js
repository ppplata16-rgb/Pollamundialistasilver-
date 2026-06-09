if (typeof window.initPollaPage === "function") {
    window.initPollaPage({
        readyClass: "page-admin-ready",
        focusSelector: "#adminPinInput",
        onReady(api) {
            api.refs.adminLogoutButton?.addEventListener("click", () => {
                requestAnimationFrame(() => {
                    api.focusElement("#adminPinInput");
                });
            });

            api.refs.adminPinInput?.addEventListener("input", () => {
                const trimmedLength = api.refs.adminPinInput.value.trim().length;
                const validityMessage = trimmedLength > 0 && trimmedLength < 4
                    ? "Minimo 4 caracteres."
                    : "";

                api.refs.adminPinInput.setCustomValidity(validityMessage);
            });
        }
    });
}
