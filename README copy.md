NextMart

Project Description:
Next Mart allows users to browse products, view product details, filter products by category, and manage products using a simple mock authentication system.
Logged-in users can add and delete products, which are stored locally using localStorage.
The application is fully responsive and optimized for modern browsers.

Setup & Installation

Clone the repository:
git clone <https://github.com/Abdur-Razzaqe/next-mart>

Install dependencies:
npm install

Run the development server:
npm run dev

Open in browser:
http://localhost:3000

Route Summary:
/ :Home page (Banner, Categories, Featured Products, Testimonials, CTA)
/products :All products with category filter
/products/[id] :Product details page
/add-product :Add new product (protected)
/login :Mock login page
/about :About page
/contact :Contact page

Implemented Features:
a. Responsive Navbar & Footer
b. Hero/Banner section
c. Featured / Top Rated Products
d. Category-wise product filtering
e. Product details with rating & reviews
f. Add Product form with localStorage
g. Toast notification on successful product creation
h. Mock authentication using cookies
i. Protected Add Product route
j. Mobile-first responsive design
k. DaisyUI components & Tailwind styling

Feature Explanation:
Authentication: Mock login using hardcoded credentials stored in cookies.
Products: Products are fetched from JSON and stored in localStorage.
Category Filter: Case-insensitive filtering for better UX.
Add Product: Only logged-in users can add products.
Toast Notification: Success toast shown after adding a product.
Responsive Design: Optimized for mobile, tablet, and desktop devices.

Technologies Used:
Next.js 15/16 (App Router)
React
Tailwind CSS
DaisyUI
react-hot-toast
LocalStorage & Cookies

Live Link: https://next-mart-one.vercel.app/
