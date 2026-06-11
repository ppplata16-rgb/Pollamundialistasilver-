if (typeof window.initPollaPage === "function") {
    window.initPollaPage({
        readyClass: "page-participant-ready",
        onReady(api) {
            const predictionContainers = [api.refs.matchesTableBody, api.refs.knockoutGrid].filter(Boolean);
            const progressBar = document.getElementById("participantProgressBar");
            const progressPercent = document.getElementById("participantProgressPercent");
            const progressText = document.getElementById("participantProgressText");
            const saveStateText = document.getElementById("participantSaveState");
            const appNotice = api.refs.appNotice;
            let hasPendingChanges = false;

            function setPendingChanges(nextValue) {
                hasPendingChanges = nextValue;

                if (saveStateText) {
                    saveStateText.textContent = hasPendingChanges
                        ? "Tienes cambios sin guardar. Guarda antes de salir."
                        : "Todo listo. Tus cambios mas recientes ya fueron guardados o aun no cambian datos.";
                }
            }

            function updateProgressCard() {
                const extrasFields = [
                    api.refs.championPickSelect,
                    api.refs.topScorerPickInput,
                    api.refs.favoriteTeamSelect
                ].filter(Boolean);
                const filledExtras = extrasFields.filter((field) => String(field.value || "").trim()).length;
                const totalExtras = extrasFields.length;
                const scoreInputs = [...document.querySelectorAll(".score-input")];
                const filledScoreInputs = scoreInputs.filter((input) => String(input.value || "").trim() !== "").length;
                const totalScoreInputs = scoreInputs.length;
                const completedExtras = totalExtras ? filledExtras / totalExtras : 1;
                const completedScores = totalScoreInputs ? filledScoreInputs / totalScoreInputs : 0;
                const weightedProgress = ((completedExtras * 0.35) + (completedScores * 0.65)) * 100;
                const progressValue = Math.max(0, Math.min(100, Math.round(weightedProgress)));
                const pendingMatches = Math.max(0, Math.ceil((totalScoreInputs - filledScoreInputs) / 2));

                if (progressBar) {
                    progressBar.style.width = `${progressValue}%`;
                }

                if (progressPercent) {
                    progressPercent.textContent = `${progressValue}%`;
                }

                if (progressText) {
                    const extrasMessage = totalExtras
                        ? `${filledExtras}/${totalExtras} extras listos`
                        : "Extras no disponibles";
                    const matchesMessage = totalScoreInputs
                        ? `${pendingMatches} partido${pendingMatches === 1 ? "" : "s"} pendiente${pendingMatches === 1 ? "" : "s"} en la vista actual`
                        : "Sin partidos visibles en esta pestaña";

                    progressText.textContent = `${extrasMessage}. ${matchesMessage}.`;
                }
            }

            function scrollToTarget(targetId) {
                const target = document.getElementById(targetId);

                if (!target) {
                    return;
                }

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            function scrollActiveFixtureTabIntoView() {
                const activeTab = api.refs.matchesTabs?.querySelector(".fixture-tab.active");

                if (activeTab instanceof HTMLElement) {
                    activeTab.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }
            }

            function syncStateWithNotice() {
                const message = String(appNotice?.textContent || "");
                const isSavedMessage = message.includes("Todos los datos quedaron guardados.")
                    || message.includes("Datos guardados en este navegador.");

                if (isSavedMessage) {
                    setPendingChanges(false);
                }
            }

            function handleParticipantFieldEdit(event) {
                const target = event.target;

                if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) {
                    return;
                }

                if (!target.closest("#specialPredictionsForm, #matchesTableBody, #knockoutGrid")) {
                    return;
                }

                setPendingChanges(true);
                updateProgressCard();
            }

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

            document.addEventListener("click", (event) => {
                const trigger = event.target.closest("[data-scroll-target]");

                if (!(trigger instanceof HTMLButtonElement)) {
                    return;
                }

                scrollToTarget(trigger.dataset.scrollTarget || "");
            });

            document.addEventListener("input", handleParticipantFieldEdit);
            document.addEventListener("change", handleParticipantFieldEdit);

            document.addEventListener("keydown", (event) => {
                if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
                    event.preventDefault();
                    api.refs.saveAllDataButton?.click();
                }
            });

            const screenObserver = new MutationObserver(() => {
                updateProgressCard();
                scrollActiveFixtureTabIntoView();
            });

            if (api.refs.matchesTableBody) {
                screenObserver.observe(api.refs.matchesTableBody, { childList: true, subtree: true });
            }

            if (api.refs.matchesTabs) {
                screenObserver.observe(api.refs.matchesTabs, { childList: true, subtree: true });
            }

            if (appNotice) {
                const noticeObserver = new MutationObserver(() => {
                    syncStateWithNotice();
                });

                noticeObserver.observe(appNotice, { childList: true, subtree: true, characterData: true });
            }

            updateProgressCard();
            scrollActiveFixtureTabIntoView();
            setPendingChanges(false);
            syncStateWithNotice();
        }
    });
}
