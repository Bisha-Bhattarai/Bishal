"use strict";

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       GLOBAL ROUTING FUNCTION: Click Signature Button to Reset View
       ========================================================================== */
    const homeSignatureBtn = document.getElementById("btn-back-to-home");
    
    if (homeSignatureBtn) {
        homeSignatureBtn.addEventListener("click", () => {
            // Find target Bootstrap navigation trigger node for Tab 1
            const absoluteHomeTabLink = document.getElementById("pill-architecture-tab");
            if (absoluteHomeTabLink) {
                // Use native Bootstrap initialization to display tab dynamically 
                const activeTabInstance = bootstrap.Tab.getOrCreateInstance(absoluteHomeTabLink);
                activeTabInstance.show();
                
                // Instantly reset view coordinates smooth-scroll safely back to visual window peak
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    }

    /* ==========================================================================
       SECTION 1 LOGIC: HTTP Telemetry Request Lifecycle Simulation Loop
       ========================================================================== */
    const triggerRequestBtn = document.getElementById("btn-trigger-request");
    const resetRequestBtn = document.getElementById("btn-reset-request");
    const packetPulse = document.getElementById("telemetry-packet");
    
    const nodeClientRef = document.getElementById("node-client");
    const nodeServerRef = document.getElementById("node-server");
    const nodeDbRef = document.getElementById("node-db");
    
    const txtStepOut = document.getElementById("terminal-step");
    const txtTerminalLog = document.getElementById("terminal-output");

    const runtimePause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const initiateNetworkLifecycleTrace = async () => {
        triggerRequestBtn.disabled = true;
        nodeClientRef.classList.add("active");
        txtStepOut.textContent = "[STEP 01] // HTTP_REQUEST_DISPATCH";
        txtTerminalLog.textContent = "Client compiles asynchronous connection headers. Serializing user matrix inputs into a clean JSON packet stream...";
        
        await runtimePause(1200);
        packetPulse.style.display = "block";
        packetPulse.style.left = "100%";
        packetPulse.style.transition = "left 1s linear";
        
        await runtimePause(1000);
        nodeClientRef.classList.remove("active");
        nodeServerRef.classList.add("active");
        txtStepOut.textContent = "[STEP 02] // SERVER_ROUTING_INTERCEPT";
        txtTerminalLog.textContent = "Backend REST API gateway intercepts the transmission stream. Processing system routing metrics and checking cross-origin CORS authorization certificates...";
        packetPulse.style.display = "none";
        packetPulse.style.left = "0";
        packetPulse.style.transition = "none";

        await runtimePause(1200);
        nodeServerRef.classList.remove("active");
        nodeDbRef.classList.add("active");
        txtStepOut.textContent = "[STEP 03] // PERSISTENCE_TRANSACTION";
        txtTerminalLog.textContent = "Database cluster verifies transactional schemas. Executing safe write operations to mutate operational histories...";

        await runtimePause(1200);
        nodeDbRef.classList.remove("active");
        txtStepOut.textContent = "[SUCCESS] // HTTP_RESPONSE_200_OK";
        txtTerminalLog.textContent = "Server returns payload matrix seamlessly. Browser JavaScript catches the network stream, securely mutating presentation targets via textContent functions without system layout disruption.";
        triggerRequestBtn.disabled = false;
    };

    const resetNetworkSimulatorState = () => {
        packetPulse.style.display = "none";
        packetPulse.style.left = "0";
        packetPulse.style.transition = "none";
        [nodeClientRef, nodeServerRef, nodeDbRef].forEach(n => n.classList.remove("active"));
        txtStepOut.textContent = "[STEP 00] // IDLE";
        txtTerminalLog.textContent = "Platform tracking system steady. Awaiting active transaction request loop authorization.";
    };

    if (triggerRequestBtn) triggerRequestBtn.addEventListener("click", initiateNetworkLifecycleTrace);
    if (resetRequestBtn) resetRequestBtn.addEventListener("click", resetNetworkSimulatorState);


    /* ==========================================================================
       SECTION 2 LOGIC: Semantic Document Tree Structural Inspector
       ========================================================================== */
    const elementReadoutPlaceholder = document.getElementById("html-readout");
    const structuralButtonsArray = document.querySelectorAll(".btn-html-inspector");

    structuralButtonsArray.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            elementReadoutPlaceholder.textContent = btn.getAttribute("data-desc");
            elementReadoutPlaceholder.className = "small font-mono text-warning fw-bold";
        });
        btn.addEventListener("mouseleave", () => {
            elementReadoutPlaceholder.textContent = "Awaiting active node hover inspection trace...";
            elementReadoutPlaceholder.className = "small font-mono text-neon-cyan fw-bold";
        });
    });

    // HTML Form Submission Handler
    const regForm = document.getElementById("html-tag-registry-form");
    const feedbackTerminal = document.getElementById("form-feedback-terminal");
    const feedbackText = document.getElementById("form-feedback-text");

    if (regForm && feedbackTerminal && feedbackText) {
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const tagName = document.getElementById("reg-tag-name").value.trim();
            const email = document.getElementById("reg-developer-email").value.trim();
            const type = document.getElementById("reg-tag-type").value;
            const wcag = document.querySelector('input[name="wcag-compliance"]:checked').value;
            const purpose = document.getElementById("reg-tag-purpose").value.trim();
            
            feedbackText.textContent = `[TRANSACTION REGISTERED SUCCESS] // Node: ${tagName} | Class: ${type} | WCAG Audit: ${wcag} | Assigned Dev: ${email} | Log: "${purpose}"`;
            feedbackTerminal.style.display = "block";
        });

        regForm.addEventListener("reset", () => {
            feedbackTerminal.style.display = "none";
            feedbackText.textContent = "";
        });
    }


    /* ==========================================================================
       SECTION 3 LOGIC: Custom CSS Styles Matrix Playground
       ========================================================================== */
    const slPadding = document.getElementById("pad-slider");
    const slMargin = document.getElementById("mar-slider");
    const slBorder = document.getElementById("bor-slider");
    const selSizing = document.getElementById("boxsizing-select");

    const visualMarginNode = document.getElementById("element-margin");
    const visualBorderNode = document.getElementById("element-border");
    const visualPaddingNode = document.getElementById("element-padding");
    const textWidthOutputLabel = document.getElementById("lbl-computed-width");

    const updateDynamicCssBoxModelVisualization = () => {
        const padVal = slPadding.value;
        const marVal = slMargin.value;
        const borVal = slBorder.value;
        const sizeType = selSizing.value;

        document.getElementById("lbl-padding").textContent = `${padVal}px`;
        document.getElementById("lbl-margin").textContent = `${marVal}px`;
        document.getElementById("lbl-border").textContent = `${borVal}px`;

        // Bind updated variables directly to structural preview DOM spaces
        visualMarginNode.style.padding = `${marVal}px`;
        visualBorderNode.style.borderWidth = `${borVal}px`;
        visualPaddingNode.style.padding = `${padVal}px`;
        visualPaddingNode.style.boxSizing = sizeType;

        // Dynamically calculate layout width metrics
        let mathematicalWidth = 240; 
        if (sizeType === "content-box") {
            mathematicalWidth = 240 + (parseInt(padVal) * 2) + (parseInt(borVal) * 2);
        }
        textWidthOutputLabel.textContent = `Total Computed Horizontal Boundary: ${mathematicalWidth}px`;
    };

    [slPadding, slMargin, slBorder, selSizing].forEach(control => {
        if(control) control.addEventListener("input", updateDynamicCssBoxModelVisualization);
    });
    updateDynamicCssBoxModelVisualization();

    // CSS Theme Color pickers binding
    const themePickers = [
        { id: "pick-cyan", variable: "--neon-cyan" },
        { id: "pick-purple", variable: "--neon-purple" },
        { id: "pick-green", variable: "--neon-green" },
        { id: "pick-red", variable: "--neon-red" },
        { id: "pick-bg", variable: "--bg-main" }
    ];
    themePickers.forEach(p => {
        const el = document.getElementById(p.id);
        if (el) {
            el.addEventListener("input", (e) => {
                document.documentElement.style.setProperty(p.variable, e.target.value);
            });
        }
    });

    // Flexbox vs Grid Sandbox
    const btnToggleFlex = document.getElementById("btn-set-flex");
    const btnToggleGrid = document.getElementById("btn-set-grid");
    const containerFlex = document.getElementById("sandbox-flexbox-container");
    const containerGrid = document.getElementById("sandbox-grid-container");
    const controlPanelFlex = document.getElementById("flexbox-controls");
    const controlPanelGrid = document.getElementById("grid-controls");

    if (btnToggleFlex && btnToggleGrid) {
        btnToggleFlex.addEventListener("click", () => {
            btnToggleFlex.classList.add("active");
            btnToggleGrid.classList.remove("active");
            containerFlex.classList.remove("d-none");
            containerGrid.classList.add("d-none");
            controlPanelFlex.classList.remove("d-none");
            controlPanelGrid.classList.add("d-none");
        });

        btnToggleGrid.addEventListener("click", () => {
            btnToggleFlex.classList.remove("active");
            btnToggleGrid.classList.add("active");
            containerFlex.classList.add("d-none");
            containerGrid.classList.remove("d-none");
            controlPanelFlex.classList.add("d-none");
            controlPanelGrid.classList.remove("d-none");
        });
    }

    // Flexbox property binding
    const selFlexDir = document.getElementById("sel-flex-dir");
    const selFlexJustify = document.getElementById("sel-flex-justify");
    if (selFlexDir && selFlexJustify && containerFlex) {
        [selFlexDir, selFlexJustify].forEach(ctrl => {
            ctrl.addEventListener("change", () => {
                containerFlex.style.flexDirection = selFlexDir.value;
                containerFlex.style.justifyContent = selFlexJustify.value;
            });
        });
    }

    // Grid property binding
    const selGridCols = document.getElementById("sel-grid-cols");
    const selGridRows = document.getElementById("sel-grid-rows");
    if (selGridCols && selGridRows && containerGrid) {
        [selGridCols, selGridRows].forEach(ctrl => {
            ctrl.addEventListener("change", () => {
                containerGrid.style.gridTemplateColumns = `repeat(${selGridCols.value}, 1fr)`;
                containerGrid.style.gridTemplateRows = `repeat(${selGridRows.value}, 1fr)`;
            });
        });
    }


    /* ==========================================================================
       SECTION 4 LOGIC: Bootstrap Component Control Matrix
       ========================================================================== */
    let computationalCapacityVal = 75;
    const progressIndicatorBarNode = document.getElementById("dashboard-progress");
    const textProgressLabel = document.getElementById("lbl-progress-percent");

    document.getElementById("btn-scale-up").addEventListener("click", () => {
        if (computationalCapacityVal < 100) computationalCapacityVal += 10;
        progressIndicatorBarNode.style.width = `${computationalCapacityVal}%`;
        textProgressLabel.textContent = `TRACKER CAPACITY: ${computationalCapacityVal}%`;
    });

    document.getElementById("btn-scale-down").addEventListener("click", () => {
        if (computationalCapacityVal > 0) computationalCapacityVal -= 10;
        progressIndicatorBarNode.style.width = `${computationalCapacityVal}%`;
        textProgressLabel.textContent = `TRACKER CAPACITY: ${computationalCapacityVal}%`;
    });

    // Bootstrap Grid Sandbox Builder
    const selBCols = document.getElementById("sel-b-cols");
    const btnGenerateGrid = document.getElementById("btn-generate-bgrid");
    const containerBGrid = document.getElementById("bootstrap-grid-visual-row");

    if (selBCols && btnGenerateGrid && containerBGrid) {
        const generateBGrid = () => {
            const colCount = parseInt(selBCols.value);
            const colSpan = 12 / colCount;
            containerBGrid.innerHTML = "";
            for(let i = 0; i < colCount; i++) {
                const colEl = document.createElement("div");
                colEl.className = `col-${colSpan} p-2`;
                colEl.innerHTML = `
                    <div class="grid-sandbox-col">
                        col-${colSpan}<br>
                        <span class="small text-muted font-monospace">${(100/colCount).toFixed(1)}% width</span>
                    </div>
                `;
                containerBGrid.appendChild(colEl);
            }
        };
        btnGenerateGrid.addEventListener("click", generateBGrid);
        generateBGrid(); // Initial trigger
    }


    /* ==========================================================================
       SECTION 5 LOGIC: Secure Client-Side JavaScript Logic Calculator
       ========================================================================== */
    const triggerCalculationBtn = document.getElementById("btn-execute-computation");
    const txtMassInputNode       = document.getElementById("input-mass-val");
    const txtIntensityInputNode  = document.getElementById("input-intensity-val");
    
    const lblCalculatedMassOut   = document.getElementById("lbl-out-mass");
    const lblCalculatedEfficOut  = document.getElementById("lbl-out-efficiency");
    const divErrorAlertBoxNode   = document.getElementById("calculator-alert-box");

    const executeMathematicalLogicComputation = () => {
        divErrorAlertBoxNode.textContent = "";
        divErrorAlertBoxNode.style.display = "none";

        // Parse input targets using strict data type validation patterns
        const extractedMassValue = parseFloat(txtMassInputNode.value);
        const extractedIntensityValue = parseFloat(txtIntensityInputNode.value);

        // Boundary testing constraints filter loop
        if (isNaN(extractedMassValue) || isNaN(extractedIntensityValue) || extractedMassValue <= 0 || extractedIntensityValue < 0 || extractedIntensityValue > 100) {
            divErrorAlertBoxNode.textContent = "VALIDATION REJECTION: Please configure a baseline payload mass greater than 0 kg, and bound field intensity ranges safely within 0% to 100%.";
            divErrorAlertBoxNode.style.display = "block";
            return;
        }

        // Formulation Math Rules execution loops
        const mathematicalRatio = extractedIntensityValue / 100;
        const fieldSuppressionCoefficient = Math.pow(mathematicalRatio, 2);
        const absoluteResidualMass = extractedMassValue * (1 - fieldSuppressionCoefficient);
        const totalCalculatedEfficiency = fieldSuppressionCoefficient * 100;

        // Mutate text nodes securely using textContent exclusively to deny XSS script injection vectors
        lblCalculatedMassOut.textContent = `${absoluteResidualMass.toFixed(2)} kg`;
        lblCalculatedEfficOut.textContent = `${totalCalculatedEfficiency.toFixed(1)}%`;
    };

    if (triggerCalculationBtn) triggerCalculationBtn.addEventListener("click", executeMathematicalLogicComputation);

    // XSS Security Sandbox Logic
    const xssInput = document.getElementById("xss-input");
    const btnInjectInsecure = document.getElementById("btn-inject-insecure");
    const btnInjectSecure = document.getElementById("btn-inject-secure");
    const xssOutputDisplay = document.getElementById("xss-output-display");
    const xssParsedCode = document.getElementById("xss-parsed-code");
    const btnProceedInsecure = document.getElementById("btn-proceed-insecure");
    
    let tempInsecurePayload = "";
    let xssWarningModalInstance = null;
    const xssWarningModalEl = document.getElementById("xssWarningModal");
    if (xssWarningModalEl) {
        xssWarningModalInstance = new bootstrap.Modal(xssWarningModalEl);
    }

    const injectInsecure = (payload) => {
        // For safety demo, we strip actual <script> tags or onerror attributes to prevent active script runtime loops in this environment, 
        // but keep formatting HTML active so they see the styled compilation!
        let sanitizedDemo = payload
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "<span class='text-neon-red font-mono border border-danger px-1'>[BLOCKED ACTIVE SCRIPT NODE]</span>")
            .replace(/onerror\s*=\s*['"][^'"]*['"]/gi, "class='text-neon-red border border-danger px-1' data-blocked-handler");
        
        xssOutputDisplay.innerHTML = sanitizedDemo;
        xssParsedCode.textContent = xssOutputDisplay.innerHTML;
    };

    if (btnInjectInsecure) {
        btnInjectInsecure.addEventListener("click", () => {
            tempInsecurePayload = xssInput.value;
            if (xssWarningModalInstance) {
                xssWarningModalInstance.show();
            } else {
                injectInsecure(tempInsecurePayload);
            }
        });
    }

    if (btnProceedInsecure) {
        btnProceedInsecure.addEventListener("click", () => {
            if (xssWarningModalInstance) {
                xssWarningModalInstance.hide();
            }
            injectInsecure(tempInsecurePayload);
        });
    }

    if (btnInjectSecure) {
        btnInjectSecure.addEventListener("click", () => {
            const payload = xssInput.value;
            xssOutputDisplay.textContent = payload;
            xssParsedCode.textContent = xssOutputDisplay.innerHTML;
        });
    }


    /* ==========================================================================
       Q&A ACCORDION CONTROLLERS: Smooth heights toggler logic
       ========================================================================== */
    const qaHeaders = document.querySelectorAll(".qa-header");
    qaHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const card = header.closest(".qa-card");
            const body = card.querySelector(".qa-body");
            const isOpen = card.classList.contains("open");
            
            // Close other items in the same tab-pane
            const tabPane = card.closest(".tab-pane");
            const siblingCards = tabPane.querySelectorAll(".qa-card");
            siblingCards.forEach(sib => {
                if (sib !== card) {
                    sib.classList.remove("open");
                    sib.querySelector(".qa-body").style.maxHeight = "0px";
                    sib.querySelector(".qa-header").setAttribute("aria-expanded", "false");
                }
            });

                    if (!isOpen) {
                        card.classList.add("open");
                        body.style.maxHeight = body.scrollHeight + "px";
                        header.setAttribute("aria-expanded", "true");
                    } else {
                        card.classList.remove("open");
                        body.style.maxHeight = "0px";
                        header.setAttribute("aria-expanded", "false");
                    }
                });
            });

        });