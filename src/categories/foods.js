import React from "react";
import "../App.scss";
import Questions from "../components/questions";

export default function Foods(){
    const words = ["Fried Chicken", "Noodles", "Salad", "Pizza", "Steak", "Potato Chips", "Schnitzel", "Sushi", "Spaghetti", "Curry", "French Fries", "Hamburger", "Somtum", "Paella", "Tacos", "Fish and Chips", "Barbecue", "Bruschetta", "Rice", "Kimchi", "Bibimbap", "Risotto", "Kebab", "Caviar", "Peking Duck", "Dim Sum", "Lasagne", "Ganoush", "Mutabbal", "Ratatouille", "Nasi Goreng", "Amok", "Pho", "Tom Yum Goong", "Sausage", "Sauerkraut", "Ramen", "Jjajangmyeon", "Pad Thai", "Foie Gras", "Masala Dosa", "Roti", "Adobo", "Nasi Lemak", "Ambuyat", "Laksa", "Arepas", "Pierogi", "Popcorn", "Burritos", "Ceviche", "Xiaolongbao", "Dumplings", "Nasi Goreng", "Bratwurst", "Borscht", "Bulgogi", "Quesadilla", "Pretzel", "Nachos", "Enchiladas", "Biryani", "Yakiniku", "Mac and Cheese", "Ramyeon", "Sashimi", "Balut", "Hot and Sour Noodles", "Ham", "Tofu", "Garlic Bread", "Grilled Pork","Ravioli", "Beef Wellington", "Massaman Curry", "Soup", "Hot Dog", "Coleslaw", "Porridge", "Omelet", "Egg Benedict", "Tempura", "Stewed Meat", "Fried Rice", "Gyoza", "Tonkatsu", "Samosa", "Nugget", "Bacon", "Panini", "Macaroni", "Pasta"];
    return (<Questions answers={words} category="Foods" redirect="/foods"/>)
}