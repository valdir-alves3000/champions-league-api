import { PlayerModel } from "../models/player-model"

const dataBase: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "overall": 93,
      "pace": 85,
      "shooting": 94,
      "passing": 91,
      "dribbling": 95,
      "defending": 38,
      "physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al-Nassr",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "overall": 91,
      "pace": 87,
      "shooting": 93,
      "passing": 82,
      "dribbling": 89,
      "defending": 35,
      "physical": 77
    }
  },
  {
    "id": 3,
    "name": "Neymar Jr.",
    "club": "Paris Saint-Germain",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "overall": 91,
      "pace": 91,
      "shooting": 85,
      "passing": 86,
      "dribbling": 94,
      "defending": 37,
      "physical": 60
    }
  },
  {
    "id": 4,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "Forward",
    "statistics": {
      "overall": 92,
      "pace": 78,
      "shooting": 95,
      "passing": 79,
      "dribbling": 86,
      "defending": 44,
      "physical": 82
    }
  },
  {
    "id": 5,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder",
    "statistics": {
      "overall": 91,
      "pace": 76,
      "shooting": 86,
      "passing": 94,
      "dribbling": 88,
      "defending": 64,
      "physical": 78
    }
  },
  {
    "id": 6,
    "name": "Kylian Mbappé",
    "club": "Paris Saint-Germain",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "overall": 91,
      "pace": 97,
      "shooting": 86,
      "passing": 78,
      "dribbling": 92,
      "defending": 36,
      "physical": 76
    }
  },
  {
    "id": 7,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nationality": "Egypt",
    "position": "Forward",
    "statistics": {
      "overall": 90,
      "pace": 93,
      "shooting": 86,
      "passing": 81,
      "dribbling": 90,
      "defending": 45,
      "physical": 75
    }
  },
  {
    "id": 8,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Netherlands",
    "position": "Defender",
    "statistics": {
      "overall": 90,
      "pace": 77,
      "shooting": 60,
      "passing": 71,
      "dribbling": 72,
      "defending": 92,
      "physical": 86
    }
  },
  {
    "id": 9,
    "name": "Jan Oblak",
    "club": "Atletico Madrid",
    "nationality": "Slovenia",
    "position": "Goalkeeper",
    "statistics": {
      "overall": 91,
      "pace": 45,
      "shooting": 31,
      "passing": 44,
      "dribbling": 49,
      "defending": 17,
      "physical": 79
    }
  },
  {
    "id": 10,
    "name": "N'Golo Kanté",
    "club": "Chelsea",
    "nationality": "France",
    "position": "Midfielder",
    "statistics": {
      "overall": 90,
      "pace": 78,
      "shooting": 66,
      "passing": 77,
      "dribbling": 81,
      "defending": 87,
      "physical": 82
    }
  },
  {
    "id": 11,
    "name": "Sadio Mané",
    "club": "Bayern Munich",
    "nationality": "Senegal",
    "position": "Forward",
    "statistics": {
      "overall": 90,
      "pace": 91,
      "shooting": 85,
      "passing": 80,
      "dribbling": 89,
      "defending": 42,
      "physical": 76
    }
  },
  {
    "id": 12,
    "name": "Joshua Kimmich",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Midfielder",
    "statistics": {
      "overall": 89,
      "pace": 73,
      "shooting": 72,
      "passing": 86,
      "dribbling": 84,
      "defending": 84,
      "physical": 78
    }
  },
  {
    "id": 13,
    "name": "Harry Kane",
    "club": "Tottenham Hotspur",
    "nationality": "England",
    "position": "Forward",
    "statistics": {
      "overall": 90,
      "pace": 70,
      "shooting": 92,
      "passing": 83,
      "dribbling": 83,
      "defending": 47,
      "physical": 83
    }
  },
  {
    "id": 14,
    "name": "Karim Benzema",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "overall": 89,
      "pace": 78,
      "shooting": 88,
      "passing": 81,
      "dribbling": 88,
      "defending": 39,
      "physical": 78
    }
  },
  {
    "id": 15,
    "name": "Sergio Ramos",
    "club": "Paris Saint-Germain",
    "nationality": "Spain",
    "position": "Defender",
    "statistics": {
      "overall": 88,
      "pace": 70,
      "shooting": 64,
      "passing": 75,
      "dribbling": 74,
      "defending": 88,
      "physical": 84
    }
  },
  {
    "id": 16,
    "name": "Luka Modrić",
    "club": "Real Madrid",
    "nationality": "Croatia",
    "position": "Midfielder",
    "statistics": {
      "overall": 89,
      "pace": 74,
      "shooting": 76,
      "passing": 89,
      "dribbling": 91,
      "defending": 72,
      "physical": 67
    }
  },
  {
    "id": 17,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Forward",
    "statistics": {
      "overall": 88,
      "pace": 89,
      "shooting": 88,
      "passing": 65,
      "dribbling": 80,
      "defending": 49,
      "physical": 87
    }
  },
  {
    "id": 18,
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nationality": "Brazil",
    "position": "Goalkeeper",
    "statistics": {
      "overall": 90,
      "pace": 56,
      "shooting": 40,
      "passing": 50,
      "dribbling": 51,
      "defending": 18,
      "physical": 83
    }
  },
  {
    "id": 19,
    "name": "Marc-André ter Stegen",
    "club": "Barcelona",
    "nationality": "Germany",
    "position": "Goalkeeper",
    "statistics": {
      "overall": 90,
      "pace": 46,
      "shooting": 28,
      "passing": 42,
      "dribbling": 45,
      "defending": 18,
      "physical": 79
    }
  },
  {
    "id": 20,
    "name": "Trent Alexander-Arnold",
    "club": "Liverpool",
    "nationality": "England",
    "position": "Defender",
    "statistics": {
      "overall": 87,
      "pace": 80,
      "shooting": 66,
      "passing": 88,
      "dribbling": 82,
      "defending": 80,
      "physical": 72
    }
  },
  {
    "id": 21,
    "name": "Ederson",
    "club": "Manchester City",
    "nationality": "Brazil",
    "position": "Goalkeeper",
    "statistics": {
      "overall": 88,
      "pace": 56,
      "shooting": 44,
      "passing": 94,
      "dribbling": 50,
      "defending": 17,
      "physical": 77
    }
  },
  {
    "id": 22,
    "name": "Jadon Sancho",
    "club": "Manchester United",
    "nationality": "England",
    "position": "Forward",
    "statistics": {
      "overall": 87,
      "pace": 83,
      "shooting": 81,
      "passing": 80,
      "dribbling": 91,
      "defending": 36,
      "physical": 61
    }
  },
  {
    "id": 23,
    "name": "Raheem Sterling",
    "club": "Chelsea",
    "nationality": "England",
    "position": "Forward",
    "statistics": {
      "overall": 88,
      "pace": 90,
      "shooting": 81,
      "passing": 78,
      "dribbling": 88,
      "defending": 45,
      "physical": 68
    }
  },
  {
    "id": 24,
    "name": "Heung-min Son",
    "club": "Tottenham Hotspur",
    "nationality": "South Korea",
    "position": "Forward",
    "statistics": {
      "overall": 89,
      "pace": 89,
      "shooting": 87,
      "passing": 81,
      "dribbling": 86,
      "defending": 40,
      "physical": 69
    }
  },
  {
    "id": 25,
    "name": "Romelu Lukaku",
    "club": "Inter Milan",
    "nationality": "Belgium",
    "position": "Forward",
    "statistics": {
      "overall": 87,
      "pace": 81,
      "shooting": 85,
      "passing": 70,
      "dribbling": 76,
      "defending": 38,
      "physical": 83
    }
  },
  {
    "id": 26,
    "name": "Gianluigi Donnarumma",
    "club": "Paris Saint-Germain",
    "nationality": "Italy",
    "position": "Goalkeeper",
    "statistics": {
      "overall": 89,
      "pace": 46,
      "shooting": 31,
      "passing": 41,
      "dribbling": 50,
      "defending": 15,
      "physical": 80
    }
  },
  {
    "id": 27,
    "name": "Gerard Piqué",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 57,
      "shooting": 55,
      "passing": 73,
      "dribbling": 70,
      "defending": 87,
      "physical": 76
    }
  },
  {
    "id": 28,
    "name": "Thiago Silva",
    "club": "Chelsea",
    "nationality": "Brazil",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 59,
      "shooting": 55,
      "passing": 71,
      "dribbling": 73,
      "defending": 87,
      "physical": 79
    }
  },
  {
    "id": 29,
    "name": "Paulo Dybala",
    "club": "AS Roma",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "overall": 87,
      "pace": 85,
      "shooting": 82,
      "passing": 84,
      "dribbling": 90,
      "defending": 35,
      "physical": 61
    }
  },
  {
    "id": 30,
    "name": "Bruno Fernandes",
    "club": "Manchester United",
    "nationality": "Portugal",
    "position": "Midfielder",
    "statistics": {
      "overall": 88,
      "pace": 74,
      "shooting": 85,
      "passing": 89,
      "dribbling": 84,
      "defending": 72,
      "physical": 77
    }
  },
  {
    "id": 31,
    "name": "Mats Hummels",
    "club": "Borussia Dortmund",
    "nationality": "Germany",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 56,
      "shooting": 51,
      "passing": 76,
      "dribbling": 71,
      "defending": 88,
      "physical": 77
    }
  },
  {
    "id": 32,
    "name": "Andrew Robertson",
    "club": "Liverpool",
    "nationality": "Scotland",
    "position": "Defender",
    "statistics": {
      "overall": 87,
      "pace": 84,
      "shooting": 61,
      "passing": 80,
      "dribbling": 80,
      "defending": 83,
      "physical": 76
    }
  },
  {
    "id": 33,
    "name": "Leon Goretzka",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Midfielder",
    "statistics": {
      "overall": 87,
      "pace": 79,
      "shooting": 82,
      "passing": 81,
      "dribbling": 83,
      "defending": 80,
      "physical": 86
    }
  },
  {
    "id": 34,
    "name": "Frenkie de Jong",
    "club": "Barcelona",
    "nationality": "Netherlands",
    "position": "Midfielder",
    "statistics": {
      "overall": 87,
      "pace": 78,
      "shooting": 69,
      "passing": 83,
      "dribbling": 88,
      "defending": 79,
      "physical": 76
    }
  },
  {
    "id": 35,
    "name": "Ángel Di María",
    "club": "Juventus",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "overall": 87,
      "pace": 85,
      "shooting": 81,
      "passing": 86,
      "dribbling": 88,
      "defending": 51,
      "physical": 72
    }
  },
  {
    "id": 36,
    "name": "Marco Reus",
    "club": "Borussia Dortmund",
    "nationality": "Germany",
    "position": "Forward",
    "statistics": {
      "overall": 86,
      "pace": 81,
      "shooting": 85,
      "passing": 84,
      "dribbling": 86,
      "defending": 46,
      "physical": 66
    }
  },
  {
    "id": 37,
    "name": "David de Gea",
    "club": "Manchester United",
    "nationality": "Spain",
    "position": "Goalkeeper",
    "statistics": {
      "overall": 86,
      "pace": 48,
      "shooting": 27,
      "passing": 38,
      "dribbling": 43,
      "defending": 18,
      "physical": 73
    }
  },
  {
    "id": 38,
    "name": "Kalidou Koulibaly",
    "club": "Chelsea",
    "nationality": "Senegal",
    "position": "Defender",
    "statistics": {
      "overall": 87,
      "pace": 82,
      "shooting": 60,
      "passing": 66,
      "dribbling": 71,
      "defending": 88,
      "physical": 86
    }
  },
  {
    "id": 39,
    "name": "João Cancelo",
    "club": "Manchester City",
    "nationality": "Portugal",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 84,
      "shooting": 70,
      "passing": 85,
      "dribbling": 84,
      "defending": 80,
      "physical": 70
    }
  },
  {
    "id": 40,
    "name": "Aymeric Laporte",
    "club": "Manchester City",
    "nationality": "Spain",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 64,
      "shooting": 48,
      "passing": 70,
      "dribbling": 70,
      "defending": 87,
      "physical": 77
    }
  },
  {
    "id": 41,
    "name": "Phil Foden",
    "club": "Manchester City",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "overall": 85,
      "pace": 81,
      "shooting": 80,
      "passing": 80,
      "dribbling": 89,
      "defending": 55,
      "physical": 61
    }
  },
  {
    "id": 42,
    "name": "Ciro Immobile",
    "club": "Lazio",
    "nationality": "Italy",
    "position": "Forward",
    "statistics": {
      "overall": 87,
      "pace": 83,
      "shooting": 88,
      "passing": 72,
      "dribbling": 81,
      "defending": 38,
      "physical": 75
    }
  },
  {
    "id": 43,
    "name": "Kai Havertz",
    "club": "Chelsea",
    "nationality": "Germany",
    "position": "Midfielder",
    "statistics": {
      "overall": 85,
      "pace": 84,
      "shooting": 80,
      "passing": 78,
      "dribbling": 87,
      "defending": 49,
      "physical": 73
    }
  },
  {
    "id": 44,
    "name": "Milan Škriniar",
    "club": "Inter Milan",
    "nationality": "Slovakia",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 75,
      "shooting": 58,
      "passing": 66,
      "dribbling": 69,
      "defending": 87,
      "physical": 85
    }
  },
  {
    "id": 45,
    "name": "Federico Chiesa",
    "club": "Juventus",
    "nationality": "Italy",
    "position": "Forward",
    "statistics": {
      "overall": 86,
      "pace": 91,
      "shooting": 80,
      "passing": 77,
      "dribbling": 86,
      "defending": 50,
      "physical": 70
    }
  },
  {
    "id": 46,
    "name": "Serge Gnabry",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Forward",
    "statistics": {
      "overall": 86,
      "pace": 88,
      "shooting": 83,
      "passing": 80,
      "dribbling": 86,
      "defending": 45,
      "physical": 73
    }
  },
  {
    "id": 47,
    "name": "Leroy Sané",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Forward",
    "statistics": {
      "overall": 85,
      "pace": 90,
      "shooting": 82,
      "passing": 78,
      "dribbling": 86,
      "defending": 38,
      "physical": 69
    }
  },
  {
    "id": 48,
    "name": "Jordi Alba",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "Defender",
    "statistics": {
      "overall": 85,
      "pace": 88,
      "shooting": 61,
      "passing": 82,
      "dribbling": 82,
      "defending": 80,
      "physical": 72
    }
  },
  {
    "id": 49,
    "name": "Marquinhos",
    "club": "Paris Saint-Germain",
    "nationality": "Brazil",
    "position": "Defender",
    "statistics": {
      "overall": 86,
      "pace": 79,
      "shooting": 60,
      "passing": 74,
      "dribbling": 73,
      "defending": 88,
      "physical": 81
    }
  },
  {
    "id": 50,
    "name": "Memphis Depay",
    "club": "Atletico Madrid",
    "nationality": "Netherlands",
    "position": "Forward",
    "statistics": {
      "overall": 85,
      "pace": 84,
      "shooting": 82,
      "passing": 78,
      "dribbling": 84,
      "defending": 35,
      "physical": 78
    }
  }
]
const createID = async () => dataBase.length

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return dataBase.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  player.id = await createID()
  dataBase.push(player)
}