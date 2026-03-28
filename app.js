// ============================================
// Luncher - Main Application Logic
// ============================================

// Global variables
let currentStep = 1;
const totalSteps = 10;

// ============================================
// Navigation Functions
// ============================================

// Navigate to a specific step
function nextStep(step) {
    if (step < 1 || step > totalSteps) {
        console.error('Invalid step:', step);
        return;
    }
    
    // Hide current step
    const currentSection = document.getElementById(`step${currentStep}`);
    if (currentSection) {
        currentSection.classList.remove('active');
    }
    
    // Show next step
    const nextSection = document.getElementById(`step${step}`);
    if (nextSection) {
        nextSection.classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Update progress bar
    updateProgressBar(step);
    
    // Update current step
    currentStep = step;
    
    // Trigger ad refresh on step change
    refreshAds();
    
    // Start loading animation on step 5
    if (step === 5) {
        startLoadingAnimation();
    }
    
    console.log(`Navigated to step ${step}`);
}

// Update progress bar and step indicators
function updateProgressBar(step) {
    // Update progress bar width
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = (step / totalSteps) * 100;
        progressBar.style.setProperty('--progress', `${progress}%`);
        
        // Update CSS custom property for progress bar
        const styleSheet = document.styleSheets[0];
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            const rule = styleSheet.cssRules[i];
            if (rule.selectorText === '.progress-bar::after') {
                rule.style.width = `${progress}%`;
                break;
            }
        }
    }
    
    // Update step indicators
    const steps = document.querySelectorAll('.step');
    steps.forEach((stepElement, index) => {
        const stepNumber = index + 1;
        stepElement.classList.remove('active', 'completed');
        
        if (stepNumber < step) {
            stepElement.classList.add('completed');
        } else if (stepNumber === step) {
            stepElement.classList.add('active');
        }
    });
}

// Reset process to start over
function resetProcess() {
    currentStep = 1;
    
    // Hide all steps
    for (let i = 1; i <= totalSteps; i++) {
        const section = document.getElementById(`step${i}`);
        if (section) {
            section.classList.remove('active');
        }
    }
    
    // Show first step
    const firstStep = document.getElementById('step1');
    if (firstStep) {
        firstStep.classList.add('active');
    }
    
    // Reset progress bar
    updateProgressBar(1);
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Refresh ads
    refreshAds();
    
    console.log('Process reset to step 1');
}

// ============================================
// Ad Management Functions
// ============================================

// Refresh ads when navigating between steps
function refreshAds() {
    // Refresh Adsterra ads if available
    if (typeof window.adsterra !== 'undefined') {
        try {
            // Trigger ad refresh
            if (typeof window.adsterra.refresh === 'function') {
                window.adsterra.refresh();
            }
        } catch (error) {
            console.log('Ad refresh error:', error);
        }
    }
    
    // Load native ads dynamically
    loadNativeAds();
}

// Load native ads for better engagement
function loadNativeAds() {
    // Native ad containers
    const nativeAdContainers = [
        'container-93844ce08b89a079003eef47404ba09f',
        'container-93844ce08b89a079003eef47404ba09f-2',
        'container-93844ce08b89a079003eef47404ba09f-3',
        'container-93844ce08b89a079003eef47404ba09f-4',
        'container-93844ce08b89a079003eef47404ba09f-5'
    ];
    
    nativeAdContainers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container && container.innerHTML.trim() === '') {
            // Placeholder for native ad code
            // The actual ad is loaded by the script in index.html
            container.innerHTML = `
                <div style="padding: 20px; text-align: center;">
                    <div style="font-size: 12px; color: #666; margin-bottom: 10px;">Sponsored Content</div>
                    <div style="background: #f5f5f5; padding: 30px; border-radius: 8px;">
                        <div style="font-size: 14px; color: #333;">Loading advertisement...</div>
                    </div>
                </div>
            `;
        }
    });
}

// Initialize ad containers
function initializeAds() {
    console.log('Initializing ad containers...');
    
    // Banner ad containers
    const bannerContainers = [
        'adsterra-top-banner',
        'adsterra-middle-banner',
        'adsterra-bottom-banner',
        'adsterra-bottom-banner-2'
    ];
    
    bannerContainers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            // Placeholder for banner ad code
            // Replace this with actual Adsterra banner ad code
            container.innerHTML = `
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; min-height: 90px; display: flex; align-items: center; justify-content: center;">
                    <div style="font-size: 12px; color: #666;">Advertisement</div>
                </div>
            `;
        }
    });
    
    // Social bar container
    const socialBarContainer = document.getElementById('adsterra-social-bar');
    if (socialBarContainer) {
        socialBarContainer.innerHTML = `
            <div style="background: #000; color: #fff; padding: 10px; text-align: center; font-size: 12px;">
                Sponsored Links
            </div>
        `;
    }
    
    // Load native ads
    loadNativeAds();
}

// ============================================
// Loading Animation
// ============================================

// Start loading animation on step 5
function startLoadingAnimation() {
    const loadingProgress = document.getElementById('loadingProgress');
    const loadingPercent = document.getElementById('loadingPercent');
    const countdownProgress = document.getElementById('countdownProgress');
    
    if (loadingProgress && loadingPercent) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                // Auto-advance to next step after loading
                setTimeout(() => {
                    nextStep(6);
                }, 500);
            }
            loadingProgress.style.width = `${progress}%`;
            loadingPercent.textContent = Math.round(progress);
        }, 200);
    }
    
    if (countdownProgress) {
        // Reset animation
        countdownProgress.style.animation = 'none';
        countdownProgress.offsetHeight; // Trigger reflow
        countdownProgress.style.animation = 'countdown 5s ease-in-out forwards';
    }
}

// ============================================
// Copy Link Function
// ============================================

// Copy link to clipboard
function copyLink() {
    const telegramLink = document.getElementById('telegramLink');
    const copyButton = document.getElementById('copyButton');
    const copySuccess = document.getElementById('copySuccess');
    
    if (telegramLink) {
        const linkText = telegramLink.textContent;
        
        // Use modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(linkText)
                .then(() => {
                    showCopySuccess();
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                    fallbackCopy(linkText);
                });
        } else {
            fallbackCopy(linkText);
        }
    }
}

// Fallback copy method for older browsers
function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
}

// Show copy success message
function showCopySuccess() {
    const copyButton = document.getElementById('copyButton');
    const copySuccess = document.getElementById('copySuccess');
    
    if (copyButton) {
        copyButton.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
        copyButton.style.background = '#000';
        copyButton.style.color = '#fff';
    }
    
    if (copySuccess) {
        copySuccess.style.display = 'flex';
    }
    
    // Reset after 2 seconds
    setTimeout(() => {
        if (copyButton) {
            copyButton.innerHTML = '<i class="fas fa-copy"></i><span>Copy</span>';
            copyButton.style.background = '';
            copyButton.style.color = '';
        }
        if (copySuccess) {
            copySuccess.style.display = 'none';
        }
    }, 2000);
}

// ============================================
// Countdown Animation
// ============================================

// Start countdown animation on step 8
function startCountdown() {
    const countdownProgress = document.getElementById('countdownProgress');
    if (countdownProgress) {
        // Reset animation
        countdownProgress.style.animation = 'none';
        countdownProgress.offsetHeight; // Trigger reflow
        countdownProgress.style.animation = 'countdown 3s ease-in-out forwards';
    }
}

// ============================================
// Click Tracking & Analytics
// ============================================

// Track button clicks
function trackButtonClick(buttonName, step) {
    console.log(`Button clicked: ${buttonName} at step ${step}`);
    
    // Send to Firebase if available
    if (typeof window.FirebaseDB !== 'undefined') {
        try {
            const clicksRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'clicks');
            window.FirebaseDB.push(clicksRef, {
                button: buttonName,
                step: step,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                url: window.location.href
            });
        } catch (error) {
            console.log('Click tracking error:', error);
        }
    }
}

// Track ad clicks
function trackAdClick(adType, adId) {
    console.log(`Ad clicked: ${adType} - ${adId}`);
    
    // Send to Firebase if available
    if (typeof window.FirebaseDB !== 'undefined') {
        try {
            const adClicksRef = window.FirebaseDB.ref(window.FirebaseDB.database, 'adClicks');
            window.FirebaseDB.push(adClicksRef, {
                adType: adType,
                adId: adId,
                timestamp: Date.now(),
                step: currentStep
            });
        } catch (error) {
            console.log('Ad click tracking error:', error);
        }
    }
}

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// Event Listeners
// ============================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Luncher app initialized');
    
    // Initialize ads
    initializeAds();
    
    // Set up progress bar
    updateProgressBar(1);
    
    // Add click tracking to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .secondary-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackButtonClick(buttonText, currentStep);
        });
    });
    
    // Add click tracking to ad containers
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.addEventListener('click', function() {
            const adType = this.classList.contains('native-ad') ? 'native' : 
                          this.classList.contains('top-banner') ? 'banner-top' :
                          this.classList.contains('middle-banner') ? 'banner-middle' :
                          this.classList.contains('bottom-banner') ? 'banner-bottom' :
                          this.classList.contains('sticky-bottom') ? 'social-bar' :
                          this.classList.contains('smartlink-container') ? 'smartlink' : 'unknown';
            trackAdClick(adType, this.id);
        });
    });
    
    // Start countdown when reaching step 8
    const step8Observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const step8 = document.getElementById('step8');
                if (step8 && step8.classList.contains('active')) {
                    startCountdown();
                }
            }
        });
    });
    
    const step8 = document.getElementById('step8');
    if (step8) {
        step8Observer.observe(step8, { attributes: true });
    }
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Arrow right or Enter to go to next step
        if ((e.key === 'ArrowRight' || e.key === 'Enter') && currentStep < totalSteps) {
            nextStep(currentStep + 1);
        }
        // Arrow left to go to previous step
        if (e.key === 'ArrowLeft' && currentStep > 1) {
            nextStep(currentStep - 1);
        }
    });
    
    // Handle visibility change (tab switching)
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            // Refresh ads when tab becomes visible again
            refreshAds();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', debounce(function() {
        // Refresh ads on resize
        refreshAds();
    }, 250));
    
    // Handle scroll for sticky elements
    window.addEventListener('scroll', throttle(function() {
        const stickyBottom = document.getElementById('stickyBottom');
        if (stickyBottom) {
            // Show/hide sticky ad based on scroll position
            if (window.scrollY > 300) {
                stickyBottom.style.opacity = '1';
            } else {
                stickyBottom.style.opacity = '0.7';
            }
        }
    }, 100));
});

// ============================================
// Service Worker Registration (Optional)
// ============================================

// Register service worker for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// ============================================
// Export functions for global access
// ============================================

window.LuncherApp = {
    nextStep: nextStep,
    resetProcess: resetProcess,
    refreshAds: refreshAds,
    copyLink: copyLink,
    trackButtonClick: trackButtonClick,
    trackAdClick: trackAdClick,
    getCurrentStep: function() { return currentStep; }
};
