import Link from "next/link";
import React from "react";
import VideoThumbnails from "./components/video-thumb/page";

export default function GaleriaPage() {
  return (
    <div>
      <Link href={"/"}>
        <button>Voltar para HOME</button>
      </Link>

      <div>
        <VideoThumbnails />
      </div>
    </div>
  );
}
