import { Metadata } from "next";
import Link from "next/link";
import styles from "./videos.module.scss";
import { data } from "../galeria/data";
import VideoThumbnails from "../galeria/components/video-thumb/page";
// import ColorThief from 'color-thief-browser';
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Vídeos - Jessica Crusco",
};

export default function VideosPage() {
  const router = useRouter();
  const { id } = router.query; // O ID do vídeo

  return (
    <div>
      <h1>Vídeo com ID: {id}</h1>
      {/* Aqui você pode incluir o player de vídeo com base no ID */}
    </div>
  );
}

//   const videos = data;

//   const videoOptions = {
//     height: "315",
//     width: "560",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <>
//       <div>
//         <h1>Você está na página de vídeos</h1>
//         <Link href={"/"}>
//           <button>Voltar</button>
//         </Link>

//         {videos.map((value, index) => (
//           <>
//             <h2 key={index} className={styles.text}>
//               {value.name}
//             </h2>
//             <h3>{value.bio}</h3>
//             <div>
//               <iframe
//                 width="560"
//                 height="315"
//                 src={`https://www.youtube.com/embed/${value.id}?rel=0&si=p2PGEUD1Wbz9OTyq`}
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </>
//         ))}
//       </div>
//     </>
//   );
// }
