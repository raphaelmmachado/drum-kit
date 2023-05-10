import { useEffect, useRef } from "react";
const cev = "/Cev_H2.mp3";
const dsc = "/Dsc_Oh.mp3";
const heater1 = "/Heater-1.mp3";
const heater2 = "/Heater-2.mp3";
const heater3 = "/Heater-3.mp3";
const heater4_1 = "/Heater-4_1.mp3";
const heater6 = "/Heater-6.mp3";
const kickAndHat = "/Kick_n_Hat.mp3";
const rp4Kick1 = "/RP4_KICK_1.mp3";

type DrumKey = "q" | "w" | "e" | "a" | "s" | "d" | "z" | "x" | "c";

const q = new Audio(heater1);
const w = new Audio(heater2);
const e = new Audio(heater3);
const a = new Audio(heater4_1);
const s = new Audio(heater6);
const d = new Audio(dsc);
const z = new Audio(kickAndHat);
const x = new Audio(rp4Kick1);
const c = new Audio(cev);

interface Props {
  title: string;
  setButtonTitle: () => void;
  power: boolean;
  volume: number;
  src: string;
}

export default function DrumPad(props: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (props.power || props.volume > 0)
      window.addEventListener("keydown", handleKeyDown);
    else {
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [props.power, props.volume]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!props.power) return;
    const { key } = event;
    switch (key as DrumKey) {
      case "q":
        q.volume = props.volume;
        q.play();
        break;

      case "w":
        w.volume = props.volume;
        w.play();
        break;
      case "e":
        e.volume = props.volume;
        e.play();
        break;
      case "a":
        a.volume = props.volume;
        a.play();
        break;
      case "s":
        s.volume = props.volume;
        s.play();
        break;
      case "d":
        d.volume = props.volume;
        d.play();
        break;
      case "z":
        z.volume = props.volume;
        z.play();
        break;
      case "x":
        x.volume = props.volume;
        x.play();
        break;
      case "c":
        c.volume = props.volume;
        c.play();
        break;
      default:
        break;
    }
  };
  return (
    <button
      className="h-20 w-20 font-bold uppercase bg-zinc-700 rounded-md text-lg drum-pad"
      onClick={() => {
        if (!props.power) return;
        props.setButtonTitle();
        if (audioRef.current !== null) {
          audioRef.current.src = props.src;
          audioRef.current.volume = props.volume;
          audioRef.current.play();
        }
      }}
    >
      <label htmlFor={props.title.toUpperCase()} className="cursor-pointer">
        {props.title.toUpperCase()}
      </label>
      <audio
        ref={audioRef}
        src={props.src}
        id={props.title.toUpperCase()}
        className="clip"
      >
        {props.title}
      </audio>
    </button>
  );
}
