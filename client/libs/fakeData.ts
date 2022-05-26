import { ITrack } from "../types/Track";

export const FAKE_TRACKS: ITrack[] = [
  {
    id: "1",
    artist: "Исполнитель 1",
    audio:
      "http://localhost:5000/audio/39e43225-129e-4934-8203-d6edd2407bad.mp3",
    name: "Трек с названием 1",
    listens: 3,
    picture:
      "http://localhost:5000/image/51490af7-45cc-4273-bde5-7ca32e0e78ff.jpg",
    text: "Некоторые теги для песни 1",
    comments: [
      {
        id: "1",
        username: "Alexandr",
        text: "That's a great track. Thanks",
      },
    ],
  },
  {
    id: "2",
    artist: "Исполнитель 2",
    audio: "http://localhost:5000/audio/1245.mp3",
    name: "Трек с названием 2",
    listens: 4,
    picture:
      "http://localhost:5000/image/51490af7-45cc-4273-bde5-7ca32e0e78ff.jpg",
    text: "Некоторые теги для песни 2",
    comments: [],
  },
];
