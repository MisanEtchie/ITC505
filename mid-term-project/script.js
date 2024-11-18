

const gameData = {
    start: {
        text: "You wake up in a mysterious forest. Paths stretch out in two directions.",
        choices: [
            { text: "Head north towards the mountains", consequence: "mountainPath" },
            { text: "Walk east into the deep woods", consequence: "forestPath" }
        ],
        image: "https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg"  
    },
    mountainPath: {
        text: "You venture towards the mountains and encounter a dragon!",
        choices: [
            { text: "Fight the dragon", consequence: "fightDragon" },
            { text: "Befriend the dragon", consequence: "befriendDragon" }
        ],
        image: "https://img.freepik.com/premium-photo/dragon-mountain-with-mountains-background_933706-596.jpg?w=1380"
    },
    forestPath: {
        text: "You walk deeper into the woods and find a hidden village.",
        choices: [
            { text: "Explore the village", consequence: "exploreVillage" },
            { text: "Steal from the village", consequence: "stealVillage" }
        ],
        image: "https://images.pexels.com/photos/1101296/pexels-photo-1101296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    fightDragon: {
        text: "You fight bravely but the dragon overpowers you. The end.",
        choices: [],
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c6395b6-9c5d-4ae3-bc78-b44134dc2562/dgx9ed0-c32a6020-d1a2-4371-b3ed-515355165427.jpg"
    },
    befriendDragon: {
        text: "The dragon, impressed by your courage, becomes your friend!",
        choices: [
            { text: "Ride the dragon", consequence: "rideDragon" },
            { text: "Ask for treasure", consequence: "dragonTreasure" }
        ],
        image: "https://dragon.university/wp-content/uploads/2023/09/pretty-dragon1521664.jpg"
    },
    exploreVillage: {
        text: "The villagers welcome you and share their secrets of the forest.",
        choices: [],
        image: "https://images.pexels.com/photos/19736845/pexels-photo-19736845/free-photo-of-elderly-men-sitting-on-street-against-stone-house.jpeg"
    },
    stealVillage: {
        text: "You try to steal but are caught and banished from the village.",
        choices: [],
        image: "https://rosesweet.com/wp-content/uploads/2022/07/Angry-mob.webp"
    },
    rideDragon: {
        text: "You fly on the dragon's back, seeing wonders you never imagined.",
        choices: [],
        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c2e30ab2-7c85-453a-be14-e04a3897562e/cb06d10f-2e6d-4f40-85ab-df6694ba74a7.png"
    },
    dragonTreasure: {
        text: "The dragon leads you to a cave filled with treasure. You are rich!",
        choices: [],
        image: "https://img.freepik.com/premium-photo/golden-dragon-guarding-treasure-cave_1282444-207399.jpg?w=2000"
    }
};

function startGame() {
    updatePage("start");
    const gameButton = document.getElementById("game-button");
    gameButton.textContent = "Restart Game";
}

function updatePage(stageKey) {
    const stage = gameData[stageKey];
    if (!stage) {
        console.error(`Stage "${stageKey}" not found in gameData.`);
        return;
    }

    document.getElementById("story").textContent = stage.text;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; 

    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => updatePage(choice.consequence);
        choicesContainer.appendChild(button);
    });

    document.getElementById("story-image").src = stage.image;
}

function endGame() {
    const endMessage = "The game has ended. Refresh to play again!";
    document.getElementById("story").textContent = endMessage;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("story-image").src = "";
}

