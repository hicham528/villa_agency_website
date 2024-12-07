// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  let navbare = document.querySelector(".navbare");
  const scrollY = window.scrollY;
  navbare.classList.toggle("new_navbare", scrollY > 0);
});

// Home Section Carousel
let prev_btn = document.querySelector(".prev_btn");
let next_btn = document.querySelector(".next_btn");
let City = document.querySelector(".City");
let country = document.querySelector(".contry");
let description = document.querySelector(".discription");
let home_section = document.querySelector(".home_section");
let value = 0;

const banners = [
  {
    backgroundImage: "url('images/banner-01.jpg')",
    location: "Toronto,",
    country: "Canada",
    description: "Experience luxury in the heart of Toronto!",
  },
  {
    backgroundImage: "url('images/banner-02.jpg')",
    location: "Melbourne,",
    country: "Australia",
    description: "Be quick! Get the best villa in town.",
  },
  {
    backgroundImage: "url('images/banner-03.jpg')",
    location: "Miami,",
    country: "South Florida",
    description: "Act now! Get the highest-level penthouse.",
  },
];

const updateHomePage = () => {
  const banner = banners[value];
  home_section.style.backgroundImage = banner.backgroundImage;
  City.textContent = banner.location;
  country.textContent = banner.country;
  description.textContent = banner.description;
};

next_btn.onclick = () => {
  value = (value + 1) % banners.length;
  updateHomePage();
};

prev_btn.onclick = () => {
  value = (value - 1 + banners.length) % banners.length;
  updateHomePage();
};

updateHomePage();

let open_nav = document.getElementById("open_nav");
let the_navbare = document.querySelector(".the_navbare");
open_nav.onclick = () => {
  the_navbare.classList.toggle("naw_navbare");
  open_nav.classList.toggle("fa-xmark");
  open_nav.classList.toggle("fa-bars");
};

let only_details = document.querySelectorAll(".only_details");

const active_para = () => {
  only_details.forEach((item) => {
    item.addEventListener("click", () => {
      only_details.forEach((el) => {
        el.classList.remove("new_teatle");
        el.querySelectorAll("p").forEach((p) => {
          p.style.display = "none";
        });
      });
      item.classList.add("new_teatle");
      let acti = item.querySelector("p");
      if (acti) {
        acti.style.display = "block";
      }
    });
  });
};

active_para();

let btn_category = document.querySelectorAll(".btn_category");
let image_details_house = document.querySelector(".image_details_house");
let payment = document.querySelector(".payment");
let parking = document.querySelector(".parking");
let rooms = document.querySelector(".rooms");
let floor = document.querySelector(".floor");
let space = document.querySelector(".space");
let introduction_text = document.querySelector(".introduction_text");
let body_text = document.querySelector(".body_text");
const select_category = () => {
  btn_category.forEach((item) => {
    item.onclick = () => {
      btn_category.forEach((item) => {
        btn_category.forEach((item) =>
          item.classList.remove("new_category_btn")
        );
        item.classList.add("new_category_btn");
      });
      item.classList.add("new_category_btn");
      console.log(item.textContent);
      if (item.textContent == "appartment") {
        image_details_house.src = "images/deal-01.jpg";
        space.textContent = "185 m2";
        floor.textContent = "26th";
        rooms.textContent = "4";
        parking.textContent = "yes";
        payment.textContent = "Bank";
        introduction_text.textContent = ` An apartment is a self-contained unit in a multi-story building, ideal for urban living. Types range from studios and lofts to penthouses and serviced units, catering to diverse needs. Apartments offer affordability, low maintenance, shared amenities, and convenience, often located near workplaces and services.`;
        body_text.textContent = `However, they may have limited space, privacy, and restrictions on renovations or pets. Modern trends include smart apartments, eco-friendly designs, and co-living spaces. Suitable for young professionals, families, or retirees, apartments balance cost-effectiveness and access to urban amenities, making them popular for both living and investment.`;
      }
      if (item.textContent == "villa house") {
        image_details_house.src = "images/deal-03.jpg";
        space.textContent = "250 m2";
        floor.textContent = "26th";
        rooms.textContent = "5";
        parking.textContent = "yes";
        payment.textContent = "Bank";
        introduction_text.textContent = `A villa is a detached, spacious home offering luxury, privacy, and outdoor areas like gardens or pools. Originating in ancient Rome, villas have evolved into modern, eco-friendly designs or traditional styles.`;
        body_text.textContent = `They come in types like luxury, beach, farm, or gated community villas. Villas provide natural light, freedom to customize, and prestige but require higher costs and maintenance. Ideal for families, professionals, or investors, they suit those seeking space, independence, and long-term value. Popular for vacation rentals or second homes, villas are often located in suburban, coastal, or scenic areas.`;
      }
      if (item.textContent == "penthouse") {
        image_details_house.src = "images/deal-02.jpg";
        space.textContent = "320 m2";
        floor.textContent = "34th";
        rooms.textContent = "6";
        parking.textContent = "yes";
        payment.textContent = "Bank";
        introduction_text.textContent = `A penthouse is a luxury apartment on the top floor of a building, offering exclusivity, panoramic views, and high-end amenities like private terraces, pools, and smart home systems. Known for spacious layouts, privacy, and status, penthouses are ideal for affluent individuals or families.`;
        body_text.textContent = ` They often include premium finishes, dedicated elevators, and abundant natural light. While highly prestigious and a great investment, they come with high costs and maintenance. Popular in metropolitan and coastal cities, penthouses reflect modern trends like eco-friendly designs, smart technology, and personalized interiors.`;
      }
    };
  });
};
select_category();

let name_input = document.getElementById("name_input");
let email_input = document.getElementById("email_input");
let Subject_input = document.getElementById("Subject_input");
let message_input = document.getElementById("message_input");
let errors_name = document.querySelector(".errors_name");
let email_error = document.querySelector(".email_error");
let Subject_error = document.querySelector(".Subject_error");
let message_error = document.querySelector(".message_error");
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let send_btn = document.querySelector(".send_btn");

const activeFormContact = () => {
  send_btn.onclick = () => {
    if (nameRegex.value == "" || !nameRegex.test(name_input.value)) {
      errors_name.textContent = "please enter a valid name!!!";
      name_input.style.borderColor = "red";
    } else {
      errors_name.textContent = "";
      name_input.style.borderColor = "#333";
    }
    if (email_input.value == "" || !emailRegex.test(email_input.value)) {
      email_error.textContent = "please enter a valide email";
      email_input.style.borderColor = "red";
    } else {
      email_error.textContent = "";
      email_input.style.borderColor = " #333";
    }
    if (Subject_input.value == "" || !nameRegex.test(Subject_input.value)) {
      Subject_error.textContent = "enter a valide subject";
      Subject_input.style.borderColor = "red";
    } else {
      Subject_error.textContent = "";
      Subject_input.style.borderColor = "";
    }
    if (message_input.value.length < 10) {
      message_error.textContent = " your message is small";
      message_input.style.borderColor = "red";
    } else if (message_input.value.length > 500) {
      message_error.textContent = " your message is long";
      message_input.style.borderColor = "red";
    } else {
      message_error.textContent = "";
      message_input.style.borderColor = "";
    }
    if (
      name_input.value &&
      email_input.value &&
      Subject_input.value &&
      message_input.value
    ) {
      name_input.value = "";
      email_input.value = "";
      Subject_input.value = "";
      message_input.value = "";

      window.scrollTo(0, 0);
    }
  };
};
activeFormContact();

let header_form = document.querySelectorAll(".header h2");
let sign_in_form = document.querySelector(".sign_in_form");
let sign_up_form = document.querySelector(".sign_up_form");
let forget_passworde_btn = document.querySelector(".forget_passworde_btn");
let forget_passworde_forme = document.querySelector(".forget_passworde_forme");
const active_inscription_form = () => {
  header_form.forEach((item) => {
    item.onclick = () => {
      header_form.forEach((item) => item.classList.remove("header_active"));
      item.classList.add("header_active");
      if (item.textContent == "sign in") {
        sign_in_form.style.display = "flex";
        sign_up_form.style.display = "none";
        forget_passworde_forme.style.display = "none";
      }
      if (item.textContent == "sign up") {
        sign_in_form.style.display = "none";
        sign_up_form.style.display = "flex";
        forget_passworde_forme.style.display = "none";
      }
    };
  });
  forget_passworde_btn.onclick = () => {
    sign_in_form.style.display = "none";
    sign_up_form.style.display = "none";
    forget_passworde_forme.style.display = "flex";
  };
};

active_inscription_form();

let inscription = document.querySelector(".inscription");
let close_inscription_form = document.getElementById("close_inscription_form");
let inscription_from = document.querySelector(".inscription_from");
inscription.onclick = () => {
  inscription_from.style.display = "flex";
};
close_inscription_form.onclick = () => {
  inscription_from.style.display = "none";
};

//inscription check validate

// Regular expression patterns
let namePattern = /^[a-zA-Z\s]+$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Input fields and error message elements
let email_input_inscription = document.getElementById(
  "email_input_inscription"
);
let email_error_inscription = document.querySelector(
  ".email_error_inscription"
);
let passworde_input_inscription = document.getElementById(
  "passworde_input_inscription"
);
let passworde_error_inscription = document.querySelector(
  ".passworde_error_inscription"
);
let sign_in_btn = document.querySelector(".sign_in_btn");

// Sign-in button click event
sign_in_btn.onclick = () => {
  let valid = true;

  // Email validation
  if (
    email_input_inscription.value === "" ||
    !emailPattern.test(email_input_inscription.value)
  ) {
    email_error_inscription.textContent = "Please enter a valid email address.";
    email_error_inscription.style.color = "red";
    valid = false;
  } else {
    email_error_inscription.textContent = "";
    email_error_inscription.style.color = "#fff";
  }

  // Password validation
  if (
    passworde_input_inscription.value === "" ||
    !passwordPattern.test(passworde_input_inscription.value)
  ) {
    passworde_error_inscription.textContent =
      "Please enter a correct password.";
    passworde_error_inscription.style.color = "red";
    valid = false;
  } else {
    passworde_error_inscription.textContent = "";
    passworde_error_inscription.style.color = "#fff";
  }

  // Reset fields if the form is valid
  if (valid) {
    email_input_inscription.value = "";
    passworde_input_inscription.value = "";
    alert("Form submitted successfully!");
    inscription_from.style.display = "none";
    inscription.style.display = "none";
  }
};

let usernameInput = document.getElementById("username_input");
let emailInput = document.getElementById("email_input_sign_up");
let emailError = document.querySelector(".email_error_sign_up");
let passwordInput = document.getElementById("passworde_input_sign_up");
let passwordError = document.querySelector(".passworde_error_sign_up");
let confirmPasswordInput = document.getElementById(
  "confimre_passworde_sign_up"
);
let signUpButton = document.querySelector(".sign_up_form button");

signUpButton.onclick = (e) => {
  e.preventDefault();
  let isValid = true;

  if (!namePattern.test(usernameInput.value)) {
    alert("Please enter a valid username.");
    isValid = false;
  }

  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must have uppercase, lowercase, number, and special character.";
    isValid = false;
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    alert("Passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    inscription_from.style.display = "none";
    inscription.style.display = "none";
    alert("Sign-Up Successful!");
    confirmPasswordInput.value="";
    passwordInput.value="";
    emailInput.value="";
    usernameInput.value="";
  }
};




