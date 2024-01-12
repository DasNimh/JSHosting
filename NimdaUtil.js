// This is how to add a new mod to the game.

// Create a new Javascript file like this one.
// Add the file to the mods folder on GitHub, or host it somewhere else.
// https://github.com/R74nCom/sandboxels/tree/main/mods

// To add it in the Mod Loader:
// If it is in the mods folder, you can just use the name of the file.
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.

// Adding elements:
elements.Mystery = {
    color: "#93f022",
    behavior: behaviors.POWDER,
    category: "powders",
    viscosity: 100,
    state: "liquid",
    density: 70,
};

elements.Boost = {
    color: "#85f7ff",
    behavior: behaviors.POWDER,
    category: "powders",
    viscosity: 100000,
    state: "liquid",
    density: 340,
};

elements.Nutrient = {
    color: "#de4d18",
    behavior: behaviors.POWDER,
    category: "powders",
    viscosity: 100000,
    state: "liquid",
    density: 340,
};

// Add reactions to existing elements
if (!elements.Boost.reactions) { // Include this block once
    elements.Boost.reactions = {} // This creates the property if it doesn't exist
}
elements.Boost.reactions.blood = { "elem1":null, "elem2":"antibody" }
elements.Boost.reactions.poison = { "elem1":null, "elem2":"antidote" }
