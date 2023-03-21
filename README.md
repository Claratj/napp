# Napp

This project responds to a technical test. 

## Requirements to be met:

1. The application should have two views: 

    - Main one where the products are listed.
    - Products details

2. The application should be in React with JS.

3. The app should be a SPA where the routing of the views will be added to the client code, without being an MPA or using SSR. 

4. The project should have the following scripts to be able to manage the app: 

 - START: Developemnt mode.
 - BUILD: Compile for Production mode.
 - TEST: Test launch.
 - LINT: Code verification.

5. The project should be in an open source repo and be uploaded in an evolutionary way in order to reach milestones.

### View Descriptions:

**PLP - Product List Page:**

- Page where the list of products will be displayed.
- This page will show all the elements returned by the API request.
- It will allow the filtering of the content according to the search criteria that the user enters
enter
- When selecting a product, you must navigate to the product details.
- It will show a maximum of four elements per row, and that is adaptive according to the
resolution.

**PDP - Product Details Page:**

- This page will be divided into two columns:
o In the first one, the product image component will be displayed.
o In the second one, it will show the product details and actions.
- It should display a link to navigate back to the product list.

### Components description:

**Header:**

- The title or icon of the application will act as a link to the main view.
- A breadcrumbs will be displayed, showing the page where the user is located as well as a link for navigation.
as well as a link for navigation.
- On the right side of the header, the number of items that have been added to the cart will be displayed.
added to the cart.

**Search bar**

- An input will be shown to the user, which will allow the introduction of a text string.
- The user will be asked to filter the products based on the text entered, and it will be compared
with the Make and Model of the products.
- The filtering will be in real time, i.e. a search will be launched each time the user changes the search criteria.
user changes the search criteria.

**List (ITEM)**

The following product information will be displayed:
o Image
o Brand
o Model
o Price

**Product IMAGE**

- The product image will be displayed

**Product DESCRIPTION**

The details associated with the products will be displayed. At least the following will be displayed
attributes:
o Brand
o Model
o Price
o CPU
o RAM
o Operating System
o Screen Resolution
o Battery
o Cameras
o Dimensions
o Weight

**ACTIONS on the product**

Two types of selectors will be displayed, where the user can select the type of product he/she wants to add to the cart.
type of product to be added to the cart. The option selectors for the following attributes will be shown
following attributes:
o Storage
o Colors
- Even if there is only one option, the selector will be displayed with the information. For this
use case, it should be selected by default.
- An Add button will be displayed, where the user, once the options have been selected, will add the product to the basket,
will add the product to the cart.
- When adding a product using the API, the following information is required to be sent:
o The product identifier
o The selected color code
o The code of the selected storage capacity.
- The add request returns in the response, the number of products that are in the basket.
basket. This value must be shown in the application header in any view of the application.
of the application. This requires persisting the data.