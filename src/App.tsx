import { useState } from "react";
import DrumPad from "./components/DrumPad";
const cev = "/Cev_H2.mp3";
const dsc = "/Dsc_Oh.mp3";
const heater1 = "/Heater-1.mp3";
const heater2 = "/Heater-2.mp3";
const heater3 = "/Heater-3.mp3";
const heater4_1 = "/Heater-4_1.mp3";
const heater6 = "/Heater-6.mp3";
const kickAndHat = "/Kick_n_Hat.mp3";
const rp4Kick1 = "/RP4_KICK_1.mp3";

function App() {
  const [power, setPower] = useState<boolean>(true);
  const [buttonTitle, setButtonTitle] = useState<string>();
  const [volume, setVolume] = useState<number>(1);
  return (
    <main
      id="drum-machine"
      className="flex justify-around gap-5 bg-zinc-50 border-zinc-800 border-4 p-12 rounded-md"
    >
      <div id="grid" className="grid grid-cols-3 gap-3">
        <DrumPad
          title="q"
          key={1}
          setButtonTitle={() => setButtonTitle("Heater 1")}
          power={power}
          volume={volume}
          src={heater1}
        />
        <DrumPad
          title="w"
          key={2}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Heater 2")}
          src={heater2}
        />
        <DrumPad
          title="e"
          key={3}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Heater 3")}
          src={heater3}
        />
        <DrumPad
          title="a"
          key={4}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Heater 4")}
          src={heater4_1}
        />
        <DrumPad
          title="s"
          key={5}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Clap")}
          src={heater6}
        />
        <DrumPad
          src={dsc}
          title="d"
          key={6}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Open HH")}
        />
        <DrumPad
          src={kickAndHat}
          title="z"
          key={7}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Kick and Hat")}
        />
        <DrumPad
          title="x"
          key={8}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Kick")}
          src={rp4Kick1}
        />
        <DrumPad
          src={cev}
          title="c"
          key={9}
          power={power}
          volume={volume}
          setButtonTitle={() => setButtonTitle("Closed HH")}
        />
      </div>

      <div className="flex flex-col items-center gap-10">
        {/* POWER */}
        <div className="w-fit">
          <button
            onClick={() => setPower((prev) => !prev)}
            className="font-bold text-center uppercase"
          >
            power
          </button>
          <div
            className="flex bg-black p-1 w-full h-6 cursor-pointer"
            onClick={() => setPower((prev) => !prev)}
          >
            <span
              className={`${!power ? "bg-red-600" : "bg-inherit"} w-[50%] `}
            >
              {" "}
            </span>
            <span
              className={`${power ? "bg-green-500" : "bg-inherit"}  w-[50%]`}
            ></span>
          </div>
        </div>
        {/* DISPLAY */}
        <div
          id="display"
          className="bg-blue-500 text-zinc-900 font-bold uppercase p-4 w-36 text-center"
        >
          {buttonTitle}
        </div>
        {/* volume */}
        <div className="flex flex-col items-center gap-2 w-full">
          <label htmlFor="volume" className="font-bold uppercase text-center">
            Volume: {volume}
          </label>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
