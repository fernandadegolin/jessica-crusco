export const data = [
  {
    id: "MjQu9lwATqs",
    name: "Jessica Crusco",
    info: "Psicóloga | CRP 06/181741",
    bio: "",
  },
  {
    id: "gmMbYC1RgfU",
    name: "Fernanda Degolin",
    info: "Psicóloga | CRP 06/181741",
    bio: "",
  },
];

interface VideoThumbnailProps {
  videoId: string;
  apiKey: string;
}

const apiKey = "AIzaSyAs1XPHNIOCnIkwNKdUhEf9fuhlr4oadHA";

export function fetchVideoThumbnail(props: VideoThumbnailProps) {
  const { videoId, apiKey } = props;

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.items.length > 0) {
        return data.items[0].snippet.thumbnails.maxres.url;
      } else {
        throw new Error("Vídeo não encontrado.");
      }
    });
}

export const videoPromises = data.map((item) =>
  fetchVideoThumbnail({ videoId: item.id, apiKey })
);
