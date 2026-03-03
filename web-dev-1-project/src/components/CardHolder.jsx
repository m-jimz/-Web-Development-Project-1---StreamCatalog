import Event from './Event';

function CardHolder() {
  return (


    <div className="card-container">
      <Event title="Minecraft" description="Sandbox" link="https://www.minecraft.net/" />
      <Event title="Fortnite" description="Battle Royale" link="https://www.fortnite.com/" />
      <Event title="Grand Theft Auto V" description="Open-World Action" link="https://www.rockstargames.com/gta-v" />
      <Event title="Zelda: BOTW" description="Action-Adventure" link="https://www.zelda.com/breath-of-the-wild/" />
      <Event title="Elden Ring" description="Action RPG" link="https://en.bandainamcoent.eu/elden-ring/elden-ring" />
      <Event title="Warzone" description="FPS / BR" link="https://www.callofduty.com/warzone" />
      <Event title="League of Legends" description="MOBA" link="https://www.leagueoflegends.com/" />
      <Event title="Valorant" description="Tactical FPS" link="https://playvalorant.com/" />
      <Event title="Roblox" description="Sandbox Platform" link="https://www.roblox.com/" />
      <Event title="Overwatch 2" description="Hero Shooter" link="https://overwatch.blizzard.com/" />
    </div>
  );
}

export default CardHolder;