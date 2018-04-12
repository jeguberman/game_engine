const JOURNAL = {
  human_motivations: {
    hypothesis: "Human brains really like to collect things, things in sets",
    thingsLike: new Set(
      "troll-dolls",
      "baseball-cards",
      "epic tier loot that comes in sets"
    ),
    furtherMore: {
      hypothesis: "Different people respond differently to collections which are defined by variables",
      thingsLike: {
        strictCollection: [
          "First Special Minted Quarter For Each State",
          "all 150 pokemon"
        ],
        tightCollection: [
          `Every NHL Rookie Card that came out in ${Date.random().year}`,
          "all pokemon in a generation that can be acquired with trading or bank"
        ],
        looseCollection: [
          "every magic card in a set",
          "At least one transformer from every generation",
        ],
        nonCollection: [
          "pogs",
          "One instance of every single thing that ever had E.T. the extra-terrestrial's face printed on it",
          "The Complete Roman Pantheon"
        ]

      }
    }
  }
};
