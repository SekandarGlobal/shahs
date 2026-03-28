// ============================================
// Firebase Configuration for Luncher
// ============================================

// Firebase is now initialized directly in index.html using ES modules
// This file provides helper functions for Firebase operations

// Get Firebase database reference
function getFirebaseDatabase() {
    if (typeof window.FirebaseDB !== 'undefined') {
        return window.FirebaseDB.database;
    }
    console.error('Firebase not initialized');
    return null;
}

// Set up real-time listener for Telegram links
function setupLinksListener() {
    const database = getFirebaseDatabase();
    if (!database) {
        console.error('Firebase database not available');
        useFallbackLink();
        return;
    }

    try {
        const linksRef = window.FirebaseDB.ref(database, 'links');
        
        // Listen for changes to active links
        window.FirebaseDB.onValue(linksRef, (snapshot) => {
            const links = snapshot.val();
            
            if (links) {
                // Get the first active link
                const linkKeys = Object.keys(links);
                if (linkKeys.length > 0) {
                    // Find first active link
                    let activeLink = null;
                    for (const key of linkKeys) {
                        if (links[key].active) {
                            activeLink = links[key];
                            break;
                        }
                    }
                    
                    if (activeLink) {
                        updateTelegramLink(activeLink.url, activeLink.name);
                        console.log('Telegram link updated:', activeLink.name);
                    } else {
                        console.log('No active links found');
                        useFallbackLink();
                    }
                } else {
                    console.log('No links available in database');
                    useFallbackLink();
                }
            } else {
                console.log('No links available in database');
                useFallbackLink();
            }
        }, (error) => {
            console.error('Error reading links:', error);
            useFallbackLink();
        });
    } catch (error) {
        console.error('Error setting up links listener:', error);
        useFallbackLink();
    }
}

// Update the Telegram link in the UI
function updateTelegramLink(url, name) {
    const telegramLinkElement = document.getElementById('telegramLink');
    const channelNameElement = document.getElementById('channelName');
    
    if (telegramLinkElement && channelNameElement) {
        telegramLinkElement.href = url;
        channelNameElement.textContent = name || 'Premium Channel';
        
        // Add click tracking
        telegramLinkElement.addEventListener('click', function() {
            console.log('Telegram link clicked:', url);
            // Track click event
            trackLinkClick(url);
        });
    }
}

// Track link clicks (optional analytics)
function trackLinkClick(url) {
    console.log('Link click tracked:', url);
    
    // Send to Firebase analytics
    const database = getFirebaseDatabase();
    if (database) {
        try {
            const clicksRef = window.FirebaseDB.ref(database, 'clicks');
            window.FirebaseDB.push(clicksRef, {
                url: url,
                timestamp: Date.now(),
                userAgent: navigator.userAgent
            });
        } catch (error) {
            console.log('Click tracking error:', error);
        }
    }
}

// Fallback link if Firebase is not configured
function useFallbackLink() {
    const fallbackUrl = 'https://t.me/premiumchannel';
    const fallbackName = 'Premium Channel';
    
    updateTelegramLink(fallbackUrl, fallbackName);
    console.log('Using fallback link:', fallbackUrl);
}

// Function to add a new link (for admin use)
function addTelegramLink(url, name) {
    const database = getFirebaseDatabase();
    if (!database) {
        console.error('Firebase not initialized');
        return false;
    }
    
    try {
        const linksRef = window.FirebaseDB.ref(database, 'links');
        const newLinkRef = window.FirebaseDB.push(linksRef);
        
        window.FirebaseDB.set(newLinkRef, {
            url: url,
            name: name,
            active: true,
            createdAt: Date.now()
        })
        .then(() => {
            console.log('Link added successfully');
            return true;
        })
        .catch((error) => {
            console.error('Error adding link:', error);
            return false;
        });
    } catch (error) {
        console.error('Error adding link:', error);
        return false;
    }
}

// Function to update a link (for admin use)
function updateLink(linkId, url, name) {
    const database = getFirebaseDatabase();
    if (!database) {
        console.error('Firebase not initialized');
        return false;
    }
    
    try {
        const linkRef = window.FirebaseDB.ref(database, `links/${linkId}`);
        
        window.FirebaseDB.update(linkRef, {
            url: url,
            name: name,
            updatedAt: Date.now()
        })
        .then(() => {
            console.log('Link updated successfully');
            return true;
        })
        .catch((error) => {
            console.error('Error updating link:', error);
            return false;
        });
    } catch (error) {
        console.error('Error updating link:', error);
        return false;
    }
}

// Function to deactivate a link (for admin use)
function deactivateLink(linkId) {
    const database = getFirebaseDatabase();
    if (!database) {
        console.error('Firebase not initialized');
        return false;
    }
    
    try {
        const linkRef = window.FirebaseDB.ref(database, `links/${linkId}`);
        
        window.FirebaseDB.update(linkRef, {
            active: false,
            deactivatedAt: Date.now()
        })
        .then(() => {
            console.log('Link deactivated successfully');
            return true;
        })
        .catch((error) => {
            console.error('Error deactivating link:', error);
            return false;
        });
    } catch (error) {
        console.error('Error deactivating link:', error);
        return false;
    }
}

// Export functions for global access
window.FirebaseApp = {
    setupLinksListener: setupLinksListener,
    addLink: addTelegramLink,
    updateLink: updateLink,
    deactivateLink: deactivateLink,
    useFallback: useFallbackLink
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Firebase to initialize
    setTimeout(() => {
        if (typeof window.FirebaseDB !== 'undefined') {
            setupLinksListener();
        } else {
            console.error('Firebase not initialized');
            useFallbackLink();
        }
    }, 1000);
});
