import { PlayerModel } from '../models/player-model'
import { StatisticsModel } from '../models/statistics-model'

const database: PlayerModel[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    club: 'Paris Saint-Germain',
    nationality: 'Argentina',
    position: 'Forward',
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    }

  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    club: 'Al Nassr',
    nationality: 'Portugal',
    position: 'Forward',
    statistics: {
      Overall: 91,
      Pace: 87,
      Shooting: 93,
      Passing: 81,
      Dribbling: 90,
      Defending: 35,
      Physical: 78,
    }

  },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  //return database;
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(database)
      }, 1000)
    })
}
export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
  //return database.find((player) => player.id === id) || null
  return new Promise((resolve) => {
    setTimeout(() => {
      const player = database.find((player) => player.id === id)
      resolve(player || null)
    }, 1000)
  })
}

export const createPlayer = async (player: PlayerModel): Promise<PlayerModel | null> => {
  //const newPlayer = { ...player, id: database.length + 1 }
  //database.push(newPlayer)
  //return newPlayer
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPlayer = { ...player, id: database.length + 1 }
      database.push(newPlayer)
      resolve(newPlayer)
    }, 1000)
  })
}

export const updatePlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel | null> => {
  //const index = database.findIndex((p) => p.id === id)
  //if (index !== -1) {
  //  database[index] = { ...database[index], ...player }
  //  return database[index]
  //}
  //return null
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = database.findIndex((p) => p.id === id)
      if (index !== -1) {
        database[index].statistics = statistics
        resolve(database[index])
      } else {
        resolve(null)
      }
    }, 1000)
  })
}

export const deletePlayer = async (id: number): Promise<PlayerModel | null> => {
  //const index = database.findIndex((p) => p.id === id)
  //if (index !== -1) {
  //  const deletedPlayer = database.splice(index, 1)[0]
  //  return deletedPlayer
  //}
  //return null
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = database.findIndex((p) => p.id === id)
      if (index !== -1) {
        const deletedPlayer = database.splice(index, 1)[0]
        resolve(deletedPlayer)
      } else {
        resolve(null)
      }
    }, 1000)
  })
}
