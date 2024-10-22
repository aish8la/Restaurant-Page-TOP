# Small Bites - Restaurant Website

Welcome to **Small Bites**, a fictional restaurant website project built as part of [The Odin Project](https://www.theodinproject.com/). This project showcases my HTML, CSS, and JavaScript skills while creating an engaging and functional online presence for a restaurant.

## Project Overview

The **Small Bites** website is designed to offer users a simple yet delightful browsing experience. It features a homepage, a menu page, and an about page, all focused on providing essential information about the restaurant. Other than rendering these pages, the website does not include additional interactivity or functionality. JavaScript is used extensively to create dynamic content, particularly on the menu page.

## Features

- **Navigation Bar**: Provides buttons to generate the homepage, menu page, and about page.
- **Dynamic Menu Page**: The menu page is rendered dynamically by reading from an array of dish objects, displaying dishes in categories with images, names, and ingredients.
- **Modern UI**: A clean and minimalistic interface with easy navigation.

## Technologies Used

- **HTML5** and **CSS3**: For building the structure and styling of the website.
- **JavaScript (ES6)**: For dynamic content rendering, such as generating menu items from an array.
- **Webpack**: For bundling assets and managing dependencies.
- **Git**: For version control.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/small-bites.git
   ```
2. **Navigate to the project folder**:
   ```
   cd small-bites
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Start the development server**:
   ```
   npx webpack serve
   ```

## Usage

After installing, you can open the website locally by navigating to `http://localhost:8080` in your browser. Browse through the homepage, menu, and order sections to experience the full functionality of **Small Bites**.

To build the project for production, use the following command:
   ```
   npx webpack
   ```

## Project Structure

```
small-bites/
  |-- dist/
  |-- node_modules/
  |-- src/
      |-- asset/
          |-- resource/
              |-- address-location-map-svgrepo-com.svg
              |-- email-svgrepo-com.svg
              |-- logo-black.svg
              |-- logo-color.svg
              |-- logo.svg
              |-- phone-icn.svg
              |-- pizza.png
          |-- sample_resources/
              |-- bruschetta.jpg
              |-- caesar-salad.jpg
              |-- greek-salad.jpg
              |-- grilled-salmon.jpg
              |-- lava-cake.jpg
              |-- pizza.jpg
              |-- stuffed-mushroom.jpg
              |-- tiramisu.jpg
      |-- displayController.js
      |-- index.js
      |-- menuData.js
      |-- style.css
      |-- template.html
      |-- UIController.js
  |-- .gitignore
  |-- package-lock.json
  |-- package.json
  |-- README.md
  |-- webpack.config.js
```

## Learning Outcomes

This project allowed me to:

- Gain hands-on experience with **classes**, **ESM (ECMAScript Modules)**, and **Webpack**.
- Work with **Webpack** to bundle and organize my code efficiently.
- Practice building a website with a navigation bar and buttons to generate the homepage, menu page, and about page.

## Acknowledgments

- Thanks to [The Odin Project](https://www.theodinproject.com/) for providing such a great curriculum and helping me learn web development!

## Contributing

If you'd like to contribute, please feel free to submit a pull request or open an issue to discuss improvements.

## Credits

- **Hero Image**: Image by [Diskette96](https://pixabay.com/users/diskette96-5462484/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6948995) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6948995).
- **Bruschetta**: Image by [Tracey Pocock](https://pixabay.com/users/newhallpublishing-25658120/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7006980) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7006980).
- **Stuffed Mushroom**: Image by [MM](https://pixabay.com/users/mittmac-1488020/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1343144) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1343144).
- **Caesar Salad**: Image by [Anna Jurt](https://pixabay.com/users/akvampy-17147578/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5359635) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5359635).
- **Greek Salad**: Image by [ArtActiveArt](https://pixabay.com/users/artactiveart-65709/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=263747) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=263747).
- **Grilled Salmon**: Image by [Mỹ Ngôn Trịnh](https://pixabay.com/users/milanianian-21267863/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6269767) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6269767).
- **BBQ Chicken Pizza**: Image by [Engin Akyurt](https://pixabay.com/users/engin_akyurt-3656355/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6143854) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6143854).
- **Chocolate Lava Cake**: Image by [Mirka](https://pixabay.com/users/mivargof-10988759/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4071142) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4071142).
- **Tiramisu**: Image by [Andrey Cojocaru](https://pixabay.com/users/mandarinmd-5643912/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2897900) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2897900).

---

Enjoy browsing **Small Bites** and feel free to explore the code, learn, and adapt!

