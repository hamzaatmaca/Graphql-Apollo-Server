import {  gql } from 'apollo-server'


const typeDefs = gql`
    type Recipe {
        name:String,
        description:String,
        createdAt:String,
        thumbsUp:Int,
        thumbsDowmn:Int,
    }

    input RecipeInput {
        name:String,
        description:String,
    }

    input EditRecipeInput{
        name:String,
        description:String
    }

    type Query {
        recipe(ID:ID!): Recipe!
        getRecipes(amount:Int): [Recipe]
    }

    type Mutations {
        createRecipe(recipeInput:RecipeInput): Recipe!
        deleteRecipe(ID:ID!): Boolean
        editRecipe(ID:ID!, editRecipeInput:EditRecipeInput): Boolean
    }

`

export default typeDefs