<h1 align="center">Menu Creator</h1>
<p align="center" width="80%">
<img src='https://res.cloudinary.com/dmaijlcxd/image/upload/v1682378382/menu-creator_fjldlt.png'>
  
## Features 
### Menu Creator Page
  - Crud operations on a menu, also can change the order of categories, items, groups, and options by drag-and-drop.
  - Read a menu of JSON or CSV file to make a menu for this website. The formats are shown at the end of this page. 
  - Save the updated menu in a json file so that you can come back to the menu later. 
### Menu Live Page 
  - Make a mock order with the current menu.

## Live Page
You can check live page [here](https://satoshi-sh.github.io/menu-creator/)

## Run this locally
In the project directory, you can run:
### `npm start`
Open [http://localhost:3000/menu-creator](http://localhost:3000/menu-creator) to view it in your browser.

## Used Technologies
- React
- React DOM Router
- React-Bootstrap

## Outlook
<p align='center'>
<img src ='https://github.com/Satoshi-Sh/git_resource/blob/main/menu-creator.gif'/>
</p>

## Development Notes
[Mastodon toots](https://mastodon.xyz/@sato1108ss/110177725642854961)

## Reference
- [How Do I use Drag and Drop React](https://rootstack.com/en/blog/how-do-i-use-drag-and-drop-react) 
## Credit 
- Favicon : "https://www.flaticon.com/free-icons/food"
- Restuanrant Banners: Cloudinary sample images

  
## File Format
### CSV File 
File name has to be a restaurant name
```restaurant_name.csv```
```
category,name,price,description
California,7 Cellars The Farm Collection Pinot Noir,28.49,(750ml 14.50%) California
California,Barefoot Bubbly Pinot Grigio,13.99,(750ml 11.00%) California  
```
  
### JSON File
  
```
 {
  "restaurant": "Italiano's",
  "image": "https://res.cloudinary.com/dmaijlcxd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Order%20Now,w_0.5,y_0.18/v1670714078/samples/food/pot-mussels.jpg",
  "menu": [
    {
      "category": "Appetizers",
      "description": "Start your meal off right with one of our delicious appetizers.",
      "items": [
        {
          "name": "Bruschetta",
          "description": "Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.",
          "price": 7
        },
        {
          "name": "Caprese Salad",
          "description": "Fresh mozzarella, tomato, and basil drizzled with balsamic vinegar and olive oil.",
          "price": 8
        },
        {
          "name": "Mozzarella Sticks",
          "description": "Breaded and fried mozzarella served with marinara sauce.",
          "price": 6
        }
      ]
    },
    {
      "category": "Pizza",
      "description": "Our pizzas are made with fresh, high-quality ingredients and baked to perfection.",
      "items": [
        {
          "name": "Margherita",
          "description": "Fresh tomato sauce, mozzarella, and basil.",
          "price": 12,
          "groups": [
            {
              "name": "Choose Size",
              "required": true,
              "options": [
                { "name": "Small", "price": 0 },
                { "name": "Medium", "price": 2 },
                { "name": "Large", "price": 4 }
              ]
            },
            {
              "name": "Choose Toppings",
              "required": false,
              "options": [
                { "name": "Pepperoni", "price": 1 },
                { "name": "Mushrooms", "price": 1 },
                { "name": "Green Peppers", "price": 1 }
              ]
            }
          ]
        },
        {
          "name": "Meat Lovers",
          "description": "Tomato sauce, mozzarella, pepperoni, sausage, bacon, and ham.",
          "price": 16,
          "groups": [
            {
              "name": "Choose Size",
              "required": true,
              "options": [
                { "name": "Small", "price": 0 },
                { "name": "Medium", "price": 2 },
                { "name": "Large", "price": 4 }
              ]
            }
          ]
        },
        {
          "name": "Vegetarian",
          "description": "Tomato sauce, mozzarella, mushrooms, onions, green peppers, and olives.",
          "price": 15,
          "groups": [
            {
              "name": "Choose Size",
              "required": true,
              "options": [
                { "name": "Small", "price": 0 },
                { "name": "Medium", "price": 2 },
                { "name": "Large", "price": 4 }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```
