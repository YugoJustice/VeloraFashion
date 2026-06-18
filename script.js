const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Parallax Effect for Hero Image ====================================================
const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
  });
}
/* ===========================================================================================
   CATEGORY FADE IN
========================== */

const categoryCards = document.querySelectorAll(".category-card");

const categoryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

categoryCards.forEach((card) => {
  card.classList.add("hidden");

  categoryObserver.observe(card);
});

/* ===============================================================================================================
   BRAND STORY COUNTERS
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const updateCounter = () => {
          const increment = target / 60;

          if (current < target) {
            current += increment;

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(updateCounter);
          } else {
            if (target === 50) {
              counter.textContent = target + "K+";
            } else if (target === 10) {
              counter.textContent = target + "+";
            } else {
              counter.textContent = target + "+";
            }
          }
        };

        updateCounter();

        counterObserver.unobserve(counter);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/* ===============================================================================================================
   TRENDING COLLECTION REVEAL
========================== */

const collectionItems = document.querySelectorAll(
  ".collection-feature, .collection-small",
);

const collectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

collectionItems.forEach((item) => {
  item.classList.add("hidden");

  collectionObserver.observe(item);
});

/* ==============================================================================================================
   LOOKBOOK REVEAL
========================== */

const lookbookItems = document.querySelectorAll(".lookbook-item");

const lookbookObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

lookbookItems.forEach((item) => {
  item.classList.add("hidden");

  lookbookObserver.observe(item);
});

/* ============================================================================================================
   FEATURE CARDS REVEAL
========================== */

const featureCards = document.querySelectorAll(".feature-card");

const featureObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

featureCards.forEach((card) => {
  card.classList.add("hidden");

  featureObserver.observe(card);
});

/* =======================================================================================================
   TESTIMONIAL REVEAL
========================== */

const testimonialCards = document.querySelectorAll(".testimonial-card");

const testimonialObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

testimonialCards.forEach((card) => {
  card.classList.add("hidden");

  testimonialObserver.observe(card);
});

/* =======================================================================================================
   NEWSLETTER FORM
========================== */

const newsletterForm = document.querySelector(".newsletter-form");

const newsletterMessage = document.querySelector(".newsletter-message");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    newsletterMessage.textContent = "Thank you for subscribing!";

    newsletterForm.reset();

    setTimeout(() => {
      newsletterMessage.textContent = "";
    }, 3000);
  });
}
/* =====================================================================================================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ==========================================================================================================
   BACK TO TOP
========================== */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =====================================================================================
   QUANTITY SELECTOR
===================================================================================== */

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const quantityValue = document.getElementById("quantityValue");

if (minusBtn && plusBtn && quantityValue) {
  let quantity = 1;

  plusBtn.addEventListener("click", () => {
    quantity++;

    quantityValue.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;

      quantityValue.textContent = quantity;
    }
  });
}

console.log("Tabs JS Loaded");

/* =====================================================================================
   PRODUCT TABS
===================================================================================== */

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

if (tabButtons.length > 0) {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab;

      tabButtons.forEach((btn) => {
        btn.classList.remove("active-tab");
      });

      tabContents.forEach((content) => {
        content.classList.remove("active-content");
      });

      button.classList.add("active-tab");

      document.getElementById(targetTab).classList.add("active-content");
    });
  });
}

/* =====================================================================================
   SEARCH OVERLAY
===================================================================================== */

const searchOverlay = document.querySelector(".search-overlay");

const closeSearch = document.querySelector(".close-search");

const searchButtons = document.querySelectorAll(
  ".fa-search, .mobile-search-btn",
);

searchButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
  });
});

if (closeSearch) {
  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
  });
}

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (typeof products !== "undefined" && searchInput && searchResults) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (!query) return;

    const matches = products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );

    if (matches.length === 0) {
      searchResults.innerHTML = "<p>No products found.</p>";

      return;
    }

    matches.slice(0, 8).forEach((product) => {
      searchResults.innerHTML += `
        <a
          href="product.html?id=${product.id}"
          class="search-result"
        >
          <img
            src="${product.images[0]}"
            alt="${product.name}"
          >

          <div>
            <h4>${product.name}</h4>
            <p>${product.price}</p>
          </div>
        </a>
      `;
    });
  });

  document.querySelectorAll(".search-tag").forEach((tag) => {
    tag.addEventListener("click", () => {
      searchInput.value = tag.textContent;

      searchInput.dispatchEvent(new Event("input"));
    });
  });
}
/* ==========================================================================================
   WISHLIST PAGE
========================================================================================== */

const wishlistContainer = document.getElementById("wishlistContainer");

const emptyWishlist = document.getElementById("emptyWishlist");

if (wishlistContainer) {
  const wishlistProducts = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlistProducts.length === 0) {
    emptyWishlist.style.display = "block";
  } else {
    wishlistProducts.forEach((product) => {
      wishlistContainer.innerHTML += `

      <div class="wishlist-card">

          <img
              src="${product.image}"
              alt="${product.name}"
          >

          <div class="wishlist-info">

              <h3>${product.name}</h3>

              <p>${product.price}</p>

              <div class="wishlist-actions">

                  <button
                      class="move-to-cart"
                      data-id="${product.id}"
                  >
                      Move To Cart
                  </button>

                  <button
                      class="remove-wishlist"
                      data-id="${product.id}"
                  >
                      Remove
                  </button>

              </div>

          </div>

      </div>

      `;
    });
  }
}

/* ==========================================================================================
   REMOVE FROM WISHLIST
========================================================================================== */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-wishlist")) {
    const productId = e.target.dataset.id;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter((item) => item.id !== productId);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

    location.reload();
  }
});

/* ==========================================================================================
   HOMEPAGE WISHLIST
========================================================================================== */

document.querySelectorAll(".wishlist").forEach((wishlistBtn) => {
  wishlistBtn.addEventListener("click", () => {
    const icon = wishlistBtn.querySelector("i");

    const product = {
      id: wishlistBtn.dataset.id,
      name: wishlistBtn.dataset.name,
      price: wishlistBtn.dataset.price,
      image: wishlistBtn.dataset.image,
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existingProduct = wishlist.find((item) => item.id === product.id);

    if (existingProduct) {
      wishlist = wishlist.filter((item) => item.id !== product.id);

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      icon.style.color = "";
    } else {
      wishlist.push(product);

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "#d90429";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();
  });
});

/* ==========================================================================================
   MOVE TO CART
========================================================================================== */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("move-to-cart")) {
    const productId = e.target.dataset.id;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = wishlist.find((item) => item.id === productId);

    if (!product) return;

    const existingCartProduct = cart.find((item) => item.id === productId);

    if (!existingCartProduct) {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    wishlist = wishlist.filter((item) => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

    window.location.href = "cart.html";
  }
});

/* ==========================================================================================
   CART PAGE
========================================================================================== */

const cartContainer = document.getElementById("cartItemsContainer");
const subtotalElement = document.getElementById("cartSubtotal");
const totalElement = document.getElementById("cartTotal");

if (cartContainer) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  renderCart();

  function renderCart() {
    cartContainer.innerHTML = "";

    let subtotal = 0;

    if (cart.length === 0) {
      document.querySelector(".cart-summary").style.display = "none";

      document.getElementById("cartHeader").style.display = "none";

      document.getElementById("emptyCart").style.display = "flex";

      return;
    }

    document.getElementById("emptyCart").style.display = "none";

    document.querySelector(".cart-summary").style.display = "block";

    document.getElementById("cartHeader").style.display = "grid";

    cart.forEach((product) => {
      const price = parseFloat(product.price.replace("$", ""));

      const itemTotal = price * product.quantity;

      subtotal += itemTotal;

      cartContainer.innerHTML += `
      <div class="cart-item">

        <div class="cart-product">
          <img src="${product.image}" alt="${product.name}">

          <div>
            <h3>${product.name}</h3>
          </div>
        </div>

        <div class="cart-price">
          ${product.price}
        </div>

        <div class="cart-quantity">

          <button
            class="qty-minus"
            data-id="${product.id}"
          >
            -
          </button>

          <span class="qty-value">
            ${product.quantity}
          </span>

          <button
            class="qty-plus"
            data-id="${product.id}"
          >
            +
          </button>

        </div>

        <div class="cart-total">
          $${itemTotal.toFixed(2)}
        </div>

        <button
          class="remove-cart-item"
          data-id="${product.id}"
        >
          <i class="fa-solid fa-trash"></i>
        </button>

      </div>
      `;
    });

    if (subtotalElement) {
      subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    if (totalElement) {
      totalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("qty-plus")) {
      const productId = e.target.dataset.id;

      cart.forEach((product) => {
        if (product.id === productId) {
          product.quantity++;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

      renderCart();
    }

    if (e.target.classList.contains("qty-minus")) {
      const productId = e.target.dataset.id;

      cart.forEach((product) => {
        if (product.id === productId && product.quantity > 1) {
          product.quantity--;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

      renderCart();
    }

    if (e.target.closest(".remove-cart-item")) {
      const productId = e.target.closest(".remove-cart-item").dataset.id;

      cart = cart.filter((product) => product.id !== productId);

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

      renderCart();
    }
  });
}

const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    localStorage.removeItem("buyNowProduct");

    window.location.href = "checkout.html";
  });
}

/* ==========================================================================================
   PRODUCT PAGE ADD TO CART
========================================================================================== */

const productCartButton = document.querySelector(".add-cart-btn");

if (productCartButton) {
  productCartButton.addEventListener("click", () => {
    const quantity = parseInt(
      document.getElementById("quantityValue").textContent,
    );

    const product = {
      id: productCartButton.dataset.id,
      name: productCartButton.dataset.name,
      price: productCartButton.dataset.price,
      image: productCartButton.dataset.image,
      quantity: quantity,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    productCartButton.textContent = "Added ✓";

    setTimeout(() => {
      productCartButton.textContent = "Add To Cart";
    }, 1500);
  });
}

/* ==========================================================================================
   CART COUNTER
========================================================================================== */

function updateCartCount() {
  const mobileCartCount = document.getElementById("mobileCartCount");

  const desktopCartCount = document.getElementById("desktopCartCount");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalItems = 0;

  cart.forEach((item) => {
    totalItems += item.quantity;
  });

  if (mobileCartCount) {
    mobileCartCount.textContent = totalItems;
  }

  if (desktopCartCount) {
    desktopCartCount.textContent = totalItems;
  }
}

updateCartCount();

/* ==========================================================================================
   WISHLIST COUNTER
========================================================================================== */

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlistCount");

  const mobileWishlistCount = document.getElementById("mobileWishlistCount");

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }

  if (mobileWishlistCount) {
    mobileWishlistCount.textContent = wishlist.length;
  }
}

updateWishlistCount();

/* ==========================================================================================
   DYNAMIC PRODUCT LOADER
========================================================================================== */

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

if (productId && typeof products !== "undefined") {
  const currentProduct = products.find((item) => item.id === productId);

  if (currentProduct) {
    /* PAGE TITLE */

    document.title = `${currentProduct.name} | Velora`;

    /* BREADCRUMB */

    const breadcrumbName = document.getElementById("breadcrumbProductName");

    if (breadcrumbName) {
      breadcrumbName.textContent = currentProduct.name;
    }

    /* CATEGORY */

    const category = document.getElementById("productCategory");

    if (category) {
      category.textContent = currentProduct.category;
    }

    /* PRODUCT NAME */

    const productName = document.getElementById("productName");

    if (productName) {
      productName.textContent = currentProduct.name;
    }

    /* PRICE */

    const productPrice = document.getElementById("productPrice");

    if (productPrice) {
      productPrice.textContent = currentProduct.price;
    }

    /* REVIEW COUNT */

    const reviewCount = document.getElementById("productReviewCount");

    if (reviewCount) {
      reviewCount.textContent = `(${currentProduct.reviewsCount} Reviews)`;
    }

    /* SHORT DESCRIPTION */

    const shortDescription = document.getElementById("productDescription");

    if (shortDescription) {
      shortDescription.textContent = currentProduct.description;
    }

    /* COLOR SELECTOR */

    const colorOptions = document.getElementById("colorOptions");

    if (colorOptions && currentProduct.colors) {
      colorOptions.innerHTML = currentProduct.colors
        .map(
          (color, index) => `
        <span
          class="color ${color} ${index === 0 ? "active" : ""}">
        </span>
      `,
        )
        .join("");

      const colors = document.querySelectorAll(".color");

      colors.forEach((color) => {
        color.addEventListener("click", () => {
          colors.forEach((c) => c.classList.remove("active"));

          color.classList.add("active");
        });
      });
    }

    /* MAIN IMAGE */

    const mainImage = document.getElementById("mainProductImage");

    if (mainImage) {
      mainImage.src = currentProduct.images[0];

      mainImage.alt = currentProduct.name;
    }

    /* DESCRIPTION TAB */

    const descriptionContent = document.getElementById("descriptionContent");

    if (descriptionContent) {
      descriptionContent.innerHTML = currentProduct.fullDescription;
    }

    /* SHIPPING TAB */

    const shippingContent = document.getElementById("shippingContent");

    if (shippingContent) {
      shippingContent.innerHTML = currentProduct.shipping;
    }

    /* REVIEWS TAB */

    const reviewsContent = document.getElementById("reviewsContent");

    if (reviewsContent) {
      reviewsContent.innerHTML = "";

      currentProduct.reviews.forEach((review) => {
        reviewsContent.innerHTML += `

          <div class="review-card">

            <h4>${review.name}</h4>

            <span>${review.rating}</span>

            <p>${review.text}</p>

          </div>

          `;
      });
    }

    /* PRODUCT BUTTONS /////////////////////////////////////////////////*/

    const addCartBtn = document.getElementById("productAddToCart");

    const buyNowBtn = document.getElementById("buyNowBtn");

    if (addCartBtn) {
      addCartBtn.dataset.id = currentProduct.id;

      addCartBtn.dataset.name = currentProduct.name;

      addCartBtn.dataset.price = currentProduct.price;

      addCartBtn.dataset.image = currentProduct.images[0];
    }

    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", () => {
        const checkoutItem = {
          id: currentProduct.id,
          name: currentProduct.name,
          price: currentProduct.price,
          image: currentProduct.images[0],
          quantity: Number(
            document.getElementById("quantityValue").textContent,
          ),
        };

        localStorage.setItem("buyNowProduct", JSON.stringify(checkoutItem));

        window.location.href = "checkout.html?mode=buyNow";
      });
    }

    /* =====================================================================================
       PRODUCT IMAGE SLIDER
    ===================================================================================== */

    let currentImageIndex = 0;

    const nextBtn = document.querySelector(".next-btn");

    const prevBtn = document.querySelector(".prev-btn");

    function updateSliderImage() {
      if (!mainImage) return;

      mainImage.style.opacity = "0";

      setTimeout(() => {
        mainImage.src = currentProduct.images[currentImageIndex];

        mainImage.style.opacity = "1";
      }, 150);
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentImageIndex++;

        if (currentImageIndex >= currentProduct.images.length) {
          currentImageIndex = 0;
        }

        updateSliderImage();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentImageIndex--;

        if (currentImageIndex < 0) {
          currentImageIndex = currentProduct.images.length - 1;
        }

        updateSliderImage();
      });
    }
  }

  /* ==========================================================================================
   RELATED PRODUCTS
========================================================================================== */

  const relatedContainer = document.getElementById("relatedProductsContainer");

  if (relatedContainer) {
    const relatedProducts = products
      .filter((item) => item.id !== currentProduct.id)
      .sort(() => Math.random() - 0.5);

    relatedContainer.innerHTML = "";

    relatedProducts.slice(0, 4).forEach((product) => {
      relatedContainer.innerHTML += `

      <div class="related-card">

        <a href="product.html?id=${product.id}">

          <div class="related-image">

            <img
              src="${product.images[0]}"
              alt="${product.name}"
            >

          </div>

          <div class="related-info">

            <h3>${product.name}</h3>

            <p>${product.price}</p>

          </div>

        </a>

      </div>

      `;
    });
  }
}

/* ==========================================================================================
   AUTO FILL CHECKOUT
========================================================================================== */

const savedUser = JSON.parse(localStorage.getItem("veloraUser"));

const loggedIn = localStorage.getItem("veloraLoggedIn");

if (savedUser && loggedIn === "true") {
  const firstNameInput = document.getElementById("firstName");

  const lastNameInput = document.getElementById("lastName");

  const emailInput = document.getElementById("email");

  if (firstNameInput) {
    const nameParts = savedUser.name.split(" ");

    firstNameInput.value = nameParts[0] || "";
  }

  if (lastNameInput) {
    const nameParts = savedUser.name.split(" ");

    lastNameInput.value = nameParts.slice(1).join(" ");
  }

  if (emailInput) {
    emailInput.value = savedUser.email;
  }
}

/* ==========================================================================================
   CHECKOUT PAGE
========================================================================================== */

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");
const placeOrderBtn = document.getElementById("placeOrderBtn");

const buyNowProduct = JSON.parse(localStorage.getItem("buyNowProduct"));

let checkoutCart = JSON.parse(localStorage.getItem("cart")) || [];

if (buyNowProduct) {
  checkoutCart = [buyNowProduct];
}

if (checkoutItems) {
  if (loggedIn !== "true") {
    alert("Please sign in before checking out.");

    window.location.href = "account.html";
  }

  let total = 0;

  checkoutItems.innerHTML = "";

  checkoutCart.forEach((product) => {
    const price = parseFloat(product.price.replace("$", ""));

    const itemTotal = price * product.quantity;

    total += itemTotal;

    checkoutItems.innerHTML += `
      <div class="summary-item">
        <span>
          ${product.name} × ${product.quantity}
        </span>

        <span>
          $${itemTotal.toFixed(2)}
        </span>
      </div>
    `;
  });

  checkoutItems.innerHTML += `
    <div class="summary-item">
      <span>Shipping</span>
      <span>Free</span>
    </div>
  `;

  checkoutTotal.textContent = `$${total.toFixed(2)}`;
}

if (placeOrderBtn) {
  placeOrderBtn.addEventListener("click", () => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const postalCode = document.getElementById("postalCode");

    if (
      !firstName.value.trim() ||
      !lastName.value.trim() ||
      !email.value.trim() ||
      !phone.value.trim() ||
      !address.value.trim() ||
      !city.value.trim() ||
      !postalCode.value.trim()
    ) {
      alert("Please complete all billing details.");

      return;
    }

    const paymentMethod = document.querySelector(
      'input[name="payment"]:checked',
    ).value;

    const order = {
      orderNumber: "VLR-" + Math.floor(100000 + Math.random() * 900000),

      total: checkoutTotal.textContent,

      paymentMethod,

      date: new Date().toLocaleDateString(),

      items: checkoutCart,
    };

    let orders = JSON.parse(localStorage.getItem("veloraOrders")) || [];

    orders.push(order);

    localStorage.setItem("veloraOrders", JSON.stringify(orders));

    localStorage.setItem("lastOrder", JSON.stringify(order));

    if (buyNowProduct) {
      localStorage.removeItem("buyNowProduct");
    } else {
      localStorage.removeItem("cart");
    }

    updateCartCount();

    window.location.href = "success.html";
  });
}

/* ==========================================================================================
   SUCCESS PAGE
========================================================================================== */

const successOrderNumber = document.getElementById("successOrderNumber");

const successOrderDate = document.getElementById("successOrderDate");

const successOrderTotal = document.getElementById("successOrderTotal");

const successPaymentMethod = document.getElementById("successPaymentMethod");

if (successOrderNumber) {
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (order) {
    successOrderNumber.textContent = order.orderNumber;

    successOrderDate.textContent = order.date;

    successOrderTotal.textContent = order.total;

    successPaymentMethod.textContent = order.paymentMethod;
  }
}

/* ==========================================================================================
   ACCOUNT PAGE
========================================================================================== */

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

/* REGISTER */

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();

    const email = document.getElementById("registerEmail").value.trim();

    const password = document.getElementById("registerPassword").value.trim();

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("veloraUser"));

    // CHECK IF EMAIL ALREADY EXISTS

    if (
      existingUser &&
      existingUser.email.toLowerCase() === email.toLowerCase()
    ) {
      alert("An account with this email already exists.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("veloraUser", JSON.stringify(user));

    // AUTO LOGIN

    localStorage.setItem("veloraLoggedIn", "true");

    alert(`Welcome, ${name}!`);

    window.location.reload();
  });
}

/* LOGIN */

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    if (!savedUser) {
      alert("No account found.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("veloraLoggedIn", "true");

      alert(`Welcome back, ${savedUser.name}!`);

      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}

/* ==========================================================================================
   USER SESSION
========================================================================================== */

const accountGreeting = document.getElementById("accountGreeting");

if (accountGreeting && savedUser && loggedIn === "true") {
  accountGreeting.textContent = `Hello, ${savedUser.name}`;
}

// Update account link in navbar
const desktopAccountLink = document.getElementById("desktopAccountLink");
const mobileAccountLink = document.getElementById("mobileAccountLink");

if (savedUser && loggedIn === "true") {
  const firstName = savedUser.name.split(" ")[0];

  if (desktopAccountLink) {
    desktopAccountLink.innerHTML = `
      <span class="user-name">${firstName}</span>
    `;
  }

  if (mobileAccountLink) {
    mobileAccountLink.innerHTML = `
      <span class="user-name">${firstName}</span>
    `;
  }
}

/* ==========================================================================================
   ACCOUNT DASHBOARD
========================================================================================== */

const guestAccountSection = document.getElementById("guestAccountSection");

const accountDashboard = document.getElementById("accountDashboard");

const dashboardWelcome = document.getElementById("dashboardWelcome");

const dashboardEmail = document.getElementById("dashboardEmail");

const ordersContainer = document.getElementById("ordersContainer");

const profileForm = document.getElementById("profileForm");

const profileName = document.getElementById("profileName");

const profileEmail = document.getElementById("profileEmail");

const currentUser = JSON.parse(localStorage.getItem("veloraUser"));

const isLoggedIn = localStorage.getItem("veloraLoggedIn");

if (currentUser && isLoggedIn === "true") {
  if (guestAccountSection) {
    guestAccountSection.style.display = "none";
  }

  if (accountDashboard) {
    accountDashboard.style.display = "grid";
  }

  if (dashboardWelcome) {
    dashboardWelcome.textContent = `Welcome, ${currentUser.name}`;
  }

  if (dashboardEmail) {
    dashboardEmail.textContent = currentUser.email;
  }

  if (profileName) {
    profileName.value = currentUser.name;
  }

  if (profileEmail) {
    profileEmail.value = currentUser.email;
  }
}

const savedOrders = JSON.parse(localStorage.getItem("veloraOrders")) || [];

const ordersCount = document.getElementById("ordersCount");

const wishlistCountDashboard = document.getElementById(
  "wishlistCountDashboard",
);

const cartCountDashboard = document.getElementById("cartCountDashboard");

if (ordersCount) {
  ordersCount.textContent = savedOrders.length;
}

const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

if (wishlistCountDashboard) {
  wishlistCountDashboard.textContent = wishlist.length;
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cartCountDashboard) {
  cartCountDashboard.textContent = cart.length;
}

if (ordersContainer) {
  if (savedOrders.length === 0) {
    ordersContainer.innerHTML = "<p>No orders yet.</p>";
  } else {
    ordersContainer.innerHTML = "";

    savedOrders
      .slice()
      .reverse()
      .forEach((order) => {
        ordersContainer.innerHTML += `

<div class="order-card">

  <div class="order-header">

    <div class="order-info">
      <h4>${order.orderNumber}</h4>

      <p>${order.date}</p>

      <p>${order.paymentMethod}</p>
    </div>

    <div class="order-total">
      ${order.total}
    </div>

  </div>

  <div class="order-details-expand">

    ${order.items
      .map(
        (item) => `
      <div class="order-product">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div>

          <h5>${item.name}</h5>

          <p>Quantity: ${item.quantity}</p>

        </div>

      </div>
    `,
      )
      .join("")}

  </div>

</div>

`;
      });
  }
}

if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedUser = {
      ...currentUser,
      name: profileName.value.trim(),
      email: profileEmail.value.trim(),
    };

    localStorage.setItem("veloraUser", JSON.stringify(updatedUser));

    alert("Profile updated successfully!");

    window.location.reload();
  });
}

const orderCards = document.querySelectorAll(".order-card");

orderCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

// Clear Order History Functionality /////////////////////////////////////////////////////////////////////////
const clearOrdersBtn = document.getElementById("clearOrdersBtn");

const clearHistoryModal = document.getElementById("clearHistoryModal");

const cancelClearHistory = document.getElementById("cancelClearHistory");

const confirmClearHistory = document.getElementById("confirmClearHistory");

if (clearOrdersBtn && clearHistoryModal) {
  clearOrdersBtn.addEventListener("click", () => {
    clearHistoryModal.classList.add("show");
  });
}

if (cancelClearHistory && clearHistoryModal) {
  cancelClearHistory.addEventListener("click", () => {
    clearHistoryModal.classList.remove("show");
  });
}

if (confirmClearHistory) {
  confirmClearHistory.addEventListener("click", () => {
    localStorage.removeItem("veloraOrders");

    window.location.reload();
  });
}

clearHistoryModal?.addEventListener("click", (e) => {
  if (e.target === clearHistoryModal) {
    clearHistoryModal.classList.remove("show");
  }
});

// logout functionality ////////////////////////////////////////////////////////////////////////////////////
const logoutBtn = document.getElementById("logoutBtn");
const logoutModal = document.getElementById("logoutModal");
const cancelLogout = document.getElementById("cancelLogout");
const confirmLogout = document.getElementById("confirmLogout");

if (logoutBtn && logoutModal) {
  logoutBtn.addEventListener("click", () => {
    logoutModal.classList.add("show");
  });
}

if (cancelLogout && logoutModal) {
  cancelLogout.addEventListener("click", () => {
    logoutModal.classList.remove("show");
  });
}

if (confirmLogout) {
  confirmLogout.addEventListener("click", () => {
    localStorage.removeItem("veloraLoggedIn");
    window.location.reload();
  });
}

/* ==========================================================================================
   CONTACT FORM
========================================================================================== */

const contactForm = document.getElementById("contactForm");

const contactModal = document.getElementById("contactModal");

const closeContactModal = document.getElementById("closeContactModal");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value;

    const email = document.getElementById("contactEmail").value;

    const subject = document.getElementById("contactSubject").value;

    const message = document.getElementById("contactMessage").value;

    if (!name || !email || !subject || !message) {
      alert("Please complete all fields.");

      return;
    }

    contactModal.classList.add("show");

    contactForm.reset();
  });
}

if (closeContactModal) {
  closeContactModal.addEventListener("click", () => {
    contactModal.classList.remove("show");
  });
}

/* ==========================================================================================
   SHOP PRODUCTS GENERATOR
========================================================================================== */

const shopContainer = document.getElementById("shopProductsContainer");

let currentPage = Number(localStorage.getItem("shopCurrentPage")) || 1;

const productsPerPage = 8;

let displayedProducts = [...products];

const savedCategory = localStorage.getItem("shopCategory");

const resultsCounter = document.getElementById("resultsCounter");

function renderProducts(page) {
  shopContainer.innerHTML = "";

  const start = (page - 1) * productsPerPage;

  const end = start + productsPerPage;

  const currentProducts = displayedProducts.slice(start, end);

  currentProducts.forEach((product) => {
    shopContainer.innerHTML += `
      <div class="product-card reveal">
        <div class="product-images">
          <img
            src="${product.images[0]}"
            alt="${product.name}"
            loading="lazy"
          />

          <div
            class="wishlist"
            data-id="${product.id}"
            data-name="${product.name}"
            data-price="${product.price}"
            data-image="${product.images[0]}"
          >
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>

        <div class="product-info">
          <h3>${product.name}</h3>

          <p>${product.price}</p>

          <button
            class="shop-add-cart-btn"
            data-id="${product.id}"
            data-name="${product.name}"
            data-price="${product.price}"
            data-image="${product.images[0]}"
          >
            Add To Cart
          </button>

          <a
            href="product.html?id=${product.id}"
            class="view-product-btn"
          >
            View Product
          </a>
        </div>
      </div>
    `;
  });

  const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  document.querySelectorAll(".wishlist").forEach((wishlist) => {
    const productId = wishlist.dataset.id;

    const icon = wishlist.querySelector("i");

    const exists = savedWishlist.find((item) => item.id === productId);

    if (exists) {
      icon.classList.remove("fa-regular");

      icon.classList.add("fa-solid");

      icon.style.color = "#d90429";
    }
  });

  // RESULT COUNTER /////////
  if (resultsCounter) {
    const startProduct = start + 1;

    const endProduct = Math.min(end, products.length);

    resultsCounter.innerHTML = `
    Showing <strong>${startProduct}-${endProduct}</strong>
    of <strong>${displayedProducts.length}</strong> products
  `;
  }
}

if (savedCategory && savedCategory !== "All") {
  displayedProducts = products.filter(
    (product) => product.category === savedCategory,
  );
}

if (shopContainer && typeof products !== "undefined") {
  renderProducts(currentPage);

  createPagination();

  updateActivePage();
}

const prevBtn = document.getElementById("prevPageBtn");
const nextBtn = document.getElementById("nextPageBtn");

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;

      localStorage.setItem("shopCurrentPage", currentPage);

      renderProducts(currentPage);

      createPagination();

      updateActivePage();

      document.querySelector(".shop-products").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(displayedProducts.length / productsPerPage);

    if (currentPage < totalPages) {
      currentPage++;

      localStorage.setItem("shopCurrentPage", currentPage);

      renderProducts(currentPage);

      createPagination();

      updateActivePage();

      document.querySelector(".shop-products").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

function updateActivePage() {
  document.querySelectorAll(".pagination .page-btn").forEach((btn) => {
    btn.classList.remove("active");

    if (Number(btn.textContent) === currentPage) {
      btn.classList.add("active");
    }
  });
}

// SORTING ///////////////////////////////////////////////////////////////////////////

const sortProducts = document.getElementById("sortProducts");

function applySorting(sortValue) {
  let baseProducts;

  const savedCategory = localStorage.getItem("shopCategory");

  if (savedCategory && savedCategory !== "All") {
    baseProducts = products.filter(
      (product) => product.category === savedCategory,
    );
  } else {
    baseProducts = [...products];
  }

  if (sortValue === "newest") {
    displayedProducts = [...baseProducts];
  }

  if (sortValue === "low-high") {
    displayedProducts = [...baseProducts].sort((a, b) => {
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    });
  }

  if (sortValue === "high-low") {
    displayedProducts = [...baseProducts].sort((a, b) => {
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    });
  }
}

// LOAD SAVED SORT
const savedSort = localStorage.getItem("shopSort") || "newest";

applySorting(savedSort);

if (sortProducts) {
  sortProducts.value = savedSort;

  sortProducts.addEventListener("change", () => {
    const value = sortProducts.value;

    localStorage.setItem("shopSort", value);

    applySorting(value);

    renderProducts(currentPage);

    updateActivePage();
  });
}

// CATEGORY HELPER ////////////////////////////////////////
function createPagination() {
  const paginationContainer = document.getElementById("paginationContainer");

  if (!paginationContainer) return;

  paginationContainer.innerHTML = `
    <button class="page-btn" id="prevPageBtn">
      <i class="fa-solid fa-chevron-left"></i>
    </button>

    <button class="page-btn" id="nextPageBtn">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);

  const nextBtn = document.getElementById("nextPageBtn");

  const startPage = Math.max(1, currentPage - 1);

  const endPage = Math.min(totalPages, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");

    pageBtn.classList.add("page-btn");

    if (i === currentPage) {
      pageBtn.classList.add("active");
    }

    pageBtn.textContent = i;

    pageBtn.addEventListener("click", () => {
      currentPage = i;

      localStorage.setItem("shopCurrentPage", currentPage);

      renderProducts(currentPage);

      createPagination();

      updateActivePage();

      document.querySelector(".shop-products").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    paginationContainer.insertBefore(pageBtn, nextBtn);
  }
}

/* ==========================================================================================
   CATEGORY FILTER
========================================================================================== */

const categoryLinks = document.querySelectorAll(".category-list a");

if (savedCategory) {
  categoryLinks.forEach((link) => {
    if (link.dataset.category === savedCategory) {
      link.classList.add("active");
    }
  });
}

console.log("Category links found:", categoryLinks.length);

if (categoryLinks.length > 0) {
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const category = link.dataset.category;

      console.log("Category clicked:", category);

      localStorage.setItem("shopCategory", category);

      applySorting(localStorage.getItem("shopSort") || "newest");

      categoryLinks.forEach((item) => item.classList.remove("active"));

      link.classList.add("active");

      currentPage = 1;

      localStorage.setItem("shopCurrentPage", 1);

      renderProducts(currentPage);

      createPagination();

      updateActivePage();

      document.querySelector(".shop-products").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

// ADD TO CART & WISHLIST /////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", (e) => {
  const cartBtn = e.target.closest(".shop-add-cart-btn");

  if (cartBtn) {
    const product = {
      id: cartBtn.dataset.id,
      name: cartBtn.dataset.name,
      price: cartBtn.dataset.price,
      image: cartBtn.dataset.image,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    cartBtn.textContent = "Added ✓";

    setTimeout(() => {
      cartBtn.textContent = "Add To Cart";
    }, 1500);
  }

  const wishlistBtn = e.target.closest(".wishlist");

  if (wishlistBtn) {
    const icon = wishlistBtn.querySelector("i");

    const product = {
      id: wishlistBtn.dataset.id,
      name: wishlistBtn.dataset.name,
      price: wishlistBtn.dataset.price,
      image: wishlistBtn.dataset.image,
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existingProduct = wishlist.find((item) => item.id === product.id);

    if (existingProduct) {
      wishlist = wishlist.filter((item) => item.id !== product.id);

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      icon.style.color = "";
    } else {
      wishlist.push(product);

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "#d90429";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();
  }
});

// RESET PAGE ////////////////////////////////////////////////////////////////////

function resetShopPage() {
  localStorage.removeItem("shopCurrentPage");
}

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");

    if (href && !href.includes("shop.html") && !href.includes("product.html")) {
      localStorage.removeItem("shopCurrentPage");
    }
  });
});
