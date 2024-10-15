"use client";

import React, { useState } from "react";
import LangButton from "../buttons/LangButton";
import { Dialog, DialogContent } from "../ui/dialog";
import AudioPlayer from "./AudioPlayer";

function AudioSection() {
  const [play, setPlay] = useState("");

  return (
    <>
      <section className="audio-list flex flex-col justify-center gap-8 px-4 py-8">
        <h3 className="text-center text-sm text-primary">Choose Language</h3>

        <div className="flex flex-col gap-5">
          <LangButton
            play={play}
            title="English"
            value="english.mp3"
            onClick={() => {
              setPlay("english.mp3");
            }}
          />
        </div>
      </section>

      {/* dialog */}
      <Dialog
        open={!!play}
        onOpenChange={() => {
          setPlay("");
        }}
      >
        <DialogContent>
          <AudioPlayer play={play} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AudioSection;
