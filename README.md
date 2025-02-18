# angular_restaurant
The Restaurant Booking App is a web application built with Angular for the front end and a robust backend to handle reservations efficiently. 

# Schritt 1
# Starte ein Repository auf GitHub
# Angular-App direkt im geklonten Repository erzeugen
ng new .ng 
ng new angular_restaurant --directory .
# Testen ob die App funktioniert
ng serve

# Schritt 2
Core Features

Table Booking System – Users can pick a date, time, and number of guests.
Live Availability Check – Prevents overbooking.
User Authentication – Users can log in, register, and manage their bookings.
Admin Dashboard – Restaurant owners can see and manage all reservations.
Responsive Design – Works well on both mobile and desktop.

File Structure

angular_restaurant/
│── src/
│   ├── app/
│   │   ├── components/        # Reusable UI Components (Navbar, Footer, etc.)
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   ├── table-card/     # (Reusable component for displaying tables)
│   │   │   │   ├── table-card.component.ts
│   │   │   │   ├── table-card.component.html
│   │   │   │   ├── table-card.component.scss
│   │   ├── pages/              # Main Page Views
│   │   │   ├── home/           # Home Page
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   ├── booking/        # Booking System
│   │   │   │   ├── booking.component.ts
│   │   │   │   ├── booking.component.html
│   │   │   │   ├── booking.component.scss
│   │   │   ├── admin-dashboard/ # Admin Panel for Owners
│   │   │   │   ├── admin-dashboard.component.ts
│   │   │   │   ├── admin-dashboard.component.html
│   │   │   │   ├── admin-dashboard.component.scss
│   │   │   ├── login/          # User Login
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   ├── register/       # User Registration
│   │   │   │   ├── register.component.ts
│   │   │   │   ├── register.component.html
│   │   │   │   ├── register.component.scss
│   │   ├── services/           # API Services for Data Handling
│   │   │   ├── booking.service.ts      # Handles Bookings API
│   │   │   ├── auth.service.ts         # Handles User Authentication
│   │   │   ├── availability.service.ts # Checks Table Availability
│   │   ├── models/             # Interfaces for Data Structure
│   │   │   ├── booking.model.ts
│   │   │   ├── user.model.ts
│   │   ├── guards/              # Route Protection
│   │   │   ├── auth.guard.ts     # Protects routes from unauthorized users
│   │   ├── app-routing.module.ts # Main Routing Configuration
│   │   ├── app.component.ts      # Root Component
│   │   ├── app.component.html    # Root Template
│   │   ├── app.component.scss    # Root Styles
│   ├── assets/                   # Static assets (images, icons, styles)
│   │   ├── images/
│   │   ├── styles/
│   ├── environments/             # API Configurations
│   │   ├── environment.ts        # Development Environment
│   │   ├── environment.prod.ts   # Production Environment
│── angular.json                  # Angular Config
│── package.json                   # Dependencies
│── README.md                      # Documentation

# Schritt 3
# Componenten erstellen 

ng g c components/navbar
ng g c components/footer
ng g c components/table-card

# Hauptseiten erstellen

ng g c pages/home
ng g c pages/booking
ng g c pages/admin-dashboard
ng g c pages/login
ng g c pages/register

# Schritt 4
# Routing erstellen

add 
   src/app/app.module.ts
   src/app/app-routing.module.ts

change angular.json from ("schematics": {},) to

      "schematics": {
        "@schematics/angular:component": {
          "inlineStyle": false,
          "inlineTemplate": false,
          "skipTests": true,
          "style": "css"
        },
        "@schematics/angular:application": {
          "strict": true,
          "routing": true
        }
      },

# Schritt 5
# Building the first Page Home Page

with coding on the home.component
About the CSS using this style:

Theme: soft pastel versions:

    🍋 Pastel Yellow (#FAE5C3) → Warm & inviting
    🌿 Pastel Green (#A8D5BA) → Fresh & calming
    🎨 Soft Gray (#F5F5F5) → Neutral background

# Schritt 6
#  Building the Navbar and the Footer

adding to the ts, html and css in
navbar.component & footer.component

