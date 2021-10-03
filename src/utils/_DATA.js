let users = {
  ahmed: {
    id: "ahmed",
    username: "ahmed",
    password: "123",
    likedSongs: ["Bom", "Bam", "Bum"],
  },
  khaled: {
    id: "khaled",
    username: "khaled",
    password: "123",
    likedSongs: ["Bom", "Bam", "Bum"],
  },
  mariam: {
    id: "mariam",
    username: "mariam",
    password: "123",
    likedSongs: ["Bom", "Bam", "Bum"],
  },
};

let artists = {
  jo: {
    id: "jo",
    username: "jo",
    password: "321",
    songs: [
      {
        id: "Bom",
        name: "Bom",
        artistName: "jo",
        likesCount: 3,
        releaseYear: 2020,
        duration: "4:25",
      },
    ],
  },
  mo: {
    id: "mo",
    username: "mo",
    password: "321",
    songs: [
      {
        id: "Bam",
        name: "Bam",
        artistName: "mo",
        likesCount: 3,
        releaseYear: 2020,
        duration: "3:25",
      },
    ],
  },
  so: {
    id: "so",
    username: "so",
    password: "321",
    songs: [
      {
        id: "Bum",
        name: "Bum",
        artistName: "so",
        likesCount: 3,
        releaseYear: 2020,
        duration: "2:54",
      },
    ],
  },
};

let admin = {
  admin: { id: "admin", username: "admin", password: "admin" },
};

export function getSongs(artistName) {
  return new Promise((res) => {
    setTimeout(() => res([...artists[artistName].songs]), 1000);
  });
}

export function getArtists() {
  return new Promise((res) => {
    setTimeout(() => res({ ...artists }), 1000);
  });
}

export function getUsers() {
  return new Promise((res) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function getAdmins() {
  return new Promise((res) => {
    setTimeout(() => res([...admins]), 1000);
  });
}

function generateID(key) {
  return key + Math.random().toString(36).substring(2, 15);
}

function formatUser(user) {
  return {
    id: generateID(user.id),
    password: user.password,
    likedSongs: [],
  };
}

export function addUser(user) {
  return new Promise((res) => {
    const formattedUser = formatUser(user);
    setTimeout(() => {
      users = {
        ...users,
        [formattedUser.id]: formattedUser,
      };
      res(formattedUser);
    }, 1000);
  });
}

function formatArtist(artist) {
  return {
    id: generateID(artist.id),
    username: artist.username,
    password: artist.password,
    songs: [],
  };
}

export function addArtist(artist) {
  return new Promise((res) => {
    const formattedArtist = formatArtist(artist);
    setTimeout(() => {
      artists = {
        ...artists,
        [formattedArtist.id]: formattedArtist,
      };
      res(formattedArtist);
    }, 1000);
  });
}

function formatSong(song) {
  return {
    id: generateID(song.id),
    name: song.name,
    artistName: song.artistName,
    duration: song.duration,
    likesCount: 0,
    releaseYear: Date.getFullYear(),
  };
}

export function addSong(song) {
  return new Promise((res) => {
    const authedArtist = song.artistName;
    const formattedSong = formatSong(song);
    setTimeout(() => {
      artists = {
        ...artists,
        [authedArtist]: {
          ...artists[authedArtist],
          songs: artists[authedArtist].songs.concat([formattedSong.id]),
        },
      };
      res(formattedSong);
    }, 1000);
  });
}

export function likeSong(song, authedUser) {
  return new Promise((res) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          likedSongs: users[authedUser].likedSongs.concat([song.id]),
        },
      };
      res(song.id);
    }, 1000);
  });
}
