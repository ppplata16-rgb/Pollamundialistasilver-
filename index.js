if (typeof window.initPollaPage === "function") {
    window.initPollaPage({
        readyClass: "page-participant-ready",
        onReady(api) {
            const predictionContainers = [api.refs.matchesTableBody, api.refs.knockoutGrid].filter(Boolean);

            predictionContainers.forEach((container) => {
                container.addEventListener("keydown", (event) => {
                    if (event.key !== "Enter" || !(event.target instanceof HTMLInputElement) || !event.target.classList.contains("score-input")) {
                        return;
                    }

                    const enabledInputs = [...document.querySelectorAll(".score-input:not([disabled])")];
                    const currentIndex = enabledInputs.indexOf(event.target);
                    const nextInput = enabledInputs[currentIndex + 1];

                    if (!nextInput) {
                        return;
                    }

                    event.preventDefault();
                    nextInput.focus({ preventScroll: true });
                    nextInput.select();
                });
            });
        }
    });
}
