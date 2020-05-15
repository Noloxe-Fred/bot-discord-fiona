const recipes = require('../recipes-list');

exports.run = (client, message, args) => {

    const arguments = args.join(' ').split(',')
    let name = arguments[0];
    let image = arguments[1];
    let ingredients = arguments.slice(2);
    
    args = {name: name, imageURL: image, ingredients: ingredients};

    recipes.push(args)

    console.log(recipes)
   
    
    // La commande doit permettre d'ajouter un nom mais aussi d'ajouter des ingrédients à la suite 
    // La condition à vérifier est que si on a ":" après argsUser, la suite des arguments devra être push dans un tableau d'ingrédients
    
}