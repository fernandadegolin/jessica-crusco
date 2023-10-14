"use client";

import React, { useEffect, useState } from "react";
import { data, videoPromises } from "../../data";
import Image from "next/image";
import Link from "next/link";

export default function VideoThumbnails() {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  useEffect(() => {
    Promise.all(videoPromises)
      .then((thumbnailUrls) => {
        setThumbnails(thumbnailUrls);
      })
      .catch((error) => {
        console.error("Erro ao buscar miniaturas:", error);
      });
  }, []);

  return (
    <div>
      {thumbnails.map((thumbnail, index) => (
        <div key={data[index].id}>
          <Link href={`/video?id=${data[index].id}`}>
            <Image
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              width={300}
              height={200}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
