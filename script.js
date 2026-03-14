// ===================================================
// SHAH AGHA MOBILE — Main Script
// ===================================================

// Product Data — Only iPhone and Samsung with stock
const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        brand: 'apple',
        price: 1199,
        rating: 4.8,
        reviews: 245,
        badge: 'New',
        stock: 15,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'The most powerful iPhone ever. A17 Pro chip, titanium design, and the most powerful iPhone camera system.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'samsung',
        price: 1299,
        rating: 4.7,
        reviews: 189,
        badge: 'Popular',
        stock: 8,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'The ultimate Galaxy experience with AI features, S Pen, and 200MP camera.'
    },
    {
        id: 3,
        name: 'iPhone 15 Pro',
        brand: 'apple',
        price: 999,
        rating: 4.8,
        reviews: 298,
        badge: 'New',
        stock: 22,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Titanium design, A17 Pro chip, and an advanced camera system. Perfect size, incredible power.'
    },
    {
        id: 4,
        name: 'Samsung Galaxy S24+',
        brand: 'samsung',
        price: 999,
        rating: 4.6,
        reviews: 167,
        badge: 'Popular',
        stock: 12,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Large display, all-day battery, and Galaxy AI features built into a sleek design.'
    },
    {
        id: 5,
        name: 'iPhone 14 Pro Max',
        brand: 'apple',
        price: 1099,
        rating: 4.7,
        reviews: 412,
        badge: 'Classic',
        stock: 5,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Dynamic Island, 48MP camera, and the A16 Bionic chip. Still an incredible phone.'
    },
    {
        id: 6,
        name: 'Samsung Galaxy S23 Ultra',
        brand: 'samsung',
        price: 899,
        rating: 4.6,
        reviews: 278,
        badge: 'Discount',
        stock: 3,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: '200MP camera, S Pen, and powerful performance. Now at an amazing price.'
    },
    {
        id: 7,
        name: 'iPhone 15',
        brand: 'apple',
        price: 799,
        rating: 4.6,
        reviews: 320,
        badge: 'New',
        stock: 30,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Dynamic Island, 48MP camera, and A16 Bionic chip. Great value, incredible performance.'
    },
    {
        id: 8,
        name: 'Samsung Galaxy A54',
        brand: 'samsung',
        price: 449,
        rating: 4.3,
        reviews: 201,
        badge: 'Budget',
        stock: 25,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Amazing display, versatile camera, and all-day battery at an affordable price.'
    },
    {
        id: 9,
        name: 'iPhone 14',
        brand: 'apple',
        price: 699,
        rating: 4.5,
        reviews: 533,
        badge: null,
        stock: 18,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'A15 Bionic chip, great camera, and all the features you need. Reliable and powerful.'
    },
    {
        id: 10,
        name: 'Samsung Galaxy Z Fold 5',
        brand: 'samsung',
        price: 1799,
        rating: 4.7,
        reviews: 112,
        badge: 'Premium',
        stock: 2,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Foldable display, PC-like productivity, and premium design. The future is here.'
    },
    {
        id: 11,
        name: 'iPhone 13 Pro Max',
        brand: 'apple',
        price: 799,
        rating: 4.6,
        reviews: 389,
        badge: 'Popular',
        stock: 10,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'Super Retina XDR display, ProMotion technology, and incredible camera system.'
    },
    {
        id: 12,
        name: 'Samsung Galaxy S22 Ultra',
        brand: 'samsung',
        price: 699,
        rating: 4.5,
        reviews: 234,
        badge: 'Discount',
        stock: 7,
        image: 'https://ik.imagekit.io/f8dc2modt/apple.jpeg',
        description: 'S Pen, 108MP camera, and flagship performance. Great value flagship.'
    }
];

// Detect which page we're on
const isCollectionsPage = document.body.classList.contains('collections-page');
const isHomePage = !isCollectionsPage;

// ===================================================
// Scroll Reveal — Intersection Observer
// ===================================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ===================================================
// Particles (Home Page)
// ===================================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 18;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';

        const size = Math.random() * 80 + 20;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 15;

        const colors = [
            'rgba(99, 102, 241, 0.4)',
            'rgba(139, 92, 246, 0.4)',
            'rgba(236, 72, 153, 0.3)',
            'rgba(6, 182, 212, 0.3)',
            'rgba(245, 158, 11, 0.3)',
        ];

        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-duration: ${duration}s;
            animation-delay: -${delay}s;
        `;

        container.appendChild(p);
    }
}

// ===================================================
// Animated Counter (Hero Stats)
// ===================================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 1800;
                const start = performance.now();

                function update(current) {
                    const elapsed = current - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) requestAnimationFrame(update);
                    else el.textContent = target;
                }

                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===================================================
// Navbar Scroll Effect
// ===================================================
function initNavbarScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ===================================================
// Mobile Menu Toggle
// ===================================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        menuToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

// ===================================================
// Cart State & Logic (with localStorage persistence)
// ===================================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.stock <= 0) {
        showToast('Sorry, this item is out of stock!');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            showToast(`Only ${product.stock} available in stock!`);
            return;
        }
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`${product.name} added to cart!`);
    
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.3)';
        setTimeout(() => { cartBtn.style.transform = ''; }, 200);
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        const product = products.find(p => p.id === productId);
        const newQty = item.quantity + change;
        
        if (newQty > product.stock) {
            showToast(`Only ${product.stock} available in stock!`);
            return;
        }
        
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(productId);
        else updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Item removed from cart');
}

function updateCartUI() {
    updateCartCount();
    updateCartItems();
    updateCartTotal();
    saveCart();
    window.cart = cart;
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = total;
}

function updateCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align:center; padding:3rem; color:#999;">
                <i class="fas fa-shopping-cart" style="font-size:2.5rem; display:block; margin-bottom:1rem; opacity:0.3;"></i>
                <p>Your cart is empty</p>
            </div>`;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span style="font-weight:600; min-width:20px; text-align:center;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left:auto; background:#fee2e2; color:#ef4444;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCartTotal() {
    const cartTotal = document.getElementById('cartTotal');
    if (!cartTotal) return;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (!cartSidebar) return;
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (!cartSidebar) return;
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================================
// Toast Notification
// ===================================================
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle" style="color:#22c55e;"></i> ${message}`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ===================================================
// Product Detail Modal
// ===================================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('productModalContent');
    if (!modal || !modalContent) return;

    const stockStatus = product.stock > 0 
        ? `<span class="stock in-stock"><i class="fas fa-check-circle"></i> In Stock (${product.stock} available)</span>`
        : `<span class="stock out-of-stock"><i class="fas fa-times-circle"></i> Out of Stock</span>`;

    modalContent.innerHTML = `
        <button class="modal-close" onclick="closeProductModal()">
            <i class="fas fa-times"></i>
        </button>
        <div class="modal-product-grid">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="modal-product-details">
                <div class="product-brand">${product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</div>
                <h2 class="modal-product-name">${product.name}</h2>
                <div class="modal-product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span>${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="modal-product-price">$${product.price.toLocaleString()}</div>
                <div class="modal-product-stock">${stockStatus}</div>
                <p class="modal-product-desc">${product.description}</p>
                <div class="modal-product-actions">
                    <div class="quantity-selector">
                        <button onclick="updateModalQty(-1)">−</button>
                        <span id="modalQty">1</span>
                        <button onclick="updateModalQty(1)">+</button>
                    </div>
                    <button class="btn-primary" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

let modalQty = 1;
function updateModalQty(change) {
    modalQty = Math.max(1, modalQty + change);
    document.getElementById('modalQty').textContent = modalQty;
}

function addToCartFromModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    for (let i = 0; i < modalQty; i++) {
        addToCart(productId);
    }
    closeProductModal();
    openCart();
}

// ===================================================
// Collections Page — Products
// ===================================================
let filteredProducts = [...products];

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    if (!grid) return;

    if (filteredProducts.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (resultsCount) resultsCount.textContent = '0 products';
        return;
    }

    if (noResults) noResults.style.display = 'none';
    if (resultsCount) resultsCount.textContent = `${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'}`;

    grid.innerHTML = '';
    filteredProducts.forEach((product, index) => {
        const card = createProductCard(product, index);
        grid.appendChild(card);
    });
}

function createProductCard(product, index = 0) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.06}s`;
    card.onclick = (e) => {
        if (!e.target.closest('.add-to-cart')) {
            openProductModal(product.id);
        }
    };

    const stockLabel = product.stock > 0 
        ? `<span class="stock-badge ${product.stock <= 5 ? 'low-stock' : ''}">${product.stock} left</span>`
        : `<span class="stock-badge out-of-stock">Out of Stock</span>`;

    card.innerHTML = `
        <div class="product-image" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</div>
            <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
            <div class="product-price">$${product.price.toLocaleString()}</div>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            ${stockLabel}
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock <= 0 ? 'disabled' : ''}>
                <span>${product.stock > 0 ? 'Add to Cart' : 'Sold Out'}</span>
            </button>
        </div>
    `;
    return card;
}

function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '<i class="fas fa-star"></i>'.repeat(full) +
           (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
           '<i class="far fa-star"></i>'.repeat(empty);
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');

    const term  = searchInput ? searchInput.value.toLowerCase() : '';
    const brand = brandFilter ? brandFilter.value : '';
    const price = priceFilter ? priceFilter.value : '';

    filteredProducts = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term);
        const matchBrand  = !brand || p.brand === brand;
        const matchPrice  = !price || checkPrice(p.price, price);
        return matchSearch && matchBrand && matchPrice;
    });

    sortProducts();
}

function checkPrice(price, range) {
    switch (range) {
        case '0-500':    return price <= 500;
        case '500-1000': return price > 500 && price <= 1000;
        case '1000+':    return price > 1000;
        default:         return true;
    }
}

function sortProducts() {
    const sortFilter = document.getElementById('sortFilter');
    const sort = sortFilter ? sortFilter.value : 'featured';

    switch (sort) {
        case 'price-low':  filteredProducts.sort((a, b) => a.price - b.price); break;
        case 'price-high': filteredProducts.sort((a, b) => b.price - a.price); break;
        case 'name':       filteredProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'featured':
        default:           filteredProducts.sort((a, b) => b.rating - a.rating); break;
    }

    renderProducts();
}

function resetFilters() {
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter  = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');

    if (brandFilter) brandFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    if (sortFilter)  sortFilter.value  = 'featured';
    if (searchInput) searchInput.value = '';

    filteredProducts = [...products];
    sortProducts();
}

// ===================================================
// URL param — auto-filter by brand from home page links
// ===================================================
function applyUrlFilters() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    if (brand) {
        const brandFilter = document.getElementById('brandFilter');
        if (brandFilter) {
            brandFilter.value = brand;
            filterProducts();
        }
    }
}

// ===================================================
// Collections Page — Setup Event Listeners
// ===================================================
function initCollectionsPage() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    renderProducts();
    updateCartUI();
    applyUrlFilters();

    const cartBtn   = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const overlay   = document.getElementById('overlay');

    if (cartBtn)   cartBtn.addEventListener('click', openCart);
    if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeCartSidebar();
            closeProductModal();
        });
    }

    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter  = document.getElementById('sortFilter');

    if (searchInput) searchInput.addEventListener('input', filterProducts);
    if (brandFilter) brandFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
    if (sortFilter)  sortFilter.addEventListener('change', sortProducts);
}

// ===================================================
// Home Page Specific
// ===================================================
function initHomePage() {
    initParticles();
    animateCounters();
}

// ===================================================
// Newsletter Signup
// ===================================================
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            showToast('Thanks for subscribing! 🎉');
            this.reset();
        }
    });
}

// ===================================================
// Run on DOM Ready
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initNavbarScroll();
    initMobileMenu();
    initNewsletter();

    if (isCollectionsPage) {
        initCollectionsPage();
    } else {
        initHomePage();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
